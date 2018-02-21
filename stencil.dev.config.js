exports.config = {
    namespace: 'aepp-components',
    srcDir: './src',
    generateDistribution: false,
    generateWWW: true,
    copy: [
        {src: '../../index.html'}
    ]
};

exports.devServer = {
    root: 'www',
    watchGlob: '**/**'
};