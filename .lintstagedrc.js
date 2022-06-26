module.exports = {
  '**/*.ts?(x)': [
    'prettier --write',
    (filenames) =>
      `next lint --fix --file ${filenames
        .map((file) => file.split(process.cwd())[1])
        .join(' --file ')}`,
  ],
  '**/*.{json,html,yml,yaml,css,less,scss,md,graphql,mdx}': 'prettier --write',
}
