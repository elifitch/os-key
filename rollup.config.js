import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';

export default {
  input: 'index.js',
  output: {
    file: './dist/index.js',
    name: 'OSKey',
    format: 'cjs'
  },
  plugins: [ buble(), uglify() ]
};