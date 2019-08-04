'use strict';

module.exports = (Mozaik, configFile, config) => {
  Mozaik.registerApi(
    'githubcontributions',
    require('mozaik-ext-githubcontributions/client')
  );
};
