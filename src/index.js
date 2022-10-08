const fs = require('fs')
const { promisify } = require('util')
const theme = require('./theme')
const { name, contributes } = require('../package.json')

const writeFile = promisify(fs.writeFile)
const readFile = promisify(fs.readFile)
const themeConfig = contributes?.themes?.[0]

const buildTheme = async () => {
  try {
    const colorsCss = await readFile('./src/colors.css', 'utf-8')
    const inlineColors = colorsCss
      .replaceAll(/\s|\/\*.*\*\//gm, '')
      .replaceAll(/\;?}|\.\w+\{/gm, '')
    const colorsList = inlineColors.split(';').map((color) => {
      const [property, hex] = color.split(':')
      return `"${property}":"${hex}"`
    })
    const colors = JSON.parse(`{${colorsList.join(',')}}`)

    await writeFile(themeConfig?.path, JSON.stringify(theme(name, colors)))
    console.log(`🌺 ${themeConfig?.label} was built at (${themeConfig?.path}) 💅`)
  } catch (error) {
    console.log(error)
  }
}
buildTheme()
