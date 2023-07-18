const fs = require('node:fs');
const colors = require('colors');

const crearArchivo =  async (base = 5, listar, limite) => {

    try{
        let salida = '';
        for(let i= 1; i <= limite; i++){
            salida += `${base} x ${i} = ${base*i}\n`;
        }

        if(listar){
            console.log(salida.green);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;

    }catch (error){
        throw error;
    }
}



module.exports = {
    crearArchivo
}

