# Error Handling

> Error handling strategies and best practices for {{PROJECT_NAME}}

---

## 🎯 Error Handling Strategy

**Approach:** {{ERROR_HANDLING_STRATEGY}}
**Error Logging:** {{ERROR_LOGGING_TOOL}}
**Recovery Strategy:** {{ERROR_RECOVERY_STRATEGY}}

---

## 🛡️ Error Boundaries (React)

### Basic Error Boundary

```typescript
// components/ErrorBoundary.tsx
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to error tracking service
    console.error('Error caught by boundary:', error, errorInfo);
    
    // Send to Sentry/LogRocket
    if (window.Sentry) {
      window.Sentry.captureException(error, { contexts: { react: errorInfo } });
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="error-boundary">
          <h2>Something went wrong</h2>
          <button onClick={() => this.setState({ hasError: false, error: null })}>
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
```

### Usage

```typescript
// App.tsx
<ErrorBoundary fallback={<ErrorFallback />}>
  <App />
</ErrorBoundary>
```

---

## 🔄 Global Error Handlers

### React Global Error Handler

```typescript
// utils/globalErrorHandler.ts
export function setupGlobalErrorHandler() {
  // Unhandled errors
  window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
    logError(event.error, { type: 'unhandled' });
  });

  // Unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled rejection:', event.reason);
    logError(event.reason, { type: 'unhandledRejection' });
  });
}
```

### Vue Global Error Handler

```typescript
// main.ts
app.config.errorHandler = (err, instance, info) => {
  console.error('Vue error:', err, info);
  logError(err, { component: instance?.$options.name, info });
};
```

### Angular Global Error Handler

```typescript
// services/global-error-handler.service.ts
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private errorLoggingService: ErrorLoggingService) {}

  handleError(error: Error): void {
    console.error('Angular error:', error);
    this.errorLoggingService.logError(error);
  }
}
```

---

## 📡 API Error Handling

### Error Types

```typescript
// types/errors.ts
export class ApiError extends Error {
  constructor(
    public status: number,
    public message: string,
    public code?: string,
    public details?: unknown
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export class NetworkError extends Error {
  constructor(message = 'Network error') {
    super(message);
    this.name = 'NetworkError';
  }
}

export class TimeoutError extends Error {
  constructor(message = 'Request timeout') {
    super(message);
    this.name = 'TimeoutError';
  }
}
```

### Error Handling by Status Code

```typescript
// utils/apiErrorHandler.ts
export function handleApiError(error: unknown): {
  message: string;
  action: 'retry' | 'redirect' | 'show' | 'ignore';
} {
  if (error instanceof ApiError) {
    switch (error.status) {
      case 400:
        return {
          message: 'Invalid request. Please check your input.',
          action: 'show',
        };
      case 401:
        return {
          message: 'Session expired. Please log in again.',
          action: 'redirect', // Redirect to login
        };
      case 403:
        return {
          message: 'Access denied.',
          action: 'show',
        };
      case 404:
        return {
          message: 'Resource not found.',
          action: 'show',
        };
      case 429:
        return {
          message: 'Too many requests. Please try again later.',
          action: 'retry',
        };
      case 500:
      case 502:
      case 503:
      case 504:
        return {
          message: 'Server error. Please try again.',
          action: 'retry',
        };
      default:
        return {
          message: 'An error occurred. Please try again.',
          action: 'show',
        };
    }
  }

  if (error instanceof NetworkError) {
    return {
      message: 'Network error. Please check your connection.',
      action: 'retry',
    };
  }

  if (error instanceof TimeoutError) {
    return {
      message: 'Request timed out. Please try again.',
      action: 'retry',
    };
  }

  return {
    message: 'An unexpected error occurred.',
    action: 'show',
  };
}
```

---

## 🔁 Retry Logic

### Exponential Backoff Retry

```typescript
// utils/retry.ts
export async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  maxRetries = 3,
  initialDelay = 1000
): Promise<T> {
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      if (attempt === maxRetries - 1) throw error;
      
      // Don't retry on 4xx errors (except 429)
      if (error instanceof ApiError && error.status >= 400 && error.status < 500 && error.status !== 429) {
        throw error;
      }

      // Exponential backoff: 1s, 2s, 4s
      const delay = initialDelay * Math.pow(2, attempt);
      await new Promise(resolve => setTimeout(resolve, delay));
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
  retry: (failureCount, error) => {
    // Don't retry on 4xx errors
    if (error instanceof ApiError && error.status >= 400 && error.status < 500) {
      return false;
    }
    return failureCount < 3;
  },
  retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
});
```

---

## 📝 Error Logging

### Error Logging Service

```typescript
// services/errorLogging.ts
import * as Sentry from '@sentry/react';

export function logError(error: Error, context?: Record<string, unknown>) {
  // Development: Console
  if (import.meta.env.DEV) {
    console.error('Error:', error, context);
    return;
  }

  // Production: Sentry
  Sentry.captureException(error, {
    contexts: {
      custom: context || {},
    },
    tags: {
      component: context?.component as string,
    },
  });
}
```

### User Context

```typescript
// Add user context to errors
Sentry.setUser({
  id: user.id,
  email: user.email,
  username: user.username,
});
```

---

## 🎨 Error UI Components

### Error Display Component

```typescript
// components/ErrorDisplay.tsx
interface ErrorDisplayProps {
  error: Error;
  onRetry?: () => void;
}

export const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ error, onRetry }) => {
  const { message, action } = handleApiError(error);

  return (
    <div className="error-display">
      <h3>Oops! Something went wrong</h3>
      <p>{message}</p>
      {action === 'retry' && onRetry && (
        <button onClick={onRetry}>Try Again</button>
      )}
    </div>
  );
};
```

### Fallback UI

```typescript
// components/ErrorFallback.tsx
export const ErrorFallback: React.FC<{ error: Error; resetError: () => void }> = ({
  error,
  resetError,
}) => {
  return (
    <div className="error-fallback">
      <h2>Something went wrong</h2>
      <pre>{error.message}</pre>
      <button onClick={resetError}>Try again</button>
    </div>
  );
};
```

---

## 🔗 Related Documents

- [API Integration](api-integration.md) - API error handling
- [State Management](state-management.md) - Error state management
- [Security](security.md) - Security error handling

---

**Last Updated:** {{GENERATION_DATE}}

**Error Handling Strategy:** {{ERROR_HANDLING_STRATEGY}}

