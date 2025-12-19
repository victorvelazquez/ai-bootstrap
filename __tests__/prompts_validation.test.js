const fs = require('fs');
const path = require('path');
const glob = require('glob');

describe('Markdown Files Validation', () => {
  const rootDir = path.join(__dirname, '..');

  // Get all markdown files in the project excluding node_modules, dist, .git
  const mdFiles = glob.sync('**/*.md', {
    cwd: rootDir,
    ignore: ['node_modules/**', 'dist/**', '.git/**'],
    absolute: true,
  });

  test('should not contain duplicate Story Point tables in prompts (must use shared reference)', () => {
    const promptsDir = path.join(rootDir, 'prompts');
    const spTableMarkers = ['| Story Points | Complexity |', '| Story Points | Time Estimate |'];

    const promptFiles = glob.sync('**/*.md', {
      cwd: promptsDir,
      ignore: ['shared/**'],
      absolute: true,
    });

    promptFiles.forEach((filePath) => {
      const content = fs.readFileSync(filePath, 'utf8');
      spTableMarkers.forEach((marker) => {
        if (content.includes(marker)) {
          const relativePath = path.relative(rootDir, filePath);
          throw new Error(
            `File ${relativePath} contains a duplicate Story Point table. Please use a reference to prompts/shared/story-points.md instead.`
          );
        }
      });
    });
  });

  test('should only use standard Markdown separators (exactly ---)', () => {
    mdFiles.forEach((filePath) => {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');

      lines.forEach((line, index) => {
        const trimmedLine = line.trim();
        // Check for any repeating character separator that is NOT "---"
        const match = trimmedLine.match(/^([━\-*=_~+]{3,})\s*$/);
        if (match) {
          const separator = match[1];
          if (separator !== '---') {
            const relativePath = path.relative(rootDir, filePath);
            throw new Error(
              `File ${relativePath} at line ${index + 1} uses a non-standard separator "${separator}". Please use "---" instead.`
            );
          }
        }
      });
    });
  });
});
