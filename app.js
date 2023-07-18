const {crearArchivo} = require('./helpers/multiplicar')
const colors = require('colors');
const argv = require('./config/yargs');

// const [ , , arg3] = process.argv;
// const [ , base = 5] = arg3.split('=');

console.log(argv);


//const base = 5;

crearArchivo(argv.b, argv.l, argv.h)
.then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
.catch(err => console.log(err))


