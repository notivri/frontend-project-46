export default function parseFormat(file, format) {
  switch (format) {
    case 'json':
      return JSON.parse(file);
    default:
      throw new Error(`Unknown format '${format}'`);
  }
}
