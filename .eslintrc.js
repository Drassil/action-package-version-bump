module.exports = {
    extends: 'eslint:recommended',
    parserOptions: {
        project: 'jsconfig.json',
        ecmaVersion: 2018,
    },
    root: true,
    env: {
        commonjs: true,
        node: true,
    },
};
