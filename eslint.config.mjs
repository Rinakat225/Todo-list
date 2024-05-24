import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import {fixupConfigRules} from '@eslint/compat';

export default [
    {languageOptions: {globals: globals.browser}},
    pluginJs.configs.recommended,
    ...fixupConfigRules(pluginReactConfig),

    {
        env: {
            browser: true,
            es2020: true,
            jest: true,
            node: true,
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        extends: [
            'eslint:recommended',
            'plugin:react/recommended',
            'plugin:@typescript-eslint/eslint-recommended',
            'plugin:@typescript-eslint/recommended',
            'plugin:tailwindcss/recommended',
        ],
        parser: '@typescript-eslint/parser',
        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
            ecmaVersion: 11,
            sourceType: 'module',
        },
    },
];
