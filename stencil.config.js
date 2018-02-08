exports.config = {
  namespace: 'stencil-app',
  generateDistribution: true,
  generateWWW: true,
  bundles: [{ components: ['fancy-tabs'] }]
};

exports.devServer = { root: 'www', watchGlob: '**/**' };
