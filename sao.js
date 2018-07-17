module.exports = {
  prompts: {
    name: {
      message: 'What is the name of the new project?',
      default: ':folderName:'
    },
    description: {
      message: 'How would you descripe the new project?',
      default: ({name}) => `one react component: ${name}`
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
  installDependencies: false
}
