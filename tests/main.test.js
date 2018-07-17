const sao = require('sao')
const path = require('path')

const template = {
  fromPath: path.join(__dirname, '..')
}

describe('test', () => {
  it('ok', async () => {
    const stream = await sao.mockPrompt(template, {
      name: 'stub',
      username: 'placeholder',
      email: 'placholder@mymail.com'
    })

    expect(stream.fileList).toMatchSnapshot()

    const pkg = JSON.parse(stream.fileContents('package.json'))
    expect(pkg.name).toBe('or-stub')
    expect(pkg.author).toBe('placeholder <placholder@mymail.com>')
    expect(pkg.license).toBe('MIT')

    expect(stream.fileContents('readme.md')).toMatchSnapshot()
    expect(stream.fileContents('.babelrc')).toMatchSnapshot()
    expect(stream.fileContents('.npmrc')).toMatchSnapshot()
  })
})
