module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint",
        "jsx-a11y"
    ],
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    settings: {
        react: {
            // Specify react version to automtaically detect currently installed version.
            // This setting should be explicitly set as it will not default to "detect" until a future release.
            // https://github.com/yannickcr/eslint-plugin-react#configuration
            version: "detect"
        }
    },
    rules: {
        //
        // ESLint rules: https://eslint.org/docs/rules/
        //
        "no-await-in-loop": "error",
        "no-console": "error",
        "no-promise-executor-return": "error",
        "no-template-curly-in-string": "error",
        "no-unreachable-loop": "error",
        "no-unsafe-optional-chaining": "error",
        "no-useless-backreference": "error",
        "require-atomic-updates": "error",
        "eqeqeq": "error",
        "semi": ["error", "always", { "omitLastInOneLineBlock": false, }],
        "semi-style": ["error", "last"],
        "no-extra-semi": ["error"],
        "semi-spacing": ["error", { "before": false, "after": true }],


        //
        // React rules: https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
        //
        // Display name can be inferred so it doesn't need to be explicit all the time
        // https://reactjs.org/docs/react-component.html#displayname
        "react/display-name": "off",
        "react/no-access-state-in-setstate": "error",
        "react/no-danger": "error",
        "react/no-multi-comp": [
            "error",
            {
                "ignoreStateless": true
            }
        ],
        "react/no-this-in-sfc": "error",
        "react/no-typos": "error",
        "react/no-unsafe": "warn",
        "react/no-unused-prop-types": "warn",
        "react/no-unused-state": "warn",
        // This is to prefer ES6 classes instead of `createReactClass`.
        // This does NOT mean to prefer classes over functional components.
        "react/prefer-es6-class": "error",
        "react/prefer-stateless-function": "error",
        "react/self-closing-comp": "error",
        "react/sort-comp": [
            "warn", {
                order: [
                    "static-variables",
                    "instance-variables",
                    "getters",
                    "setters",
                    "lifecycle",
                    "render",
                    "static-methods",
                    "instance-methods",
                    "everything-else"
                ]
            }
        ],
        "react/state-in-constructor": "error",
        "react/style-prop-object": "error",
        "react/void-dom-elements-no-children": "error",

        //
        // JSX Specific rules: https://github.com/yannickcr/eslint-plugin-react#jsx-specific-rules
        //
        "react/jsx-boolean-value": ["error", "always"],
        "react/jsx-child-element-spacing": "warn",
        "react/jsx-curly-brace-presence": "error",
        "react/jsx-fragments": "error",
        "react/jsx-no-comment-textnodes": "error",
        "react/jsx-no-constructed-context-values": "error",
        "react/jsx-no-script-url": "error",
        "react/jsx-no-useless-fragment": "error",
        "react/jsx-pascal-case": "error",

        //
        // Typescript rules: https://github.com/typescript-eslint/typescript-eslint/tree/v4.4.0/packages/eslint-plugin#supported-rules
        //
        "@typescript-eslint/array-type": "error",
        "@typescript-eslint/ban-ts-comment": [
            "error",
            {
                "ts-ignore": "allow-with-description"
            }
        ],
        "@typescript-eslint/consistent-indexed-object-style": "error",
        "@typescript-eslint/explicit-member-accessibility": "error",
        // TS can infer return types, so explict return types are not necessary
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/method-signature-style": "error",
        "@typescript-eslint/no-base-to-string": "error",
        // This rule is more often than not manually disabled
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-extraneous-class": "error",
        // Disable eslint version of no-throw-literal before enabling the TS version
        "no-throw-literal": "off",
        "@typescript-eslint/no-throw-literal": "error",
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
        "@typescript-eslint/no-unnecessary-type-arguments": "error",

        // "any" is allowed in the codebase (see no-explicit-any) so these rules are disabled as well
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-return": "off",

        "@typescript-eslint/prefer-for-of": "warn",
        "@typescript-eslint/prefer-includes": "error",
        "@typescript-eslint/prefer-literal-enum-member": "error",
        "@typescript-eslint/prefer-nullish-coalescing": "warn",
        "@typescript-eslint/prefer-optional-chain": "warn",
        "@typescript-eslint/prefer-reduce-type-parameter": "warn",
        "@typescript-eslint/prefer-string-starts-ends-with": "warn",
        "@typescript-eslint/promise-function-async": "error"
    }
}
