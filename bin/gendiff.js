#!/usr/bin/env node

import { Command } from 'commander'

const program = new Command()

program
  .name('gendiff')
  .arguments('filepath1')
  .arguments('filepath2')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .option('-f, --format [type]', 'output format')

program.parse()
