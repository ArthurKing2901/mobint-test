module.exports = {
    presets: [
        ['@babel/preset-env'],
        '@babel/preset-typescript',
        [
            '@babel/preset-react',
            {
                development: true,
                runtime: 'automatic',
            },
        ],
    ],
}
