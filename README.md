# snowpack-plugin-replace
A small snowpack plugin to replace code during the optimize step

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
      extensions: ['html'],
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
- extensions: what file extensions to perform the replace on
- from: `string` or `RegExp`
- to: `string`
