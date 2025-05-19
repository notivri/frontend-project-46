export default function getUnique(...arrays) {
  const result = []
  const set = new Set()

  for (const array of arrays) {
    for (const value of array) {
      if (!set.has(value)) {
        result.push(value)
        set.add(value)
      }
    }
  }

  return result
}
