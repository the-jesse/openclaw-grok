/** @type {import('@commitlint/types').UserConfig} */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-line-length': [2, 'always', 100],
    'footer-max-line-length': [2, 'always', 100],
    'scope-enum': [
      2,
      'always',
      [
        'grok-harness',
        'openclaw-plugin',
        'acp',
        'worktree',
        'git',
        'docs',
        'ci',
        'deps',
        'release'
      ]
    ]
  }
};
