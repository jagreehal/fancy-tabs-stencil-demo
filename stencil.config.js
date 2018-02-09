exports.config = {
  namespace: 'stencil-app',
  generateDistribution: true,
  generateWWW: true
};

exports.devServer = { root: 'www', watchGlob: '**/**' };
