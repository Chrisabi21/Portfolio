import torch
from torch import nn
import numpy as np
import pandas as pd
from PIL import Image
from sklearn.preprocessing import MinMaxScaler
from torch.utils.data import Dataset
import os

class CNNDataset(Dataset):
    def __init__(self, file, root_dir, transform=None, target_transform=None):
        self.dataframe = pd.read_excel(file)
        self.root_dir = root_dir
        self.dataframe = self.createTarget(self.dataframe)
        self.transform = transform
        self.target_transform = target_transform
        self.age_scaler = MinMaxScaler()
        self.dataframe['Patient Age'] = self.age_scaler.fit_transform(self.dataframe[['Patient Age']])

    def __len__(self):
        return len(self.dataframe)

    def createTarget(self, df):
        df['Labels'] = [[0, 0, 0, 0, 0, 0, 0] for _ in range(len(df))]
        target_columns = ['N', 'D', 'G', 'C', 'A', 'H', 'M', 'O']
        label = []
        for i in range(len(df)):
            for target in target_columns:
                label.append(df.loc[i, target])
            df.at[i, 'Labels'] = np.array(label)
            label = []
        return df


    def __getitem__(self, idx):
        img_path = os.path.join(self.root_dir, self.dataframe.iloc[idx]['Filename'])
        image = Image.open(img_path).convert('RGB')
        age  = self.dataframe.iloc[idx]['Patient Age']
        label = self.dataframe.iloc[idx]['Labels']
        if self.transform:
            image = self.transform(image)
        if self.target_transform:
            label = self.target_transform(label)
        return image, age, label

