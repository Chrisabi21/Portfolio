## Weekly Accomplishments
- We displayed the eyes for each disease. 
- We visualised the original dataset visualising the various diseases,
  and how they are correlate with age and gender as these are the features we'll be applying alongside the retina scans.
- We explored the data and figured out that there were some challenges with regards to the structure of the data, due to having two images per row.
- Started creating the function to clean the diagnosis columns so that we can adequately create word clouds reflecting the most common medical diagnosis terms.
- Unfortunately, we were unable to start dealing with Clustering due to the challenges experienced in preprocessing the data.

### Challenges
- When attempting to make a word cloud out of the diagnosis terms for a visualisation, we found out that there is a character in the information that prevents
  the word cloud from identifying the unique diagnostical terms. Identifying this character proved to be a challenge as at first glance it appeared to be a comma.
  We considered, encoding issues with pandas, however displaying the text helped identify the character, and we could apply it to see the unique terms. 


## Tasks to Accomplish for Week 4
- Preprocessing: Handling Diagnosis Columns, Binning Age Groups, Splitting data to an image a line.
- Visualise preprocessed data for outliers
- Dimensionality Reduction Algorithms
- Clustering Algorithms - Choose 3 - 5 algorithms.

  ### Extension
  - Apply Dimensionality Reduction Algorithms
  - Apply 1 Clustering Algorithm.
