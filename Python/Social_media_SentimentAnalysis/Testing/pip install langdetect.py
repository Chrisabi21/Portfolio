import re
import pandas as pd
from langdetect import detect

# Function to clean data   
def clean_tweet(tweet):
    # Convert tweet to lowercase
    tweet = tweet.lower()
    
    # Check if tweet is in English language
    try:
        if detect(tweet) != 'en':
            return None
    except:
        return None
    
    # Remove username tags
    cleaned_tweet = re.sub(r'@\w+', '', tweet)
    
    # Remove special characters, numbers, links, hashtags, and punctuation
    
    # Remove links
    cleaned_tweet = re.sub(r'http[s]?://\S+', '', cleaned_tweet)
    
    # Remove hashtags
    cleaned_tweet = re.sub(r'#\w+', '', cleaned_tweet)
    
    # Remove Characters
    cleaned_tweet = re.sub(r'[^a-zA-Z\s]', '', cleaned_tweet)
    
    # Remove extra spaces
    cleaned_tweet = re.sub(r'\s+', ' ', cleaned_tweet).strip()
    
    return cleaned_tweet

# Example DataFrame
data = {'tweet': ['This is a @username #tweet with a link http://example.com', 
                  'Another @user123 #tweet with a number 123 and some !@# symbols',
                  'Bonjour tout le monde!',  # French
                  'Hola mundo!',            # Spanish
                  'Привет мир!']}          # Russian
df = pd.DataFrame(data)

# Clean the 'tweet' column using the clean_tweet function and remove non-English tweets
df['cleaned_tweet'] = df['tweet'].apply(clean_tweet)

# Drop rows where cleaned_tweet is None (non-English tweets)
df.dropna(subset=['cleaned_tweet'], inplace=True)

# Display the DataFrame
print(df)
