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
}

export default Matrix;