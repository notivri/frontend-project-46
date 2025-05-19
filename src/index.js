import * as fs from "fs"
import path from "path"
import parser from "./parser.js"

const getFullpath = (filepath) => path.resolve(process.cwd(), filepath)
const getFormat = (filepath) => path.extname(filepath).slice(1)

export default function getFileData(filepath) {
  const fullpath = getFullpath(filepath)
  const format = getFormat(filepath)
  const data = fs.readFileSync(fullpath, { encoding: "utf-8" })

  return parser(data, format)
}
