module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ts', '.tsx'],
        root: ['.'],
        alias: {
          '@': './',
        },
      },
    ],
  ],
};
