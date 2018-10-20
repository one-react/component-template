const { spawnSync } = require('child_process')

module.exports = {
  prompts: {
    name: {
      message: 'What is the name of the new project?',
      default: ':folderName:'
    },
    description: {
      message: 'How would you describe the new project?'
    },
    username: {
      message: 'What is your GitHub username?',
      default: ':gitUser:',
      store: true
    },
    email: {
      message: 'What is your GitHub email?',
      default: ':gitEmail:',
      store: true
    },
    gitInit: {
      type: 'confirm',
      message: 'Should git init local repo',
      default: true
    }
  },
  move: {
    'gitignore': '.gitignore'
  },
  showTip: true,
  gitInit: (answers) => answers.gitInit,
  installDependencies: false,
  npmInstall: false,
  post (ctx) {
    if (ctx.answers.gitInit) {
      [
        ['git', ['checkout', '-b', 'dev']],
        ['git', ['add', '.']],
        ['git', ['commit', '-m', 'feat: initial commit']]
      ].forEach(([command, args]) => {
        spawnSync(command, args, {
          stdio: 'inherit'
        })
      })
    }
  }
}
