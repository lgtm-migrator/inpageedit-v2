module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {},
  globals: {
    $: 'readonly',
    mw: 'readonly',
    ssi_modal: 'readonly',
    InPageEdit: 'writeable',
  },
}
