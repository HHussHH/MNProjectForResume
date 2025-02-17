module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
        'plugin:storybook/recommended', 'plugin:storybook/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'i18next', 'react-hooks'],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [2, {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        }],
        'import/no-unresolved': 'off',
        'react/require-default-props': 'warn',
        'import/prefer-default-export': 'off',
        'react/react-in-jsx-scope': 'off',
        'import/extensions': 'off',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'no-unused-vars': 'warn',
        'no-undef': 'warn',
        'react/jsx-props-no-spreading': 'off',
        camelcase: 'off',
        'i18next/no-literal-string': ['error', {
            markupOnly: true,
            ignoreAttribute: ['data-testid', 'to'],
        }],
        'max-len': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'no-param-reassign': 'off',
    },
    globals: {
        __IS_DEV__: true,
    },
    overrides: [{
        files: ['**/src/**/*.test.{ts,tsx}'],
        rules: {
            'i18next/no-literal-string': 'off',
        },
    }],
};
