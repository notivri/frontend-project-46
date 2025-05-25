/* eslint-disable array-callback-return */
export default function getUnique(...arrays) {
  const result = [];
  const unique = new Set();

  arrays.forEach((array) => {
    array.forEach((value) => {
      if (!unique.has(value)) {
        result.push(value);
        unique.add(value);
      }
    });
  });

  return result;
}
