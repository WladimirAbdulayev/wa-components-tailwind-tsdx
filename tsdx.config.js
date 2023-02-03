const postcss = require('rollup-plugin-postcss');
const image = require('@rollup/plugin-image');
const copy = require('rollup-plugin-copy');

module.exports = {
  rollup(config, options) {
    config.plugins = [
      postcss({
        config: {
          path: './postcss.config.js',
        },
        extensions: ['.css'],
        minimize: true,
        inject: {
          insertAt: 'top',
        },
      }),
      image({ include: ['**/*.png', '**/*.jpg', '**/*.svg'] }),
      ...config.plugins,
      copy({
        targets: [
          { src: 'src/images/*.png', dest: 'dist/images' },
          { src: 'src/images/*.svg', dest: 'dist/images' }
        ],
      }),
    ];
    console.log(config);
    return config;
  },
};
