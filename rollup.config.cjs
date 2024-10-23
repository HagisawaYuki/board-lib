// import peerDepsExternal from 'rollup-plugin-peer-deps-external';
// import resolve from '@rollup/plugin-node-resolve';
// import commonjs from '@rollup/plugin-commonjs';
// import typescript from 'rollup-plugin-typescript2';
// import postcss from 'rollup-plugin-postcss';
// import del from 'rollup-plugin-delete';
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('rollup-plugin-typescript2');
const postcss = require('rollup-plugin-postcss');
const del = require('rollup-plugin-delete');
const packageJson = require('./package.json');

// eslint-disable-next-line import/no-anonymous-default-export
// export default {
module.exports = {
  input: 'app/lib.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    del({ targets: 'dist/*' }),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: 'tsconfig.build.json',
      useTsconfigDeclarationDir: true,
    }),
    postcss(),
  ],
};
