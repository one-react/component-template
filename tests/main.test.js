const sao = require('sao')
const path = require('path')

const generator = path.join(__dirname, '..')

describe('test', () => {
  it('ok', async () => {
    const stream = await sao.mock({ generator }, {
      name: 'stub',
      username: 'placeholder',
      email: 'placholder@mymail.com'
    })

    expect(stream.fileList).toMatchSnapshot()

    const pkg = JSON.parse(await stream.readFile('package.json'))
    expect(pkg.name).toBe('or-stub')
    expect(pkg.author).toBe('placeholder <placholder@mymail.com>')
    expect(pkg.license).toBe('MIT')

    expect(await stream.readFile('readme.md')).toMatchSnapshot('readme.md content')
    expect(await stream.readFile('.babelrc.js')).toMatchSnapshot('.babelrc.js')
    expect(await stream.readFile('tsconfig.json')).toMatchSnapshot('tsconfig.json')
  })
})
