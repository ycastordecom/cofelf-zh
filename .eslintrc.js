/*
 * @Descripttion:
 * @version:
 * @Author: dekun lu
 * @Email: 1364978779@qq.com
 * @Date: 2023-02-12 22:49:08
 * @LastEditors: dekun lu
 * @LastEditTime: 2023-02-12 23:01:10
 */
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/essential', 'plugin:@typescript-eslint/eslint-recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    process: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    // parser: 'vue-eslint-parser',
    parserOptions: { parser: '@typescript-eslint/parser' },
  },
  // plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/valid-v-model': 'off',
    'vue/no-v-for-template-key': 'off',
    'vue/no-v-model-argument': 'off',
  },
};
