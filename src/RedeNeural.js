import Matrix from "./Matrix.js";

class RedeNeural {
    constructor(i_nodes, h_nodes, o_nodes){
        this.i_nodes = i_nodes;
        this.h_nodes = h_nodes;
        this.o_nodes = o_nodes;

        this.bias_ih = new Matrix(this.h_nodes, 1);
        this.bias_ho = new Matrix(this.o_nodes, 1);

        this.weights_ih = new Matrix(this.h_nodes, this.i_nodes);
        this.weights_ho = new Matrix(this.o_nodes, this.h_nodes);
    }
}

export default RedeNeural;