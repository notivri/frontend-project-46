import { stylishStringify, spacing } from '../utils.js'

function stylish(changeData, depth = 1) {
  return changeData.map((data) => {
    switch (data.type) {
      case 'added': {
        return `${spacing(depth, false)}+ ${data.key}: ${stylishStringify(data.value, depth)}`
      }
      case 'deleted': {
        return `${spacing(depth, false)}- ${data.key}: ${stylishStringify(data.value, depth)}`
      }
      case 'changed': {
        return [`${spacing(depth, false)}- ${data.key}: ${stylishStringify(data.from, depth)}`, `${spacing(depth, false)}+ ${data.key}: ${stylishStringify(data.to, depth)}`].join('\n')
      }
      case 'nested': {
        const children = stylish(data.children, depth + 1).join('\n')
        return `${spacing(depth)}${data.key}: {\n${children}\n${spacing(depth)}}`
      }
      default:
        return `${spacing(depth)}${data.key}: ${stylishStringify(data.value, depth)}`
    }
  })
}

export default function format(data) {
  return `{\n${stylish(data).join('\n')}\n}`
}
