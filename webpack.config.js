const path = require('path');

module.expots = {
    node: 'development',
    entry: './client/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
    }
}