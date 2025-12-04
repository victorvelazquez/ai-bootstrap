# API Integration

> API communication patterns and best practices for {{PROJECT_NAME}}

---

## 🎯 API Integration Strategy

**Pattern:** {{API_INTEGRATION_PATTERN}}
**Client:** {{API_CLIENT}}
**Base URL:** {{API_BASE_URL}}

---

## 📡 API Client Setup

### Base Configuration

```typescript
// services/api.ts
import axios from 'axios';
// or: import { createClient } from '@urql/core';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Add auth token
    const token = getAuthToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    // Handle 401 - Unauthorized
    if (error.response?.status === 401) {
      await handleUnauthorized();
    }
    return Promise.reject(error);
  }
);

export default apiClient;
```

---

## 🏗️ API Layer Pattern

### Service Layer (Recommended)

**Structure:**
```
services/
├── api.ts          # Base client configuration
├── users.ts        # User endpoints
├── products.ts     # Product endpoints
└── orders.ts       # Order endpoints
```

**Example:**
```typescript
// services/users.ts
import apiClient from './api';

export const usersService = {
  async getById(id: string): Promise<User> {
    const { data } = await apiClient.get(`/users/${id}`);
    return data;
  },

  async create(userData: CreateUserDto): Promise<User> {
    const { data } = await apiClient.post('/users', userData);
    return data;
  },

  async update(id: string, userData: UpdateUserDto): Promise<User> {
    const { data } = await apiClient.put(`/users/${id}`, userData);
    return data;
  },

  async delete(id: string): Promise<void> {
    await apiClient.delete(`/users/${id}`);
  },
};
```

### Hooks/Composables Layer

**React Example:**
```typescript
// hooks/useUsers.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { usersService } from '@/services/users';

export const useUsers = () => {
  const queryClient = useQueryClient();

  const getById = (id: string) => {
    return useQuery({
      queryKey: ['users', id],
      queryFn: () => usersService.getById(id),
    });
  };

  const create = useMutation({
    mutationFn: usersService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  return { getById, create };
};
```

**Vue Example:**
```typescript
// composables/useUsers.ts
import { useQuery, useMutation } from '@tanstack/vue-query';
import { usersService } from '@/services/users';

export const useUsers = () => {
  const getById = (id: string) => {
    return useQuery({
      queryKey: ['users', id],
      queryFn: () => usersService.getById(id),
    });
  };

  const create = useMutation({
    mutationFn: usersService.create,
  });

  return { getById, create };
};
```

---

## 🔄 Error Handling

### Error Types

```typescript
// types/api.ts
export class ApiError extends Error {
  constructor(
    public status: number,
    public message: string,
    public code?: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NetworkError';
  }
}

export class TimeoutError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'TimeoutError';
  }
}
```

### Error Handling Strategy

```typescript
// utils/errorHandler.ts
import { ApiError, NetworkError, TimeoutError } from '@/types/api';

export function handleApiError(error: unknown): string {
  if (error instanceof ApiError) {
    switch (error.status) {
      case 400:
        return 'Invalid request. Please check your input.';
      case 401:
        return 'Unauthorized. Please log in again.';
      case 403:
        return 'Access denied. You don\'t have permission.';
      case 404:
        return 'Resource not found.';
      case 500:
        return 'Server error. Please try again later.';
      default:
        return 'An error occurred. Please try again.';
    }
  }

  if (error instanceof NetworkError) {
    return 'Network error. Please check your connection.';
  }

  if (error instanceof TimeoutError) {
    return 'Request timed out. Please try again.';
  }

  return 'An unexpected error occurred.';
}
```

---

## 🔁 Retry Strategy

### Automatic Retry

```typescript
// utils/retry.ts
export async function retryRequest<T>(
  fn: () => Promise<T>,
  maxRetries = 3,
  delay = 1000
): Promise<T> {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      
      // Exponential backoff
      await new Promise(resolve => setTimeout(resolve, delay * Math.pow(2, i)));
    }
  }
  throw new Error('Max retries exceeded');
}
```

### Usage with TanStack Query

```typescript
import { useQuery } from '@tanstack/react-query';

const { data } = useQuery({
  queryKey: ['users', id],
  queryFn: () => usersService.getById(id),
  retry: 3,
  retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
});
```

---

## 🔐 Authentication

### Token Management

```typescript
// utils/auth.ts
const TOKEN_KEY = 'auth_token';

export function getAuthToken(): string | null {
  // Option 1: httpOnly cookie (most secure)
  // Token sent automatically with requests
  
  // Option 2: localStorage (less secure)
  return localStorage.getItem(TOKEN_KEY);
  
  // Option 3: Memory storage (most secure, lost on refresh)
  // Store in closure variable
}

export function setAuthToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token);
}

export function removeAuthToken(): void {
  localStorage.removeItem(TOKEN_KEY);
}
```

### Token Refresh

```typescript
// services/auth.ts
let refreshTokenPromise: Promise<string> | null = null;

export async function refreshAuthToken(): Promise<string> {
  if (refreshTokenPromise) {
    return refreshTokenPromise;
  }

  refreshTokenPromise = (async () => {
    try {
      const { data } = await apiClient.post('/auth/refresh');
      setAuthToken(data.accessToken);
      return data.accessToken;
    } finally {
      refreshTokenPromise = null;
    }
  })();

  return refreshTokenPromise;
}
```

---

## 📊 Request/Response Transformation

### Request Transformation

```typescript
// Transform data before sending
apiClient.interceptors.request.use((config) => {
  if (config.data) {
    // Convert dates to ISO strings
    config.data = transformDates(config.data);
  }
  return config;
});
```

### Response Transformation

```typescript
// Transform data after receiving
apiClient.interceptors.response.use((response) => {
  if (response.data) {
    // Convert ISO strings to Date objects
    response.data = parseDates(response.data);
  }
  return response;
});
```

---

## 🧪 Testing API Integration

### Mocking API Calls

```typescript
// Using MSW (Mock Service Worker)
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('/api/users/:id', (req, res, ctx) => {
    return res(
      ctx.json({
        id: req.params.id,
        name: 'John Doe',
        email: 'john@example.com',
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
```

---

## 🔗 Related Documents

- [State Management](state-management.md) - Server state patterns
- [Error Handling](error-handling.md) - Error handling strategies
- [Security](security.md) - Security best practices

---

**Last Updated:** {{GENERATION_DATE}}

**API Pattern:** {{API_INTEGRATION_PATTERN}}
**Client:** {{API_CLIENT}}

