const replacer = ' '
const signSpace = 2
const spacesCount = 4

const isPlainObject = obj => obj !== null && typeof obj === 'object' && !Array.isArray(obj)

const getUnique = (...arrays) => {
  const result = []
  const unique = new Set()

  arrays.forEach((array) => {
    array.forEach((value) => {
      if (!unique.has(value)) {
        result.push(value)
        unique.add(value)
      }
    })
  })

  return result
}

const spacing = (depth, isFull = true) => {
  const size = depth * spacesCount

  return isFull ? replacer.repeat(size) : replacer.repeat(size - signSpace)
}

const stylishStringify = (data, depth = 0, format = 'stylish') => {
  if (!isPlainObject(data)) return String(data)

  const lines = Object.entries(data).map(([key, value]) => `${spacing(depth + 1)}${key}: ${stylishStringify(value, depth + 1, format)}`)

  return `{\n${lines.join('\n')}\n${spacing(depth)}}`
}

const plainStringify = (data) => {
  if (isPlainObject(data)) return '[complex value]'
  if (typeof data === 'string') return `'${data}'`

  return String(data)
}

export { getUnique, isPlainObject, stylishStringify, plainStringify, spacing }
