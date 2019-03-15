const path = require('path')

// Objeto que o webpack precisa pra fazer a leitura do nosso arquivo  gerar o bundle
module.exports = {
    // Serve para mostrar o erro no console do navegador direto no arquivo, ao inves do bundle
    devtool: 'source-map',
    // O path join junta o caminho para servir em diversos sistemas operacionais
    entry: path.join(__dirname, 'src', 'index'),
    // Onde o webpack vai salvar
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            include: /src/,
            loader: 'babel'
        }]
    }
}