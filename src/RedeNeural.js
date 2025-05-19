import Matrix from "./Matrix.js";

function sigmoid(x){
    return 1 / (1 + Math.exp(-x));
}

class RedeNeural {
    constructor(i_nodes, h_nodes, o_nodes){
        this.i_nodes = i_nodes;
        this.h_nodes = h_nodes;
        this.o_nodes = o_nodes;

        this.bias_ih = new Matrix(this.h_nodes, 1);
        this.bias_ih.randomize();
        this.bias_ho = new Matrix(this.o_nodes, 1);
        this.bias_ho.randomize();

        this.weights_ih = new Matrix(this.h_nodes, this.i_nodes);
        this.weights_ih.randomize();
        this.weights_ho = new Matrix(this.o_nodes, this.h_nodes);
        this.weights_ho.randomize();
    }

    feedForward(input){
        // INPUT TO HIDDEN
        let input_layer = Matrix.arrayToMatrix(input);
        let hidden = Matrix.multiply(this.weights_ih, input_layer);
        hidden = Matrix.add(hidden, this.bias_ih);

        hidden.matrixMap(sigmoid);

        // HIDDEN TO OUTPUT
        let output = Matrix.multiply(this.weights_ho, hidden);
        output = Matrix.add(output, this.bias_ho);
        output.matrixMap(sigmoid);
        output.print();
    }
}

export default RedeNeural;