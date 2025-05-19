class Matrix {
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;

        this.data = [];

        for (let i = 0; i < rows; i++) {
            let array = [];
            for (let j = 0; j < columns; j++) {
                array.push(0);
            }
            this.data.push(array);
        }
    }

    static arrayToMatrix(array) {
        let matrix = new Matrix(array.length, 1);
        matrix.matrixMap((elm, i) => {
            return array[i];
        })
        return matrix;
    }

    // static MatrixToArray(obj) {
    //     let array = []
    //     obj.matrixMap((elm) => {
    //         array.push(elm);
    //     })
    //     return array;
    // }

    print(){
        console.table(this.data);
    }

    randomize(){
        this.matrixMap(() => {
            return Math.random() * 2 - 1 ;
        })
    }

    static matrixMap(A, func) {
        let matrix = new Matrix(A.rows, A.cols);

        matrix.data = A.data.map((array, i) => {
            return array.map((num, j) => {
                return func(num, i, j);
            })
        })

        return matrix;
    }

    matrixMap(func){
        this.data = this.data.map((array, i) => {
            return array.map((value, j) => {
                return func(value, i, j);
            })
        })
        return this;
    }

    static add(A,B){
        let matrix = new Matrix(A.rows, A.columns);
        matrix.matrixMap((element,i,j) => {
            return A.data[i][j] + B.data[i][j];
        });
        return matrix;
    }

    static multiply(A,B){
        let matrix = new Matrix(A.rows, B.columns);

        matrix.matrixMap((element,i,j) => {
            let sum = 0;
            for (let k = 0; k < A.columns; k++) {
                let firstElement = A.data[i][k];
                let secondElement = B.data[k][j];
                sum += firstElement * secondElement;
            }
            return sum;
        });
        return matrix;
    }
}

export default Matrix;