import * as fs from 'fs'

import genDiff from '../src/index.js'
import parseFormat from '../src/parser.js'
import styleFormatter from '../src/formatter/index.js'

const JSON1 = './__fixtures__/file1.json'
const JSON2 = './__fixtures__/file2.json'

const YAML1 = './__fixtures__/file1.yaml'
const YAML2 = './__fixtures__/file2.yaml'

const stylish = fs.readFileSync('__fixtures__/expected.stylish.txt', { encoding: 'utf-8' }).trim()
const plain = fs.readFileSync('__fixtures__/expected.plain.txt', { encoding: 'utf-8' }).trim()
const json = fs.readFileSync('__fixtures__/expected.json.txt', { encoding: 'utf-8' }).trim()

it('should generate a diff between two files in stylish', () => {
  expect(genDiff(JSON1, JSON2)).toBe(stylish)
  expect(genDiff(JSON1, JSON2, 'stylish')).toBe(stylish)
  expect(genDiff(YAML1, YAML2, 'stylish')).toBe(stylish)
})

it('should generate a diff between two files in plain', () => {
  expect(genDiff(JSON1, JSON2, 'plain')).toBe(plain)
  expect(genDiff(YAML1, YAML2, 'plain')).toBe(plain)
})

it('should generate a diff between two files in json', () => {
  expect(genDiff(JSON1, JSON2, 'json')).toBe(json)
  expect(genDiff(YAML1, YAML2, 'json')).toBe(json)
})

it('should throw error for unknown format', () => {
  expect(() => parseFormat('nothing', 'some')).toThrow()
  expect(() => styleFormatter('nothing', 'some')).toThrow()
  expect(() => genDiff('nothing', 'some')).toThrow()
})
