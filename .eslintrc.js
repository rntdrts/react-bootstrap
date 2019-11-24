module.exports = {
	env: {
		'jest/globals': true,
		browser: true,
		commonjs: true,
		es6: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'prettier',
		'plugin:prettier/recommended',
		'prettier/flowtype',
		'prettier/react',
		'prettier/standard',
		'plugin:jsx-a11y/recommended'
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	plugins: ['react', 'prettier', 'jest', 'jsx-a11y'],
	rules: {
		'max-len': [
			'error',
			120,
			2,
			{
				ignoreUrls: true,
				ignoreComments: false,
				ignoreRegExpLiterals: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true
			}
		],
		indent: ['warn', 2, { SwitchCase: 1 }],
		'linebreak-style': ['warn', 'unix'],
		quotes: ['error', 'single'],
		semi: ['warn', 'always'],
		'eol-last': ['warn', 'always'],
		'no-unused-vars': ['warn', { vars: 'all', args: 'none', ignoreRestSiblings: false }],
		camelcase: [0, { properties: 'never' }],
		'no-console': ['warn'],
		'prettier/prettier': ['warn', { singleQuote: true, parser: 'flow' }],
		'jest/no-disabled-tests': 'warn',
		'jest/no-focused-tests': 'warn',
		'jest/no-identical-title': 'warn',
		'jest/prefer-to-have-length': 'warn',
		'jest/valid-expect': 'off',
		'jsx-a11y/no-autofocus': 'off',
		'jsx-a11y/label-has-associated-control': 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
		'jsx-a11y/no-noninteractive-element-interactions': 'off',
		'react/jsx-fragments': ['warn', 'element']
	},
	parser: 'babel-eslint',
	parserOptions: {
		allowImportExportEverywhere: true
	},
	settings: {
		react: {
			pragma: 'React',
			version: 'detect'
		}
	}
};
