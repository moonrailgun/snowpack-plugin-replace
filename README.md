# snowpack-plugin-replace
Replace in your code.


## Usage

### Install

```
npm install --save-dev snowpack-plugin-replace
```

### Config

Add this plugin to your Snowpack config:

**snowpack.config.js**
```javascript
{
  plugins: [[
    'snowpack-plugin-replace',
    {
      list: [
        {
          from: 'process.env',
          to: 'import.meta.env'
        }
      ],
    },
  ]]
}
```

Options:
- from: `string` or `RegExp`
- to: `string`
- file: `string` **optional** Specify file path. It should be a full path.
  > For Example: `require.resolve('./index.js')`
- extensions: `string[]` **optional** Specify a list of extensions to limit which files should be replaced in.
  - Defaults to `['.css', '.js', '.jsx', '.ts', '.tsx']`
