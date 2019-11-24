const allowedLanguages = {
  PT: 'pt',
  EN: 'en'
};

module.exports = {
  allowedLanguages: allowedLanguages,
  supportedDateLocales: Object.values(allowedLanguages)
};
