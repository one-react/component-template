const sao = require('sao')
const path = require('path')

const template = {
  fromPath: path.join(__dirname, '..')
}

describe('test', () => {
  it('default values', async () => {
    const stream = await sao.mockPrompt(template, {
      name: 'stub'
    })

    expect(stream.fileList).toMatchSnapshot()

    const pkg = JSON.parse(stream.fileContents('package.json'))
    expect(pkg.license).toBe('MIT')

    expect(stream.fileContents('.babelrc')).toMatchSnapshot()
    expect(stream.fileContents('.npmrc')).toMatchSnapshot()
  })
})
