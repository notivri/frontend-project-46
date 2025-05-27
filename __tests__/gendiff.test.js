import * as fs from 'fs'

import genDiff from '../src/index.js'
import parseFormat from '../src/parser.js'
import styleFormatter from '../src/formatter/index.js'

const JSONfile1 = './__fixtures__/file1.json'
const JSONfile2 = './__fixtures__/file2.json'

const YAMLfile1 = './__fixtures__/file1.yaml'
const YAMLfile2 = './__fixtures__/file2.yml'

const stylish = fs.readFileSync('__fixtures__/expected.stylish.txt', { encoding: 'utf-8' }).trim()
const plain = fs.readFileSync('__fixtures__/expected.plain.txt', { encoding: 'utf-8' }).trim()
const json = fs.readFileSync('__fixtures__/expected.json.txt', { encoding: 'utf-8' }).trim()

it('should generate a diff between two files in stylish', () => {
  expect(genDiff(JSONfile1, JSONfile2)).toBe(stylish)
  expect(genDiff(JSONfile1, JSONfile2, 'stylish')).toBe(stylish)
  expect(genDiff(YAMLfile1, YAMLfile2, 'stylish')).toBe(stylish)
})

it('should generate a diff between two files in plain', () => {
  expect(genDiff(JSONfile1, JSONfile2, 'plain')).toBe(plain)
  expect(genDiff(YAMLfile1, YAMLfile2, 'plain')).toBe(plain)
})

it('should generate a diff between two files in json', () => {
  expect(genDiff(JSONfile1, JSONfile2, 'json')).toBe(json)
  expect(genDiff(YAMLfile1, YAMLfile2, 'json')).toBe(json)
})

it('should throw error for unknown format', () => {
  expect(() => parseFormat('nothing', 'some')).toThrow()
  expect(() => styleFormatter('nothing', 'some')).toThrow()
})
