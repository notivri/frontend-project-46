import stylish from './stylish.js'
import plain from './plain.js'

export default function styleFormatter(data, style) {
  switch (style) {
    case 'stylish':
      return stylish(data)
    case 'plain':
      return plain(data)
    case 'json':
      return JSON.stringify(data)
    default:
      throw new Error(`Unknown type of style: ${style}`)
  }
}

export { stylish, plain }
