const path = require('path')

// Objeto que o webpack precisa pra fazer a leitura do nosso arquivo  gerar o bundle
module.exports = {
    // O path join junta o caminho para servir em diversos sistemas operacionais
    entry: path.join(__dirname, 'src', 'index'),
    // Onde o webpack vai salvar
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    }
}