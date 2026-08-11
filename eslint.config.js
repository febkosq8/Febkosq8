import eslint from "@eslint/js";
import babelParser from "@babel/eslint-parser";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import react from "eslint-plugin-react";
import reactRefresh from "eslint-plugin-react-refresh";
import unusedImports from "eslint-plugin-unused-imports";

export default [
	{ ignores: ["build", "node_modules"] },
	eslint.configs.recommended,
	{
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			globals: globals.browser,
			parser: babelParser,
			parserOptions: {
				babelOptions: {
					plugins: ["@babel/plugin-syntax-jsx"],
					presets: [["@babel/preset-typescript", { ignoreExtensions: true }]],
				},
				ecmaFeatures: { jsx: true },
				ecmaVersion: "latest",
				requireConfigFile: false,
				sourceType: "module",
			},
		},
		plugins: {
			"react-hooks": reactHooks,
			react,
			"react-refresh": reactRefresh,
			"unused-imports": unusedImports,
		},
		rules: {
			"no-undef": "off",
			"no-unused-vars": "off",
			"react/jsx-uses-vars": "error",
			"react-hooks/exhaustive-deps": "warn",
			"react-hooks/rules-of-hooks": "error",
			"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
			"unused-imports/no-unused-imports": "error",
			"unused-imports/no-unused-vars": [
				"warn",
				{ args: "after-used", argsIgnorePattern: "^_", vars: "all", varsIgnorePattern: "^_" },
			],
		},
	},
];
