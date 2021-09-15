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

### Restrictions

This plugin work on snowpack transform stage, so its just work on `*.js` or `*.css`.

> *Don't worry about others file like `*.ts`, `*.less`, its will be transform to above one by snowpack, but if you make sure only work in specify file, pls take care of options `file` which is not really equal with your real file path*
