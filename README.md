# snowpack-plugin-replace
replace your code


## Usage

### Install

```
npm install --save-dev snowpack-plugin-replace
```

### Config

add this plugin to your Snowpack config:

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

options:
- from: `string` or `RegExp`
- to: `string`
- file: `string` **optional** specify file path. its should be a full path
  > For Example: `require.resolve('./index.js')`
