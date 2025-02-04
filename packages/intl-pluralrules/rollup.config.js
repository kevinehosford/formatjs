import { uglify } from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';

const resolveConfig = resolve({
  mainFields: ['module', 'main']
});
const uglifyConfig = uglify();
export default [
  {
    input: './dist-es6/polyfill-with-locales.js',
    output: {
      sourcemap: true,
      file: 'dist/polyfill-with-locales.js',
      format: 'umd',
      exports: 'named',
      name: 'IntlPluralRules'
    },
    plugins: [resolveConfig]
  },
  {
    input: './lib/index.js',
    output: {
      sourcemap: true,
      file: 'dist/umd/intl-pluralrules.js',
      format: 'umd',
      exports: 'named',
      name: 'IntlPluralRules'
    },
    plugins: [resolveConfig]
  },
  {
    input: './lib/index.js',
    output: {
      sourcemap: true,
      file: 'dist/umd/intl-pluralrules.min.js',
      format: 'umd',
      exports: 'named',
      name: 'IntlPluralRules'
    },
    plugins: [resolveConfig, uglifyConfig]
  },
  {
    input: './lib/polyfill.js',
    output: {
      sourcemap: true,
      file: 'dist/umd/polyfill-intl-pluralrules.js',
      format: 'umd'
    },
    plugins: [resolveConfig]
  },
];