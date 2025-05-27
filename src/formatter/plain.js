import { isPlainObject } from '../utils.js';

const stringify = (value) => {
  if (isPlainObject(value)) return '[complex value]';
  if (typeof value === 'string') return `'${value}'`;
  return String(value);
};

export default function plain(changeData, path = '') {
  const filtered = changeData.filter((item) => item.type !== 'unchanged');

  return filtered
    .map((data) => {
      switch (data.type) {
        case 'added': {
          return `Property '${path}${data.key}' was added with value: ${stringify(data.value, data.key)}`;
        }
        case 'changed': {
          return `Property '${path}${data.key}' was updated. From ${stringify(data.from)} to ${stringify(data.to, data.key)}`;
        }
        case 'nested': {
          return plain(data.children, `${path}${data.key}.`);
        }
        default:
          return `Property '${path}${data.key}' was removed`;
      }
    })
    .join('\n');
}
