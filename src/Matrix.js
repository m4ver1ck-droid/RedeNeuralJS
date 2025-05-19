class Matrix {
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;

        this.data = [];

        for (let i = 0; i < rows; i++) {
            let array = [];
            for (let j = 0; j < columns; j++) {
                array.push(Math.floor(Math.random() * 10));
            }
            this.data.push(array);
        }
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
        var matrix = new Matrix(A.rows, A.columns);
        console.log(A.data)
        console.log(B.data)
        matrix.matrixMap((element,i,j) => {
            return A.data[i][j] + B.data[i][j];
        });
        console.log(matrix)
    }
}

export default Matrix;