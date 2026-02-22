import numpy as np

class OMNeuralNetwork:

    def __init__(self, list_of_layers):
        self.layers = list_of_layers
        self.number_of_layers = len(list_of_layers)
        self.weights = []
        self.bias = []

    # Function to initialize the weight and biases
    def initialize_weights_and_biases(self):
        #could be a list comprehension
        for i in range(1, self.number_of_layers):
            #weights are taking between layers
            #between the first and second layer will be (2,1) if the first layer was one and second was 2.
            self.weights.append(np.random.randn(self.layers[i], self.layers[i-1])) 
            self.bias.append(np.ones((1,self.layers[i]))) #setting bias for each neuron in the layer to one.

    # Function to initialize the weight and biases with the Optimized weight
    def initialize_weights_and_biases(self, flat_weights):
        weights = []
        i = 0
        for j in range(1, self.number_of_layers):
            shape = (self.layers[j], self.layers[j-1])
            length = self.layers[j] * self.layers[j-1]
            temp = flat_weights[i:i+length]  # Adjust indexing
            weights.append(np.reshape(np.array(temp), shape))
            i += length  # Update index for the next iteration
            self.bias.append(np.ones((1,self.layers[j])))
        self.weights = weights
    
    # 
    def weights_length(self):
        total_length = 0
        for j in range(1, self.number_of_layers):
            total_length += self.layers[j] * self.layers[j - 1]
        return total_length

    # List of Activation Functions
    def sigmoid(self, x):
        return 1/ (1+ np.exp(-np.clip(x, -500, 500)))

    def relu(self, x):
        return np.maximum(0.0, x)

    def tanh(self, x):
        return np.tanh(x)
    # End of Activation Function
    
    
    # Forward Pass with the input and activation
    def forward_pass(self, X, activation):
        a = X
        for i in range(self.number_of_layers - 1):
            z = np.dot(a, self.weights[i].T) + self.bias[i]
            if activation == "sigmoid":
                a = self.sigmoid(z)
            elif activation == "relu":
                a = self.relu(z)
            elif activation == "tanh":
                a = self.tanh(z)
            else:
                raise ValueError("The Activation function indicated is unavailable. Please choose from sigmoid, tanh, or relu")
        return a
    


 

