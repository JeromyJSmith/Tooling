const classifyTools = require('./classify-tools');
const getRepositoryMetadata = require('./get-repository-metadata');
const mergeSources = require('./merge-sources');
const normaliseSources = require('./normalise-sources');
const { readLocalSourceData, readSourceData } = require('./read-source-data');
const validateMetadata = require('./validate-metadata');
const purgeSources = require('./purge-sources');

module.exports = {
  classifyTools,
  getRepositoryMetadata,
  mergeSources,
  normaliseSources,
  purgeSources,
  readLocalSourceData,
  readSourceData,
  validateMetadata,
};
