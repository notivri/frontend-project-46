import { isPlainObject } from '../utils.js';

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

function stylish(changeData, depth = 1) {
  return changeData.map((data) => {
    switch (data.type) {
      case 'added': {
        return `${spacing(depth, false)}+ ${data.key}: ${stringify(data.value, depth)}`;
      }
      case 'deleted': {
        return `${spacing(depth, false)}- ${data.key}: ${stringify(data.value, depth)}`;
      }
      case 'changed': {
        return [`${spacing(depth, false)}- ${data.key}: ${stringify(data.from, depth)}`, `${spacing(depth, false)}+ ${data.key}: ${stringify(data.to, depth)}`].join('\n');
      }
      case 'nested': {
        const children = stylish(data.children, depth + 1).join('\n');
        return `${spacing(depth)}${data.key}: {\n${children}\n${spacing(depth)}}`;
      }
      default:
        return `${spacing(depth)}${data.key}: ${stringify(data.value, depth)}`;
    }
  });
}

export default function format(data) {
  return `{\n${stylish(data).join('\n')}\n}`;
}
