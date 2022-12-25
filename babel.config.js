module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        "module-resolver",
        {
          "root": ["./"],
          alias: {
            '@components': "./_components",
            '@helpers': "./_helpers",
            '@state': "./_redux",
            '@postAPI': './_api/post/post.js',
            '@userAPI': './_api/user/user.js',
            '@groupAPI': './_api/group/group.js',
            '@organizationAPI': './_api/organization/organization.js',
            '@api': './_api/api.js',
            '@env': './.env',
            '@lib': './lib',
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
