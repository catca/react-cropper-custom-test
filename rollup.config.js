import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import alias from '@rollup/plugin-alias';
import dts from 'rollup-plugin-dts';

import path from 'path';

export default [
  {
    input: "./src/index.ts",
    output: [
    {
      file: 'dist/index.cjs.ts',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.ts',
      format: 'esm',
      sourcemap: true,
    },
  ],
    plugins: [
      // 바벨 트랜스파일러 설정
      babel({
        babelHelpers: "bundled",
        presets: [
          "@babel/preset-env",
          "@babel/preset-react",
          "@babel/preset-typescript",
        ],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      }),
      alias({
        entries: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
      }),

      // 타입스크립트
      typescript(),
      dts(),
    ],
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'cjs' }],

    plugins: [
      dts(),
      alias({
        entries: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
      }),
    ],
  },
];