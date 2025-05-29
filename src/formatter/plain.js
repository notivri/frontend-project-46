import { plainStringify } from '../utils.js'

export default function plain(changeData, path = '') {
  const filtered = changeData.filter(item => item.type !== 'unchanged')

  return filtered
    .map((data) => {
      switch (data.type) {
        case 'added': {
          return `Property '${path}${data.key}' was added with value: ${plainStringify(data.value)}`
        }
        case 'changed': {
          const from = plainStringify(data.from)
          const to = plainStringify(data.to)

          return `Property '${path}${data.key}' was updated. From ${from} to ${to}`
        }
        case 'nested': {
          return plain(data.children, `${path}${data.key}.`)
        }
        default:
          return `Property '${path}${data.key}' was removed`
      }
    })
    .join('\n')
}
