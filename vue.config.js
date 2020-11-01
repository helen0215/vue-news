module.exports = {
  devServer: {
    disableHostCheck: true,
    host: '0.0.0.0',
  },
  chainWebpack: config => {
    config.module
      .rule('eslint')
      .use('eslint-loader')
      .loader('eslint-loader')
      .tap(options => {
        options.fix = true;
        return options;
      });
  },
}