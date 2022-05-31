module.exports = {
  bracketSpacing: true,
  bracketSameLine: true,
  endOfLine: 'auto',
  printWidth: 120,
  proseWrap: 'preserve',
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: 'none',
  useTabs: false,
  overrides: [
    {
      files: '*.component.html',
      options: {
        parser: 'angular'
      }
    },
    {
      files: '*.js',
      options: {
        arrowParens: 'always',
        singleQuote: true
      }
    },
    {
      files: '*.md',
      options: {
        proseWrap: 'never'
      }
    },
    {
      files: '*.ts',
      options: {
        arrowParens: 'always',
        singleQuote: true
      }
    }
  ]
};
