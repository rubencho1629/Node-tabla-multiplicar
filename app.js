
const { crearArchivo } = require('./helpers/multiplicar')

console.clear();


const num2 = 11;


crearArchivo( num2 )
.then( nombreArchivo => console.log(nombreArchivo, 'creado'))
.catch( err => console.log( err ));

 
