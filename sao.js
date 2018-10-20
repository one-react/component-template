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
    }
  },
  move: {
    'gitignore': '.gitignore'
  },
  showTip: true,
  gitInit: true,
  installDependencies: false,
  npmInstall: false,
  post () {
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
