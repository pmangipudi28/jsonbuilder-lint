module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		jest: true,
		node: true
	},
	parser: 'babel-eslint',
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:jsx-a11y/recommended'
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
			experimentalObjectRestSpread: true
		},
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	plugins: ['react'],
	rules: {
		'linebreak-style': [0, 'error', 'windows'],
		'quotes': ['error', 'single'],
		'semi': ['error', 'always'],
		'comma-dangle': ['error', 'never'],
		'default-case': ['error'],
		'no-labels': ['error'],
		'quote-props': ['error', 'consistent-as-needed'],
		'no-trailing-spaces': [2],
		'max-statements-per-line': ['error', { max: 1 }],
		'func-style': ['error', 'expression', { allowArrowFunctions: true }],
		'no-lone-blocks': ['error'],
		'no-redeclare': ['error', { builtinGlobals: true }],
		'no-sequences': ['error'],
		'no-unused-vars': ['error', { args: 'all' }],
		'max-params': ['error', 5],
		'eqeqeq': 'error',
		'eol-last': ['error', 'always'],
		'no-var': 'error',
		'prefer-const': 'error',
		'max-len': [
			'error',
			{
				code: 180,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignorePattern: '^import\\s.+\\sfrom\\s.+;$'
			}
		]
	},
	settings: {
		react: {
			version: 'detect'
		}
	}
};
