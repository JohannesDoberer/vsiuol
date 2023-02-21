import copy from 'rollup-plugin-copy'
export default {
    input: 'src/vsiuol-support-lib.js',
    output: {
        file: 'public/vsiuol-support-lib.js',
        format: 'es',
        compact: true,
        sourcemap: 'inline'
    },
    plugins: [
        copy({
            targets: [
                { src: 'README.md', dest: 'public' }
            ]
        })
    ]
};
