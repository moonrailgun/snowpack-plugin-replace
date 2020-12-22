const fs = require('fs');
const pkg = require('./package.json');
const glob = require('glob');
const path = require('path');

function _findFiles({ buildDirectory, extension }) {
  const pattern = `${buildDirectory}/**/*.${extension}`;
  return glob.sync(pattern).map((filePath) => path.relative(buildDirectory, filePath));
}

module.exports = function (snowpackConfig, pluginOptions) {
  return {
    name: pkg.name,
    optimize({ buildDirectory }) {
      const files = [];
      if (pluginOptions.file) {
        files.push(pluginOptions.file);
      } else {
        const filesFromExtension = pluginOptions.extensions.map(extension => _findFiles({ buildDirectory, extension }));
        files.push(...filesFromExtension.flat());
      }

      for (const file of files) {
        let fileString = fs.readFileSync(path.join(buildDirectory, file), 'utf8');
        const list = pluginOptions.list || [];
        for (let item of list) {
          const { from } = item;
          if(from === undefined || from === null) {
            continue;
          }

          const regularExp = new RegExp(from, 'g');
          fileString = fileString.replace(regularExp, item.to);
        }

        fs.writeFileSync(path.join(buildDirectory, file), fileString);
      }
    },
  };
};
