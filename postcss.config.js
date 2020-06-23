module.exports = ctx => ({
  map: ctx.options.map,
  sourceMap: true,
  plugins: [
    require('autoprefixer')({grid: true}),
    require('postcss-rtl')(),
    require('postcss-discard-comments')()
  ]
});
