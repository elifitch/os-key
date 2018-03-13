import buble from 'rollup-plugin-buble';

export default {
  input: 'index.js',
  output: {
    file: './dist/index.js',
    name: 'OSKey',
    format: 'iife'
  },
  plugins: [buble()]
};