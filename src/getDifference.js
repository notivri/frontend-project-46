import { getUnique, isPlainObject } from './utils.js'

export default function getDifference(file1, file2) {
  const keys1 = Object.keys(file1)
  const keys2 = Object.keys(file2)

  const unique = getUnique(keys1, keys2)
  const sorted = unique.toSorted((a, b) => a.localeCompare(b))

  return sorted.map((key) => {
    if (!Object.hasOwn(file1, key)) {
      return { key, type: 'added', value: file2[key] }
    }
    if (!Object.hasOwn(file2, key)) {
      return { key, type: 'deleted', value: file1[key] }
    }
    if (isPlainObject(file1[key]) && isPlainObject(file2[key])) {
      return { key, type: 'nested', children: getDifference(file1[key], file2[key]) }
    }
    if (file1[key] !== file2[key]) {
      return {
        key,
        type: 'changed',
        from: file1[key],
        to: file2[key],
      }
    }

    return { key, type: 'unchanged', value: file2[key] }
  })
}
