module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['react', '@typescript-eslint', 'prettier'],
    settings: {
        react: {
            pragma: 'React',
            version: 'detect',
        },
    },
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    rules: {
        'prettier/prettier': 'warn',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'react/prop-types': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
    },
};
