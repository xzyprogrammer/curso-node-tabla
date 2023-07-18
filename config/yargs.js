const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    description: 'Número base para crear la tabla'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    description: 'Mostrar tabla al crearla'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    description: 'Límite de múltiplicación'
                })
                .check((argv, options) => {
                    if(isNaN(argv.b)){
                        throw 'La base debe ser un número'
                    }
                    return true
                })
                .argv;


module.exports = argv;