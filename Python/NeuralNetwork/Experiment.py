import pandas as pd
from NeuralNet import OMNeuralNetwork
from Particle import *
from sklearn.metrics import accuracy_score
import random
import numpy as np

# read csv
import os
print(os.getcwd())
df = pd.read_csv("Python/NeuralNetwork/data_banknote_authentication1.txt", names=["F1", "F2", "F3", "F4", "Label"])
X = df.drop("Label",axis=1)
print(X.shape)
y = df['Label'].values

# neural_network = NN([4,2,3,4,1])
# neural_network.initialize_weights_and_biases()
# prediction = neural_network.forward_pass(X, "sigmoid")
# print(prediction)

# function to choose activation function
def choose_activation(index):
    if index == 0:
        return "sigmoid"
    elif index == 1:
        return "relu"
    elif index == 2:
        return "tanh"
    else:
        raise ValueError("There is something wrong with the Particle Postion!")
           

max_iters, inertia_weight, cognitive_weight, global_weight, informants_weight, swarm_size = 10, 1.0, 1.0, 1.0, 1.0, 50

neural_network = OMNeuralNetwork([4,8,1]) #initialise network
length_of_weights = neural_network.weights_length() #get length of weights in network

# initialize particles of the swarm size; (+ 3), to include activations as well.
particles = initialize_particles(swarm_size, length_of_weights+3, inertia_weight, cognitive_weight, global_weight, informants_weight)

# update particles informants
def choose_informants(particles, num_informants):
    return random.sample(particles, num_informants)

def create_informants(particles, num_samples):
    for particle in particles:
        informants = choose_informants(particles, num_samples)
        particle.set_informants(informants)

# pso function.
def pso(max_iters, particles, informants=False):
    best_fitness = -np.inf
    best_position = None

    for k in range(0, max_iters):
        
        for particle in particles:
            neural_network.initialize_weights_and_biases(particle.position)
            activation_index = particle.get_activation()
            activation = choose_activation(activation_index)
            prediction = neural_network.forward_pass(X.values, activation)
            prediction = np.array([1 if i > 0.5 else 0 for i in prediction])
            particle.calculate_fitness(prediction, y)
            
            # normally, this would be less than but because we are optimising for accuracy
            # it's greater
            if particle.fitness > particle.best_fitness: 
                particle.update_best_fitness(particle.fitness)
                particle.best_position = particle.position.copy()


            if particle.fitness > best_fitness:
                best_fitness = particle.fitness
                best_position = particle.position.copy()

            if informants:
                particle.update_particle_velocity_informants(best_position)
            else:
                particle.update_particle_velocity_global(best_position)

            particle.update_particle_position()
        

    #     print("Current best: " + str(best_fitness))
        

    # print("Final best " + str(best_fitness))

    return best_position, best_fitness

# # only global pso
# bp, bf = pso(10, particles)

# # verify results of global exclusive pso
# neural_network.initialize_weights_and_biases(bp)
# activation_index = np.argmax(bp[-3:])
# best_activation = choose_activation(activation_index)
# best_prediction = neural_network.forward_pass(X.values, best_activation)
# best_prediction = best_prediction.flatten()
# results = np.array([1 if i > 0.5 else 0 for i in best_prediction])
# accuracy = accuracy_score(y, results)
# print("Global PSO")
# print("Index: ", np.argmax(bp[-3:]), best_activation)
# print(accuracy, bf)
print("----------------------------------------------------------------")


# each particle has 5 informants
total = []
for i in range(10):
    particles = initialize_particles(swarm_size, length_of_weights+3, inertia_weight, cognitive_weight, global_weight, informants_weight)
    create_informants(particles, 5) 
    ibp, ibf = pso(10, particles, informants=True)
    total.append(ibf)

    # # verify results of global + informants
    # neural_network.initialize_weights_and_biases(ibp)
    # i_activation_index = np.argmax(ibp[-3:])
    # i_best_activation = choose_activation(i_activation_index)
    # i_best_prediction = neural_network.forward_pass(X.values, i_best_activation)
    # i_best_prediction = i_best_prediction.flatten()
    # i_results = np.array([1 if i > 0.5 else 0 for i in i_best_prediction])
    # i_accuracy = accuracy_score(y, i_results)
    # print("Global & Informants PSO")
    # print("Index: ", np.argmax(ibp[-3:]), i_best_activation)
    # print(i_accuracy, ibf)#
average = np.mean(total)
std_dev = np.std(total)

print(average, std_dev)