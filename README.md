# ESLint Config for 1ES SPACE
This package contains a set of ESLint rules to be re-used across 1ES SPACE UI projects using TypeScript and React.

To get started, install the package with `npm i -D eslint-config-1es-space`

Next, if you do not already have an `.eslintrc.js` file, create one with the following contents:
```javascript
module.exports = {
    extends: "1es-space",
    rules: {
        // Additional rules or overrides can go here
    }
}
```

This assumes you have a `.tsconfig.json` file in the same directory. If you have it in a different directory or under another name, you need to configure it with the parser options

```javascript
module.exports = {
    ...
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: [<tsconfig filename>]
    }
    ...
}
```

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
