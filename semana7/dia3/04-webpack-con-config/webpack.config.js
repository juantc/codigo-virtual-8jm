const path=require('path');

// module.exports={
//     entry: './src/js/index.js',
//     mode: 'development',
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         //dirname es la carpeta de trabajo actual
//         filename: 'salida.js'
//     }

// };

//[name] es el comodin del nombre del objeto
//de la propiedad del atributo  entry
module.exports={
    entry: {
        main: './src/js/index.js',
        nosotros: './src/js/nosotros.js'

    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        //dirname es la carpeta de trabajo actual
        filename: '[name].js'
    }

};