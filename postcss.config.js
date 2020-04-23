module.exports = {
  plugins: {
    autoprefixer: {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
      rootValue: 37.5, //默认根目录字体大小(px)
      unitPrecision: 5, //保留小数位
      propList: ['*'],
// selectorBlackList: [''], //过滤的类名
      replace: true, //默认直接替换属性
      mediaQuery: false,
      minPixelValue: 6, //所有小于设置的样式都不被转换
    }
  }
};
