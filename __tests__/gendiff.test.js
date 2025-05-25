/* eslint-disable no-undef */
import * as fs from 'fs';

import genDiff from '../src/index.js';
import parseFormat from '../src/parser.js';

const JSONfile1 = './__fixtures__/file1.json';
const JSONfile2 = './__fixtures__/file2.json';

const stylish = fs.readFileSync('__fixtures__/expected.json.txt', { encoding: 'utf-8' }).trim();
const plain = fs.readFileSync('__fixtures__/expected.plain.txt', { encoding: 'utf-8' }).trim();

it('should generate a diff between two files in stylish', () => {
  expect(genDiff(JSONfile1, JSONfile2)).toBe(stylish);
  expect(genDiff(JSONfile1, JSONfile2, 'stylish')).toBe(stylish);
});

it('should generate a diff between two files in plain', () => {
  expect(genDiff(JSONfile1, JSONfile2, 'plain')).toBe(plain);
});

it('should throw error for unknown format', () => {
  expect(() => parseFormat('nothing', 'some')).toThrow();
});
