/* eslint-disable array-callback-return */

const isPlainObject = (obj) => obj !== null && typeof obj === 'object' && !Array.isArray(obj);

const getUnique = (...arrays) => {
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
};

export { getUnique, isPlainObject };
