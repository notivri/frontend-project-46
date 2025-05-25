/* eslint-disable array-callback-return */

const spaceCount = 4;

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

const stringify = (data, depth = 0) => {
  if (typeof data !== 'object' || data === null) {
    return String(data);
  }

  const indent = (lvl) => ' '.repeat(lvl * spaceCount);

  const lines = Object.entries(data).map(([key, value]) => `${indent(depth + 1)}${key}: ${stringify(value, depth + 1)}`);

  return `{\n${lines.join('\n')}\n${indent(depth)}}`;
};

export { getUnique, stringify };
