module.exports = {
	extends: ['eslint:recommended', 'prettier'],
	plugins: ['prettier'],
	root: true,
	globals: {},
	env: {
		node: true,
		jest: true,
		es2017: true,
	},
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 2017,
		sourceType: 'module',
	},
	rules: {
		semi: ['error', 'always'],
		quotes: ['warn', 'single'],
		'no-unused-vars': 'warn', // TODO enable no-unused-vars when finished development
		'no-console': 'off',
		'no-debugger': 'off',
		'prettier/prettier': 'error',
	},
};
