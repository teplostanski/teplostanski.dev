module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-import': {},
    ...(process.env.NODE_ENV === 'production' ? {
      cssnano: {
        preset: ['advanced', {
          discardComments: { removeAll: true },
          reduceIdents: false,
          zindex: false,
          normalizeWhitespace: false
        }]
      }
    } : {})
  }
}