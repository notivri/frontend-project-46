import { getFileData, getFullpath } from './utils.js'

import getDifference from './getDifference.js'
import formatter from './formatter/index.js'

export default function genDiff(file1, file2, style = 'stylish') {
  const file1Path = getFullpath(file1)
  const file2Path = getFullpath(file2)

  const file1Data = getFileData(file1Path)
  const file2Data = getFileData(file2Path)

  const diffData = getDifference(file1Data, file2Data)

  return formatter(diffData, style)
}
