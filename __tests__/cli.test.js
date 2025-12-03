const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');

const PROJECT_ROOT = path.resolve(__dirname, '..');
const CLI_PATH = path.resolve(PROJECT_ROOT, 'dist', 'cli.js');
const TSC_PATH = path.resolve(PROJECT_ROOT, 'node_modules', 'typescript', 'bin', 'tsc');

const createTempDir = () => fs.mkdtempSync(path.join(os.tmpdir(), 'ai-bootstrap-test-'));

const removeDir = (dir) => {
  fs.rmSync(dir, { recursive: true, force: true });
};

describe('ai-bootstrap CLI', () => {
  let tempDir;

  beforeAll(() => {
    execFileSync(process.execPath, [TSC_PATH], {
      cwd: PROJECT_ROOT,
      stdio: 'pipe'
    });
  });

  beforeEach(() => {
    tempDir = createTempDir();
  });

  afterEach(() => {
    if (tempDir && fs.existsSync(tempDir)) {
      removeDir(tempDir);
    }
  });

  it('initializes the bootstrap structure when an AI tool is supplied (backend default)', () => {
    execFileSync('node', [
      CLI_PATH, 'init', tempDir, 
      '--ai', 'copilot',
      '--name', 'Test Project',
      '--description', 'Test Description'
    ], {
      cwd: PROJECT_ROOT,
      stdio: 'pipe'
    });

    const configPath = path.join(tempDir, '.ai-bootstrap', 'core', 'config.json');
    expect(fs.existsSync(configPath)).toBe(true);

    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    expect(config.aiTools).toEqual(['copilot']);
    expect(config.projectType).toBe('backend');
    expect(config.backend).toBe(true);
    expect(config.frontend).toBe(false);
  });

  it('initializes frontend project when --type frontend is supplied', () => {
    execFileSync('node', [
      CLI_PATH, 'init', tempDir, 
      '--ai', 'cursor',
      '--type', 'frontend',
      '--name', 'Frontend App',
      '--description', 'Frontend Test Description'
    ], {
      cwd: PROJECT_ROOT,
      stdio: 'pipe'
    });

    const configPath = path.join(tempDir, '.ai-bootstrap', 'core', 'config.json');
    expect(fs.existsSync(configPath)).toBe(true);

    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    expect(config.aiTools).toEqual(['cursor']);
    expect(config.projectType).toBe('frontend');
    expect(config.backend).toBe(false);
    expect(config.frontend).toBe(true);

    // Verify frontend prompts are copied
    const frontendPromptPath = path.join(tempDir, '.cursor', 'commands', 'bootstrap.md');
    expect(fs.existsSync(frontendPromptPath)).toBe(true);

    // Verify frontend templates are copied (templates are copied directly to templates/, not templates/frontend/)
    const frontendTemplatePath = path.join(tempDir, '.ai-bootstrap', 'templates', 'ai-instructions.md');
    expect(fs.existsSync(frontendTemplatePath)).toBe(true);
    
    // Verify frontend-specific template exists
    const componentsTemplatePath = path.join(tempDir, '.ai-bootstrap', 'templates', 'docs', 'components.md');
    expect(fs.existsSync(componentsTemplatePath)).toBe(true);
  });

  it('reports initialized status via the check command (backend)', () => {
    execFileSync('node', [
      CLI_PATH, 'init', tempDir, 
      '--ai', 'claude',
      '--name', 'Test Project',
      '--description', 'Test Description'
    ], {
      cwd: PROJECT_ROOT,
      stdio: 'pipe'
    });

    expect(() => {
      execFileSync('node', [CLI_PATH, 'check'], {
        cwd: tempDir,
        stdio: 'pipe'
      });
    }).not.toThrow();
  });

  it('reports initialized status via the check command (frontend)', () => {
    execFileSync('node', [
      CLI_PATH, 'init', tempDir, 
      '--ai', 'claude',
      '--type', 'frontend',
      '--name', 'Frontend Project',
      '--description', 'Frontend Description'
    ], {
      cwd: PROJECT_ROOT,
      stdio: 'pipe'
    });

    const output = execFileSync('node', [CLI_PATH, 'check'], {
      cwd: tempDir,
      stdio: 'pipe',
      encoding: 'utf8'
    });

    expect(output).toContain('Frontend');
    expect(output).toContain('frontend');
  });
});
