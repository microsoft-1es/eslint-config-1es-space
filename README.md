# ESLint Config for 1ES SPACE
Test CLA ignore
Test CLA ignore
This package contains a set of ESLint rules to be re-used across 1ES SPACE UI projects using TypeScript and React.

To get started, install the package with
```
npm i -D eslint-config-1es-space
```

This package also has a number of peer dependencies that you will need to install (if you do not have them already) which you can grab with
```
npm i -D @typescript-eslint/eslint-plugin eslint eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```

Next, if you do not already have an `.eslintrc.js` file, create one with the following contents:
```javascript
module.exports = {
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"]
    },
    extends: "1es-space",
    rules: {
        // Overrides or additional rules go here
    },
    ignorePatterns: {
        // Any files and directories you don't want linting on
    }
}
```

Depending on your TypeScript configuration, you may need to modify the `parserOptions` property which you can read more about [here](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md#getting-started---linting-with-type-information). This configuration is necessary for certain linter rules that require type information.

## Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft 
trademarks or logos is subject to and must follow 
[Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general).
Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship.
Any use of third-party trademarks or logos are subject to those third-party's policies.
