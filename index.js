const pkg = require('./package.json');

module.exports = function (snowpackConfig, pluginOptions) {
  return {
    name: pkg.name,
    transform({ id, contents, fileExt }) {
      if(fileExt !== '.js') {
        // Skip not support version
        return contents;
      }

      const list = pluginOptions.list || [];
      for (let item of list) {
        let str = item.from;
        if(str === undefined || str === null) {
          return;
        }

        const replaceValue = item.to;
        contents = contents.replace(str, replaceValue);
      }
      return contents;
    },
  };
};
