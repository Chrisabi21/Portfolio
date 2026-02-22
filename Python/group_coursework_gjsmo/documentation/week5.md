### Weekly Accomplishments

-  Research/Review: We successfully completed our research and thoroughly documented our findings in our chosen field of study.

- Data Cleaning: The team gathered in the lab during the week to collectively clean the dataset.

- Data Visualization: We took a step further by visualizing the processed datasets, aiming to compare them with the preprocessed dataset.   Our visualizations also included highlighting diseases that contribute the most to each label.

- Clustering Strategy: The team made significant progress in determining the clustering algorithms to be used for the data. We also organized the team into three groups, each dedicated to clustering and feature extraction tasks.

 

### Challenges: 
Most challenges related to this week came from the way the csv file is originally structured. Each row represents and individual who's retinas were scanned. Consequently, each row has two images, a left eye and a right eye. Initial discussions were held around the idea of simply using the data as is, but concatenating the two images (left and right eye) per individual to feed to the neural network. 

This idea was scrapped in favour of processing the data such that a row represents and eye. What made this more challenging was the labelling process. As stated in the 'ReadMe' alongside various notebooks, the data has 8 possible disease labels, and each row contains two 'diagnosis' columns for each eye respectively. This results in the labels being a multi label not a multi class classification, as an eye can suffer from more than one disease. More noteworthy is that the labels might not apply to each eye. So there were rows that had 1 eye as normal another as diabetic and the overall label for that row is diabetic. Whereas, others had diabetic in one eye and hypetension in another eye and the resulting label was D and H. 

To resolve this, we came up with a way to isolate the diagnosis terms and the label that is uniquely related to each term. Through these sets for each label, we restructured and relabelled the data such that each row contains one eye and the label(s) for that eye. This is functionally explained in: [Preprocessing Notebook](https://github.com/dmml-heriot-watt/group-coursework-gjsmo/blob/main/notebooks/Preprocessing.ipynb)

  

  

### Tasks to Accomplish for Week 6

- Each group will focus on completing their assigned clustering and feature extraction tasks. Additionally, they will work on creating visualizations that demonstrate how diseases are clustered and also identify and highlight any potential outliers within the dataset.
