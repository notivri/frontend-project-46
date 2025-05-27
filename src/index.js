import * as fs from 'fs'
import path from 'path'

import parser from './parser.js'
import getDifference from './getDifference.js'
import formatter from './formatter/index.js'

const getFullpath = filepath => path.resolve(process.cwd(), filepath)
const getFormat = filepath => path.extname(filepath).slice(1)

function getFileData(filepath) {
  const format = getFormat(filepath)
  const data = fs.readFileSync(filepath, { encoding: 'utf-8' })

  return parser(data, format)
}

export default function genDiff(file1, file2, style = 'stylish') {
  const file1Path = getFullpath(file1)
  const file2Path = getFullpath(file2)

  const file1Data = getFileData(file1Path)
  const file2Data = getFileData(file2Path)

  const diffData = getDifference(file1Data, file2Data)

  return formatter(diffData, style)
}
