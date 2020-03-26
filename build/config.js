const path = require('path');

exports.jsexclude = /node_modules/;

exports.alias = {
    main: path.resolve(__dirname, '../src'),
    package: path.resolve(__dirname, '../packages'),
    examples: path.resolve(__dirname, '../examples'),
    'element-ui-test': path.resolve(__dirname, '../')
}