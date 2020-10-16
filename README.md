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
```
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
