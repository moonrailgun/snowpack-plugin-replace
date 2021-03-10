const pkg = require('./package.json');

module.exports = function (snowpackConfig, pluginOptions) {
  const exts = pluginOptions.extensions || ['.css', '.js', '.jsx', '.ts', '.tsx'];

  return {
    name: pkg.name,
    transform({ id, contents, fileExt }) {
      if (!exts.includes(fileExt)) {
        // Skip not support version
        return contents;
      }

      const list = pluginOptions.list || [];
      for (let item of list) {
        const file = item.file;
        if (typeof file === 'string') {
          // If specify file path. check it
          if(file !== id) {
            continue;
          }
        }

        let str = item.from;
        if (str === undefined || str === null) {
          continue;
        }

        const replaceValue = item.to;
        contents = contents.replace(str, replaceValue);
      }
      return contents;
    },
  };
};
