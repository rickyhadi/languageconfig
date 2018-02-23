var rootdir = env.rootdir || __dirname;
var appConfig = require('appconfig');
var languageConfig = require(rootdir + appConfig.ConfigurationFilePath.Language);

module.exports = languageConfig;
