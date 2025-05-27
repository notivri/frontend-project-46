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

const replacer = ' ';
const signSpace = 2;
const spacesCount = 4;

const spacing = (depth, isFull = true) => {
  const size = depth * spacesCount;
  return isFull ? replacer.repeat(size) : replacer.repeat(size - signSpace);
};

const stringify = (data, depth = 0) => {
  if (!isPlainObject(data)) return String(data);

  const lines = Object.entries(data).map(([key, value]) => `${spacing(depth + 1)}${key}: ${stringify(value, depth + 1)}`);

  return `{\n${lines.join('\n')}\n${spacing(depth)}}`;
};

export {
  getUnique, stringify, isPlainObject, spacing,
};
