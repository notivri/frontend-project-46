export default function stylish(changeData) {
  return changeData.reduce((acc, data) => {
    switch (data.type) {
      case 'unchanged':
        acc[`  ${data.key}`] = data.value;
        return acc;
      case 'changed':
        acc[`- ${data.key}`] = data.from;
        acc[`+ ${data.key}`] = data.to;
        return acc;
      case 'deleted':
        acc[`- ${data.key}`] = data.value;
        return acc;
      case 'added':
        acc[`+ ${data.key}`] = data.value;
        return acc;
      default:
        acc[data.key] = data.value;
        return acc;
    }
  }, {});
}
