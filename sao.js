module.exports = {
  prompts: {
    name: {
      message: 'What is the name of the new project?',
      default: ':folderName:'
    },
    description: {
      message: 'How would you descripe the new project?'
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
      message: 'Should git init then?',
      default: true,
    },
  },
  move: {
    'gitignore': '.gitignore'
  },
  showTip: true,
  gitInit: ({ gitInit }) => gitInit,
  installDependencies: false,
  npmInstall: true,
}
