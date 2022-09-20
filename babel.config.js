module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        "module-resolver",
        {
          alias: {
            '@components': "./_components",
            '@helpers': "./_helpers",
            '@state': "./_state",
           '@': './'
          },
        },
      ],
      ["module:react-native-dotenv", {
        "path": ".env",
        "blacklist": null,
        "whitelist": null,
        "safe": false,
        "allowUndefined": true
      }],
    ],
  };
};
