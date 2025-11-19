const fs = require('fs');
const path = require('path');

describe('ai-bootstrap templates', () => {
  it('should include AGENT.template.md in templates/', () => {
    const agentTemplate = path.resolve(__dirname, '..', 'templates', 'AGENT.template.md');
    expect(fs.existsSync(agentTemplate)).toBe(true);
  });

  it('should include .env.example.template in templates/', () => {
    const envTemplate = path.resolve(__dirname, '..', 'templates', '.env.example.template');
    expect(fs.existsSync(envTemplate)).toBe(true);
  });
});
