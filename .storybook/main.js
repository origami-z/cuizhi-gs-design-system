module.exports = {
  // "stories": [
  //   // '../src/Intro.stories.mdx',
  //   // "../src/**/*.stories.mdx",
  //   "../src/**/*.stories.@(js|jsx|ts|tsx)"
  // ],
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-a11y",
  ],
  // typescript: {
  //   check: false,
  //   checkOptions: {},
  //   reactDocgen: 'react-docgen-typescript',
  //   reactDocgenTypescriptOptions: {
  //     shouldExtractLiteralValuesFromEnum: true,
  //     propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
  //     // // Enable props from extension to be shown up in the props table
  //     // compilerOptions: {
  //     //   allowSyntheticDefaultImports: false,
  //     //   esModuleInterop: false,
  //     // },
  //   },
  // },
  staticDirs: ["../public"],
};
