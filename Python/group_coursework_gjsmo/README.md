[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/58HShPQN)
# IMPACT OF AGE ON EYE DISEASE CLASSIFICATION

## Group Details
Group Name: GJSMO
1. Miebaka Worika @fal7201
2. Oluwaseun Abiodun @seunabi21
3. Seigha Kenekayaro @bseigha
4. Abraham Gangas @Gangas-20
5. Ndubuisi James @jamescndubuisi


## Project Topic
We are investigating the usefulness of Age as a feature for classifying eye diseases.

### Motivation
A model able to predict the likelihood of several diseases would be productive and helpful to several stakeholders. The ophthalmologists and opticians would find the product useful as a diagnostic tool.
Patients in remote areas are likely to find it useful due to fewer qualified personnel in those regions. It would be more cost-effective and efficient to have this tool in the long run for both medical experts and patients. Given that it is generally believed that age and certain diseases have a positive correlation, it is possible that age is a useful feature for the model to predict. This may make the predictions more reliable. 

### Research Hypothesis and Objectives
**Hypothesis**: We hypothesise that age can be an important factor to be considered in machine learning attempts to categorise ocular degenerative illnesses based on optical scans.
  
It is generally believed that there is a correlation between age and the increase in the risk of getting Glaucoma, Cataracts and AMD, and we wish to investigate the impact of age on the diseases listed above. We consider the following questions:
- How effective are machine learning algorithms at predicting eye diseases based on retina images, age and sex?
- How critical is age toward diagnosing degenerative eye diseases (what eye diseases occur the most to younger age groups and/or older age groups)?
- Are there optical scans that are so similar they could be prone to misclassification by ML algorithms?

### Ethical Considerations
The use and development of machine learning models carry ethical implications, specifically in their impact on medical diagnoses. 

False positives can lead to misdiagnoses, causing mental and financial strain on patients and adding unnecessary workload for doctors. Incorrect diagnoses pose additional risks; patients may receive the wrong medication. False negatives contribute to patient distress. 

Moreover, publicly available retina scans raise concerns about data privacy and security. Retina scans, considered uniquely identifiable, may compromise personal security and privacy. These ethical considerations detail the need for responsible implementation and safeguarding of sensitive medical data.
 

## Datasets
Our chosen dataset is the ocular disease dataset found in Kaggle [here](https://www.kaggle.com/datasets/andrewmvd/ocular-disease-recognition-odir5k)
### License
There is no publically available license for the data, but the source indicates it was made for a competition [here](https://odir2019.grand-challenge.org/)

### Description

The dataset is a database of 3500[^1] patients with age, colour fundus photographs from left and right eyes and doctors' diagnostic keywords.
The dataset represents patient information collected by Medical corporations from different hospitals/medical centres in China. The fundus images are captured by various cameras, resulting in varied image resolutions.

The dataset contains ID, age, image of both right fundus and left fundus images, sex, left-eye diagnostics, right-eye diagnostics,
and labels that classify each patient into
(Normal (N), Diabetes (D), Glaucoma (G), Cataract (C), Age-related Macular Degeneration (A), Hypertension (H), Pathological Myopia (M), Other diseases/abnormalities (O))

#### Dataset examples
<!-- Add a couple of example instances and the dataset format -->
| ID | Patient Age | Patient Sex | Left-Fundus | Right-Fundus | Left-Diagnostic Keywords | Right-Diagnostic Keywords | N | D | G | C | A | H | M | O |
|----|-------------|-------------|-------------|--------------|--------------------------|----------------------------|---|---|---|---|---|---|---|---|
| 0  | 69          | Female      | 0_left.jpg  | 0_right.jpg  | cataract                 | normal fundus              | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| 1  | 57          | Male        | 1_left.jpg  | 1_right.jpg  | normal fundus            | normal fundus              | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

Dataset Format:
ID: Unique identifier for each instance.
Patient Age: The Age of the patient.
Patient Sex: The Gender of the patient (Female or Male).
Left-Fundus: Image filename for the left fundus.
Right-Fundus: Image filename for the right fundus.
Left-Diagnostic Keywords: Diagnostic keywords for the left fundus.
Right-Diagnostic Keywords: Diagnostic keywords for the right fundus.
N, D, G, C, A, H, M, O: Binary variables indicating each patient's presence (1) or absence (0) of certain diseases.

The data consists of a CSV file and accompanying images. The CSV file contains the image filename and the features depicted in the table above.

[^1]: The data is supposed to have 5000 patients: 3500 for training and 1500 for testing, however, the publically available version only has labels for the 3500 training samples, so we have used that alone.

#### Dataset Statistics
The original dataset contains 3500 Rows.
We intend to use 70% of our dataset for training and 30% for testing.

|      | ID           | Patient Age | N       | D       | G       | C       | A       | H       | M       | O       |
|------|--------------|--------------|---------|---------|---------|---------|---------|---------|---------|---------|
| count| 3500.000     | 3500.000     | 3500.000| 3500.000| 3500.000| 3500.000| 3500.000| 3500.000| 3500.000| 3500.000|
| mean | 2218.233     | 57.854       | 0.326   | 0.322   | 0.061   | 0.061   | 0.047   | 0.029   | 0.050   | 0.280   |
| std  | 1415.438     | 11.724       | 0.469   | 0.467   | 0.240   | 0.239   | 0.211   | 0.169   | 0.217   | 0.449   |
| min  | 0.000        | 1.000        | 0.000   | 0.000   | 0.000   | 0.000   | 0.000   | 0.000   | 0.000   | 0.000   |
| 25%  | 876.750      | 51.000       | 0.000   | 0.000   | 0.000   | 0.000   | 0.000   | 0.000   | 0.000   | 0.000   |
| 50%  | 2372.500     | 59.000       | 0.000   | 0.000   | 0.000   | 0.000   | 0.000   | 0.000   | 0.000   | 0.000   |
| 75%  | 3247.250     | 66.000       | 1.000   | 1.000   | 0.000   | 0.000   | 0.000   | 0.000   | 0.000   | 1.000   |
| max  | 4784.000     | 91.000       | 1.000   | 1.000   | 1.000   | 1.000   | 1.000   | 1.000   | 1.000   | 1.000   |


The average age is roughly 57.85 years.
The ages vary, with a standard deviation of about 11.72 years.
The youngest patient is 1 year old, while the oldest is 91 years old.
Most patients are between 51 and 66 years old, with the median age being 59.

**Data Samples**

![Sample of Eyes](https://github.com/dmml-heriot-watt/group-coursework-gjsmo/blob/main/ReadMe%20Visuals/Sample%20of%20Eyes.png)

In tandem with the tables above, this is the bulk of where the analysis will be done. The left side is an image of an eye labelled pathological myopia, and the right is it's comparison to a normal sample. The size difference is a consistent theme throughout the data. Hence steps before using the images will involve resizing the data to a consistent size.

#### Examples of Visualisation of Our Dataset 

We visualised our dataset before processing and after processing. The visualisation tools used are:

1 **Histograms** to show the age and across each disease.
![Age Distribution Sample](https://github.com/dmml-heriot-watt/group-coursework-gjsmo/blob/main/ReadMe%20Visuals/Age%20Distribution%20Sample.png)
The bulk of people with diseases are in the older generation, but there are notable cases where the start is quite young, such as hypertension at around 30 years. More details are provided in [this notebook](https://github.com/dmml-heriot-watt/group-coursework-gjsmo/blob/main/notebooks/Visualisations/Post%20Processing%20Age%20Distribution.ipynb)

2 **Bar charts** showing disease counts, and sex distribution for each disease. More samples for the sex distribution can be found [here](https://github.com/dmml-heriot-watt/group-coursework-gjsmo/blob/main/notebooks/Visualisations/Post%20Processing%20Disease%20and%20Sex%20Frequency.ipynb)
![Disease Count](https://github.com/dmml-heriot-watt/group-coursework-gjsmo/blob/main/ReadMe%20Visuals/Counts%20Per%20Disease.png)

The obvious point is the data imbalance that will likely cause classification issues. Normal Fundus is significantly more than any other class. Hypertension is the smallest class in the dataset. The imbalance means that sampling will be difficult, as to sample equally, we would not use most of the data.

![Sex Distribution](https://github.com/dmml-heriot-watt/group-coursework-gjsmo/blob/main/ReadMe%20Visuals/Sex%20Distribution%20Sample.png)

3 **Pie charts** to represent the proportion of eye diseases relative to non-disease. The plots for the other disease categories can be found [here](https://github.com/dmml-heriot-watt/group-coursework-gjsmo/blob/main/notebooks/Visualisations/Post%20Processing%20Disease%20and%20Sex%20Frequency.ipynb)
![Pie Chart for Disease Comparison](https://github.com/dmml-heriot-watt/group-coursework-gjsmo/blob/main/ReadMe%20Visuals/Pie%20Chart.png)
   
4 **Word cloud** to illustrate the frequency of different diagnoses terms. Other plots analysing the diagnostic terms used are [here](https://github.com/dmml-heriot-watt/group-coursework-gjsmo/blob/main/notebooks/Visualisations/Visualizing%20Diagnostical%20Terminology.ipynb)
![Word Cloud](https://github.com/dmml-heriot-watt/group-coursework-gjsmo/blob/main/ReadMe%20Visuals/Word%20Cloud.png)


### Visualisation Analysis:
Considering that our dataset is multilabelled with one image having multiple labels, we observed a pattern where eye diseases were most common among people aged 40 to 70 and a few people under 30. Diabetes emerged as the most prevalent condition, accounting for 27.4% of all cases. Glaucoma and cataracts were the next most frequent diseases and hypertension the least recurring condition." Regarding sex, conditions such as diabetes, age-related macular degeneration, glaucoma, and hypertension were more prevalent in males, suggesting a higher vulnerability in men. However, women were more affected by cataracts and pathological myopia, indicating these conditions are more common in females. Finally, using the word cloud, "Normal Fundus" was the most frequent term, indicating many normal eye diagnoses. Terms like "Moderate Non-Proliferative Retinopathy", "Mild Non-Proliferative Retinopathy", glaucoma, cataracts, and "dry age-related macular degeneration" were also frequently noted indicating the most common diagnosis in the dataset.

#### Preprocessing Steps
The steps for preprocessing this table were as follows:
- Images
    - Reading and image and scaling values between 0 and 1.
    - Ensuring the number of channels was 3 and that it was in RGB format
    - Ensuring the type of np array was float32
    - Depending on the algorithm flattening the data
- Columnal Data
    - Cleaning the diagnosis columns: basic NLP (for non-standard symbols)
    - Changing the row structure to have a single image per row
    - Age Scaling was task-dependent: Featured in Decision Trees such as [here](https://github.com/dmml-heriot-watt/group-coursework-gjsmo/blob/main/notebooks/DecisionTree/Decision%20Tree%20(Age).ipynb) and Neural Networks [here]()
    - One Hot Encoding Age was used in [Baseline Decision Trees](https://github.com/dmml-heriot-watt/group-coursework-gjsmo/blob/main/notebooks/DecisionTree/Baseline%20Decision%20Tree.ipynb)
    - One Hot Encoding label is also used in Decision Trees and Neural Networks
The primary notebook for preprocessing (first two columnal subsections was: [here](https://github.com/dmml-heriot-watt/group-coursework-gjsmo/tree/main/notebooks))


## Clustering
  
**Hypothesis**: We hypothesise that the images cannot be separated into distinguishable boundaries, suggesting that misdiagnosis is a possible outcome. This is grounded in the fact that our data is **multi-label**. To further investigate this, we will apply dimensionality reduction algorithms to extract features and cluster them in addition to the clustering of raw images. Additionally, we look to investigate the impact of the dimensionality reduction algorithm on the clustering of images.

### Experiment Details
We intend to apply the following clustering algorithms:
- **K-means**: This was chosen to test a simple clustering algorithm.
- **Spectral Clustering**: Spectral clustering is an efficient clustering algorithm effective on high dimensional data.

The experiment will consist of two stages; one will use the clustering algorithm on the image itself. The second will apply a dimensionality reduction algorithm on the image and then apply the clustering algorithms. To this goal, the following dimensionality reduction algorithms were chosen:
- **ICA**: The original intentions were to use LDA, but it provided unsuitable results, so it was changed to ICA.
- **NMF**: Non-negative Matrix Factorisation: inspiration was taken from [this paper](https://ieeexplore.ieee.org/document/7280465)

Consequently, the pairings are as follows:
1. ICA and K-means
2. NMF and Spectral Clustering

#### Hyperparameters Tuning

The primary hyperparameter we'll be evaluating is the number of clusters. We will test for 8 as it is equal to the number of classes we have. The remaining tests will use the Kmeans elbow method to decide this number. To offer a comparison, Spectral Clustering and NMF will be implemented for the resulting clusters.

### Results and Analysis
As discussed in the Experimental Design section, this experiment evaluated KMeans and Spectral Clustering on 8 clusters. Then, another cluster was decided based on the Elbow method (K-Means) and a visual judgement (Spectral Clustering).
Cluster numbers will group the results:

#### 8 Clusters
| Clustering | Type | 0   | 1    | 2   | 3   | 4   | 5   | 6   | 7   |
|------------|------|-----|------|-----|-----|-----|-----|-----|-----|
| Spectral   | Raw  | 918 | 1055 | 987 | 856 | 810 | 794 | 737 | 843 |
| Spectral   | NMF  | 671 | 2410 | 767 | 185 | 284 | 573 | 1652| 458 |
| KMeans     | Raw  | 1209| 456  |1141 | 1011| 1754| 236 | 435 | 758 |
| KMeans     | ICA  | 974 | 1172 |837  | 494 | 1743| 253 | 857 | 670 |

|Clustering   | Plot                                                  |
|-------------|-------------------------------------------------------|
|Spectral Raw |![Bar Plot](https://github.com/dmml-heriot-watt/group-coursework-gjsmo/blob/main/ReadMe%20Visuals/8%20Clusters%20Raw.png)  |
|Spectral NMF |![Scatter Plot](https://github.com/dmml-heriot-watt/group-coursework-gjsmo/blob/main/ReadMe%20Visuals/8%20Clusters%20on%20NMF.png) |
|KMeans Raw   |![Bar Plot](https://github.com/dmml-heriot-watt/group-coursework-gjsmo/blob/main/ReadMe%20Visuals/KMeans%208%20Raw.png) |
|KMeans ICA   |![Scatter Plot](https://github.com/dmml-heriot-watt/group-coursework-gjsmo/blob/main/ReadMe%20Visuals/KMeans%208%20ICA.png) |

From the tables in the Results subsection, Spectral clustering provided relatively even clusters when applied to raw images. This is seen most notably in the result of 8 clusters. However, after NMF was used, it provided a more distinct grouping, with some clusters being far more prominent than others. It's challenging to ascertain what clusters compare to what classes directly, but as discussed in the [Analsysis section of the Spectral Clustering Notebook](https://github.com/dmml-heriot-watt/group-coursework-gjsmo/blob/main/notebooks/Clustering/Spectral%20Clustering%20(Raw%20Images%20%26%20NMF.ipynb )
The values for the number of images with the 8 labels are as follows:
- N: 3245
- D: 1806
- G: 331
- C: 313
- A: 280
- H: 193
- M: 270
- O: 1200

The raw images cluster does not tally 1:1 with any of these numbers, but the number imbalance for the most prominent cluster is similar. The failure to capture this relationship ideally is due to the similarity of the images themselves; the model cannot uniquely identify what features of the pictures uniquely classify them. Additionally, given that the images are multi-label, poor success on images is expected.
Comparatively, the results of NMF-applied Spectral clusters are more in the distribution of the values for the dataset. Visualisations are provided in the [Spectral Notebook link](https://github.com/dmml-heriot-watt/group-coursework-gjsmo/blob/main/notebooks/Clustering/Spectral%20Clustering%20(Raw%20Images%20%26%20NMF.ipynb )

KMeans on Raw images were a lot less balanced, comparatively. Clusters 0, 2, 3, and 4 share most of the scans. Interestingly, of those classes, only cluster 4 saw a similar number of images assigned when ICA was applied to the scans. The remainder saw a significant reduction, with class 1 seeing the most increase in assigned scans. On the whole, however, it is much more balanced than that of the raw images.  This is the opposite of what happened with Spectral Clustering and NMF. Visuals for KMeans and ICA can be seen [here](https://github.com/dmml-heriot-watt/group-coursework-gjsmo/blob/main/notebooks/Clustering/K-Means%20Clustering%20%20(Raw%20Image%20and%20ICA).ipynb)


#### 4 Clusters
| Clustering | Type | 0    | 1    | 2    | 3   |
|------------|------|------|------|------|-----|
| Spectral   | Raw  | 2058 | 1889 | 1533 |1520 |
| Spectral   | NMF  | 1935 | 3361 | 841  | 863 |
| KMeans     | ICA  | 2350 | 1614 | 2098 | 938 |

|Clustering   | Plot                                                  |
|-------------|-------------------------------------------------------|
|Spectral Raw |![Bar Plot](https://github.com/dmml-heriot-watt/group-coursework-gjsmo/blob/main/ReadMe%20Visuals/4%20Clusters%20Raw.png)  |
|Spectral NMF |![Scatter Plot](https://github.com/dmml-heriot-watt/group-coursework-gjsmo/blob/main/ReadMe%20Visuals/4%20Clusters%20on%20NMF.png) |
|KMeans ICA   |![Scatter Plot](https://github.com/dmml-heriot-watt/group-coursework-gjsmo/blob/main/ReadMe%20Visuals/KMeans%204%20ICA.png) |


When the KMeans elbow method is applied to the features extracted with ICA, it provides 4 as the optimal number of clusters. This provides a slightly uneven number of clusters, with clusters 0 and 2 having the highest number of scans assigned. To provide a basis for comparison, Spectral Clustering was executed on the raw and extracted images. Similarly to the case with 8 clusters, the ratio is relatively balanced on raw images and very imbalanced on the extracted features. The clustering of extracted features had cluster 1 with almost half of all photos. Visual representations available [here](https://github.com/dmml-heriot-watt/group-coursework-gjsmo/blob/main/notebooks/Clustering/Spectral%20Clustering%20(Raw%20Images%20%26%20NMF.ipynb ) show what clusters were combined from 8 to 4 clusters for the extracted features.


#### 3 Clusters
| Clustering | Type | 0    | 1    | 2    |
|------------|------|------|------|------|
| Spectral   | Raw  | 2058 | 1889 | 1533 |
| Spectral   | NMF  | 4281 | 1853 | 866  |
| KMeans     | Raw  | 2439 | 2461 | 2100 |


|Clustering   | Plot                                                  |
|-------------|-------------------------------------------------------|
|Spectral Raw |![Bar Plot](https://github.com/dmml-heriot-watt/group-coursework-gjsmo/blob/main/ReadMe%20Visuals/3%20Clusters%20Raw.png)  |
|Spectral NMF |![Scatter Plot](https://github.com/dmml-heriot-watt/group-coursework-gjsmo/blob/main/ReadMe%20Visuals/3%20Clusters%20on%20NMF.png) |
|KMeans Raw   |![Bar Plot](https://github.com/dmml-heriot-watt/group-coursework-gjsmo/blob/main/ReadMe%20Visuals/KMeans%203%20Raw.png) |

At 3 clusters, KMeans provides a balanced cluster of eye scans. Each group has approximately 2000 images. It is notably more balanced than the results of Spectral Clustering, which had been the most balanced clusters on 8 and 4 cluster sizes. Cluster 0 has the most significant proportion of images when Spectral clustering is applied to NMF-extracted features at 4000 images.


*All NMF results are with n_components = 3.*

<details>
<summary><h4>Silhouette Scores KMeans</h4></summary>
  
Details for silhouette scores on Kmeans show the following:
  - Raw Images: the score for 8 clusters was 0.1839, for 3 clusters 0.2235
  - ICA: the score for 8 clusters was 0.1605, for 4 clusters 0.38465

Evidently, 4 is a better cluster than 3, this indicates that 4 has the most level of completeness for the cluster. While the clusters are somewhat dense, they are not cleanly separated.
</details>




#### Clusters Experiments and Conclusion
It would have been ideal to compare the 8 clusters to the classes, but it is difficult to ascertain what clusters directly refer to what disease label. Ultimately, the results confirm the data in stating that the diseases are not easily distinguishable. This suggests that classifiers may not see a lot of success with this data. 


## Decision Trees
Our objective is to investigate the effectiveness of decision trees and similar algorithms in classifying image data for multi-label classification. The results will be compared to the performance of neural networks and CNNs, as these are the research standards discussed in the Project Proposal.

### Experimental Details

We will be training 3 types of models; these will not be tuned. Our objective is to compare the performance of these models on our data. These models are:
- Decision Tree
    - Columnal (Baseline)
    - Image
- Random Forest
- XGBoost

#### Rationale & Other Details

1. **Baseline**: A baseline model will be created using the tabular data. This will consist of one-hot encoding the diagnosis terms, binning the ages and one-hot encoding them and encoding the sex. The resulting tabular data will then be passed into a decision tree classifier.
2. **Other Models**: The raw images will be tested on the Decision tree classifier, Random Forest classifier and XGBoost to compare the performance of these model types. The models are further discussed below:
    1. **Decision Tree**: This is selected in line with the project objectives (see section heading).
    2. **Random Forest**: This is a tree classifier, making it a good testing choice for comparison.
    3. **XGBoost**: This is one of the best-performing non-neural network approaches featured strongly on sites like Kaggle.
Each model will test the performance on just the raw image, and then the image concatenated with the Age information. Additionally, Dimensionality algorithms: PCA, NMF.

#### Relevant Notebooks
1. Min Max Scaling: This was applied in [Decision Tree with Age](https://github.com/dmml-heriot-watt/group-coursework-gjsmo/blob/main/notebooks/DecisionTree/Decision%20Tree%20(Age).ipynb) and [XGBoost](https://github.com/dmml-heriot-watt/group-coursework-gjsmo/blob/main/notebooks/DecisionTree/XGboost.ipynb)
2. Binning: This was applied in [Random Forest](https://github.com/dmml-heriot-watt/group-coursework-gjsmo/blob/main/notebooks/Random%20Forest%20Experimentation.ipynb)
3. Baseline Decision Tree: This notebook is [here](https://github.com/dmml-heriot-watt/group-coursework-gjsmo/blob/main/notebooks/DecisionTree/Baseline%20Decision%20Tree.ipynb)

### Analysis & Results

| Model               | Feature       | Accuracy | F1 Score   |
|---------------------|---------------|----------|------------|
|Decision Tree        | No Age        | 15.81%   |  0.33      |
|Decision Tree        | No Age + PCA  | 15.14%   |  0.33      |
|Decision Tree        | Age           | 17.57%   |  0.35      |
|Decision Tree (Baseline) | Columnal (Age)| 99.9% |   1.0     |
!Decision Tree (Baseline) | Columnal (No Age)|99.9% | 1.0     |
|Random Forest        | No Age        | 16.7%    |  0.26      |
|Random Forest        | Age           | 16.2%    |  0.26      |
|XGBoost Images       | No Age        | 26.24%   |            |
|XGBoost Images       | Age           | 25.19%   |            |

Accuracy Chart
![Horizontal Bar Chart](https://github.com/dmml-heriot-watt/group-coursework-gjsmo/blob/main/ReadMe%20Visuals/Horizontal%20Accuracy%20Chart.png)

Unfortunately, we are unable to visually display our models beyond a confusion matrix, because our tree models were wrapped in MultiOutputClassifier due to the Multi-Label nature of our task.

The results indicate that scaling the age was a more productive processing step than binning the ages. Regardless, the results are relatively poor. This is indicative of underfitting. The machine learning algorithms could not learn the features in the images that correlated with the labels. Furthermore, when PCA was applied to the images, the accuracy dropped. This result suggests that PCA needed to include more components. Unfortunately, we could not explore this idea entirely due to time constraints.

The baseline model was created using the Excel file that included the diagnostic terminology. These terms were processed and one-hot encoded. The resulting model was near perfect. Variations were tested with age and without age and gave similar results. This is indicative that having the diagnostic terms is enough to make predictions. However, the model needs to be able to have an understanding of the eye scans and their critical features to be a helpful tool. This provided evidence to support the unsuitability of similar machine-learning algorithms on images.

Furthermore, the nature of the data required for the baseline model is counter-productive to the purpose of this study. There is an argument to be made that by having the diagnostic terms, the diagnosis is already completed. What need exists for such a model?

The imbalanced nature also plays a part in the poor results; it is likely that supplying weights to the model would have improved performance to some degree. The very nature of the data and dataset are implicit in the poor performance of the models collectively.

#### Conclusion
From the results, we ascertained that the best model was XGBoost, a result consistent with its reputation. We understand and recognise that by flattening the images to pass to the various algorithms used, spatial information is lost, and the model under fits the data.


## Neural Networks
The objective will be to predict multi-label predictions with neural networks. As with Decision trees, our input features will be the image and the age. Following the results of decision trees, we'll be using the scaled age values. 

### Experimental details
We'll be testing different architectures and comparing results. 
1. 6 Convolutional Layers -> MaxPool -> Linear -> Linear. All activation layers are real, but the output layer is logits.
2. VGG19 backbone -> Linear Layer -> Linear Layer.
3. 4 Convolutional Layers -> Linear Layer -> Linear Layer. All activation layers are relu, output layer is sigmoid.

#### Notebooks
The respective notebooks used are listed below:
- [Pytorch CNN]()
- [CNN Experimentation]()
- [Best CNN]()


#### Hyper Parameters
We'll experiment and discuss the training experience and results of the following:
- Dropout
- Learning Rate
- Optimiser
- Class weights



### Results & Analysis
Results for our Neural Networks ranged from abysmally low to below expectations. There are several notebooks which were used to experiment throughout our development cycle. They ranged from as low as less than 1% to a peak of approximately 45%. Our experience with the hyperparameters is as follows:
**Dropout**: This surprisingly provided better results with the higher we went up until around 50%. This behaviour is indicative of overfitting, as was the case with several experiments. Some models, however, showed poor performances on both the training and the validation sets. We believe this to be due to the nature of the data. Specifically, we estimate that the prominent backgrounds of the images, i.e. the black around the eyes, possibly prevented the model from learning the relevant features. Additionally, we consider that the model was not learning features relevant to accuracy as a whole. 
**Learning Rate**: The best learning rates fluctuated across our experiments. The default learning rate did appear to work best at 0.01 in our experimentation. Research on the competition hosting the data indicated a learning rate of 0.03, but we found convergence at that learning rate to be poor. Admittedly, they used Attention as the backbone for their architecture.
Optimiser: Adam or SGD were the choices used, and neither was particularly better than the other. 
**Class weights**: Due to the imbalanced nature of the data, we experimented with adding class weights to the loss function, but it was not particularly useful. More surprising, was that our attempt at undersampling to equalise all data points saw the worst results; this perhaps is due to a lack of adequate training size. 

#### Architecture and Data Discussion
The most overfitting architecture was the VGG19 backbone [here](https://github.com/dmml-heriot-watt/group-coursework-gjsmo/blob/main/notebooks/CNN%20Experimentation%20Tensorflow.ipynb). Initial experiments had results as good as 90% on the training set and results as low as <1% on the validation set. Extremes of this level were not experienced in other tests. It was difficult to quantify the nature of the problem with performance when experiencing similar results across different tests. Other tests run include using MobileNet's depthwise separable convolutional layers. These were only about as successful as our best CNN notebook. Visualisations for the training and accuracy of the best results are described below. 

### Visuals and Analysis

| Model               | Training      | Accuracy           |
|---------------------|---------------|--------------------|
|Best CNN             | ![Training](https://github.com/dmml-heriot-watt/group-coursework-gjsmo/blob/main/ReadMe%20Visuals/Model%20Loss.png)         | ![Accuracy](https://github.com/dmml-heriot-watt/group-coursework-gjsmo/blob/main/ReadMe%20Visuals/Accuracy.png)              |

This was the best overall accuracy. As is evident, the model converges rather quickly and plateaus. All experiments performed were designed to improve this performance and were rather unsuccessful. As an extra result, a similar model on [Pytorch CNN](https://github.com/dmml-heriot-watt/group-coursework-gjsmo/blob/main/notebooks/Pytorch%20CNN.ipynb) has a similar performance to this using the age variable. However, Pytorch offers a metric called Multi-Label Accuracy which indicates a value of 86% approximately. This value is not the same as absolute accuracy, and it's possible that absolute accuracy is rather low despite the similar loss values.

### Conclusion
In conclusion, we attribute the lack of expected success to our data. We believe the amount of non-relevant pixels on the pixels may have been the reason why the dropout needed to be so high to see any kind of reasonable result. Future attempts at this or similar projects would require a feature extractor to extract the retinal images directly from the body and minimise padding (black/surrounding pixels). Additionally, we would require more data and more balanced classes as well. Putting together the results across different notebooks, similar to the Decision Tree's result, the age variable did not prove to add anything of significance to the results. 

## Project Conclusion
In total, given the results of each of our experiments, we conclude that for age to be a useful factor in predicting the various diseases in our dataset, we'd need more samples. We did not get good enough results due to the imbalanced classes and poor data sizes. Additionally, too many illnesses, as seen in [this notebook](https://github.com/dmml-heriot-watt/group-coursework-gjsmo/blob/main/notebooks/Visualisations/Post%20Processing%20Age%20Distribution.ipynb) had similar age distributions meaning for the specific task of this project; we were unable to demonstrate the usefulness of age. It is rather possible that age would be a good distinguishing feature between certain illnesses.

Clustering was important in helping us display and prove the non-distinguishable nature of the dataset. However, there is an argument to be made that preprocessing steps should have involved some kind of feature extraction to remove the retina itself from the background as, in some cases, the background was rather prominent, and there's a chance it had an effect on the performance of the clustering models. Ultimately we found out that too many images were nearly indistinguishable from each other. 

Decision Trees demonstrated that they were simply unsuitable for our data. Flattening the images did not allow for the level of spatial analysis convolutions would have been able to provide. However, the baseline model ([found here](https://github.com/dmml-heriot-watt/group-coursework-gjsmo/blob/main/notebooks/DecisionTree/Baseline%20Decision%20Tree.ipynb)) was very suitable for predicting the result of a combination of diagnostical terms. Age did not play a role in this case, as the model performed similarly with and without age. This sort of model, however, is somewhat similar to an expert system, as it simply provides a solution given the diagnosis as opposed to our goal of understanding retinal scans. It did, however, offer a basis of comparison to demonstrate the unsuitability of the tree models for image processing vs columnal data.

Neural Networks did have improvements in their performance compared to the Decision Trees. Unfortunately, the dataset proved to be too challenging to get optimal results. The level of depth required to get a good model was beyond our capabilities to train.

We do not believe this model should be deployed; no version performed suitably well for real-world testing. The idea is worth pursuing further as models capable of distinguishing between multiple illnesses would be far more suitable for testing in the real world as opposed to binary classification versions. Should the model be deployed, it would most likely hamper the care of patients as it would require extra supervision to ensure it delivers correct results, if at all. 

---

## Appendix
### Basis For Project
We have found that the primary basis for diagnosing eye diseases such as Glaucoma, Age-related Macular Degeneration (AMD), Cataracts and Diabetic Retinopathy involves using Retinal fundus photographs or optical coherence tomography (OCT) scans. Many state-of-the-art research uses Deep Learning Models to predict the presence of several diseases based on either of these scans. To this goal, we wish to categorise the presence of Glaucoma, Cataracts, Hypertension Retinopathy, Diabetic Retinopathy, Age-related Macular Degeneration, and more using classification techniques on retina scans.

### Weekly Meetings

**WEEK 2**
- https://github.com/dmml-heriot-watt/group-coursework-gjsmo/blob/main/documentation/Week2.md

**WEEK 3**
- https://github.com/dmml-heriot-watt/group-coursework-gjsmo/blob/main/documentation/Week3.md

**Week 4**
- https://github.com/dmml-heriot-watt/group-coursework-gjsmo/blob/main/documentation/Week4.md

**Week 5**
- https://github.com/dmml-heriot-watt/group-coursework-gjsmo/blob/main/documentation/week5.md

**Week 6**
- https://github.com/dmml-heriot-watt/group-coursework-gjsmo/blob/main/documentation/week6.md

**Week 7**
- https://github.com/dmml-heriot-watt/group-coursework-gjsmo/blob/main/documentation/week7.md

**Week 8**
- https://github.com/dmml-heriot-watt/group-coursework-gjsmo/blob/main/documentation/week8.md

**Week 9**
- https://github.com/dmml-heriot-watt/group-coursework-gjsmo/blob/main/documentation/week9.md

### Milestones
> [!NOTE]
> Create a bullet list of the key milestones for your project. Discuss these with your group. You may need to update these as the project progresses.
- Selecting and Proposing a Research Topic
- Finding a suitable Dataset
- Exploring and Visualising the data
- Cleaning and Further preprocessing of the data
- Drawing Conclusions based on the visualisations and adjusting our questions as necessary
- Applying dimensionality reduction to the data.
- Applying a clustering algorithm to the feature vector after the dimensionality reduction and then visualising it.
- Applying the Decision Tree Classifier to the processed tabular data and comparing it to a decision tree on the image data
- Applying a CNN to the image data and another with age as an additional input and comparing it.
- Interpreting the results of the models and then finetuning the hyperparameters where appropriate
- Update our findings on the ReadMe and Jupyter notebook(s)


