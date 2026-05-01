const prettierConfigModule = require('@theguild/prettier-config');
const prettierConfig = prettierConfigModule.default ?? prettierConfigModule;

module.exports = {
  ...prettierConfig,
  plugins: [...(prettierConfig.plugins || []), 'prettier-plugin-tailwindcss'],
};
