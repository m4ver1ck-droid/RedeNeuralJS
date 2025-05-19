import Matrix from './Matrix.js';
var primeiraMatrix = new Matrix(1,2);
var segundaMatrix = new Matrix(2,1);
console.log('Matrix: ',primeiraMatrix )
console.log('MatrixSecond: ',segundaMatrix )
var matrix = Matrix.multiply(primeiraMatrix,segundaMatrix);
console.log('Matrix: ',matrix )

