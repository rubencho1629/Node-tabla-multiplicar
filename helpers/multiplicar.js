const fs = require('fs')
const crearArchivo = async(num2 = 5) => {

    try {
        console.log('===========================');
        console.log(`Tabla del: ${ num2 }`);
        console.log('========================');

  let salida = "";

  for (let num = 1; num <= 10; num++) {
    salida += `${num2} * ${num} = ${num2 * num}\n`;
  }
  console.log(salida);

  fs.writeFileSync(`tabla-${num2}.txt`, salida);

  return `tabla-${num2}.txt`;
    } catch (err) {
        throw err;
    }

    
};

module.exports = {
     crearArchivo
}
