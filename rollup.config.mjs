import terser from '@rollup/plugin-terser';

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/bundle.cjs',
        format: 'cjs'
    },
    plugins: [terser()]
};