var path = require('path');
const deepMerge = require('deepmerge');

var fileMapper = function fileMapper(rows, language) {
  var output = rows.reduce(function (outputSoFar, row, index, array) {
    const keyComponents = row.key.split('.');
    let translationObject = {};
    translationObject[keyComponents[keyComponents.length - 1]] = row.data;
    translationObject = keyComponents.reverse().reduce((acc, key, index) => {
      if (index < 1) {
        return acc;
      }

      let translationObject = {};
      translationObject[key] = acc;

      return translationObject;
    }, translationObject);

    return deepMerge(outputSoFar, { ...translationObject });
  }, {});

  return JSON.stringify(output);
};

var myMapper = {
  fileMapper: fileMapper,
  fileExtension: '.json'
};

const langPath = path.join(process.cwd(), 'src', 'utils', 'lang');

module.exports = {
  categories: ['forbiddenaccesslabeldonottouch'],
  credentialsPath: path.join(langPath, 'credentials.json'),
  languages: [
    'en_GB',
    'pt_PT'
  ],
  outputs: [
    {
      name: 'react',
      outPath: path.join(langPath, 'locales'),
      mapper: myMapper
    }
  ]
};
