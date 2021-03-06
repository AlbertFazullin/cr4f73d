module.exports = {
  plugins: [
    require('postcss-import')({
      root: './',
    }),
    require('postcss-short'),
    require('precss'),
    require('postcss-simple-vars'),
    require('postcss-clearfix'),
    require('postcss-cssnext')({}),
    require('postcss-font-magician')({
      variants: {
        'Roboto': {
          '100': [],
          '300': [],
          '400': [],
          '500': [],
          '700': [],
          '900': [],
        },
      },
      foundries: ['google'],
    }),
  ],
};
