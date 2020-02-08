module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    "extends": [
        "react-app",
        "airbnb",
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        "semi": 0,
        'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        'max-len': ["error", { "code": 250 }],
        "react/destructuring-assignment": ["warn", "always", { "ignoreClassFields": true }],
        "react/prefer-stateless-function": "off"
    },
};
