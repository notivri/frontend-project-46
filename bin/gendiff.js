#!/usr/bin/env node

import { Command } from 'commander'
import getDiff from '../src/index.js'

const program = new Command()

program
  .name('gendiff')
  .arguments('filepath1')
  .arguments('filepath2')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    const options = program.opts()

    console.log(getDiff(filepath1, filepath2, options.format))
  })

program.parse(process.argv)
