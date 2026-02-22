import numpy as np
from sklearn.metrics import accuracy_score

class Particle:
    def __init__(self, num_params, inertia_weight, cognitive_weight, global_weight, informants_weight):
        self.inertia_weight = inertia_weight
        self.cognitive_weight = cognitive_weight
        self.global_weight = global_weight
        self.informants_weight = informants_weight
        self.position = np.random.rand(num_params) #represents weights of the neural network
        self.velocity = np.random.rand(num_params)
        self.best_position = self.position.copy()  
        self.informants = None,
        self.fitness = -np.inf 
        self.best_fitness = -np.inf

    def update_best_fitness(self, fitness):
        self.best_fitness = fitness

    def update_informants(self, informants):
        self.informants = informants

    # update particle velocity
    def update_particle_velocity_global(self,  best_swarm_position):
        inertia_term = self.inertia_weight * self.velocity
        cognitive_term = self.cognitive_weight * np.random.rand(len(self.velocity)) * (self.best_position - self.position)
        global_term = self.global_weight * np.random.rand(len(self.velocity)) * (best_swarm_position - self.position)
        self.velocity = inertia_term + cognitive_term + global_term

    # find the best informant 
    def best_informant_position(self):
        best_informant = max(self.informants, key=lambda i: i.fitness)
        return best_informant.best_position

    # update particle velocity with informants
    def update_particle_velocity_informants(self, best_swarm_position):
        informant_best_position = self.best_informant_position()
        inertia_term = self.inertia_weight * self.velocity
        cognitive_term = self.cognitive_weight * np.random.rand(len(self.velocity)) * (self.best_position - self.position)
        global_term = self.global_weight * np.random.rand(len(self.velocity)) * (best_swarm_position - self.position)
        informant_term = self.informants_weight * np.random.rand(len(self.velocity)) * (informant_best_position - self.position)
        self.velocity = inertia_term + cognitive_term + global_term + informant_term   

    # particle position should be particle position + updated particle velocity
    # upper and lower bounds are to restrict the range of exploration of the particle
    def update_particle_position(self, lower_bound = None, upper_bound = None):
        if lower_bound is not None and upper_bound is not None:
            self.position = np.clip(self.position + self.velocity, lower_bound, upper_bound)
        else:
            self.position = self.position + self.velocity
    
    def get_activation(self):
        _activations = self.position[-3:]
        return np.argmax(_activations)
        
    def calculate_fitness(self, predictions, targets):
        self.fitness = accuracy_score(targets, predictions)

    def set_informants(self, informants):
        self.informants = informants

# Initalize Particles
def initialize_particles(swarm_size, num_params, inertia_weight, cognitive_weight, global_weight, informants_weight):
    particles = [Particle(num_params, inertia_weight, cognitive_weight, global_weight, informants_weight) for _ in range(swarm_size)]
    return particles