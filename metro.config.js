const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');

const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
