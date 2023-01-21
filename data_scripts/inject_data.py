import requests

fileNames = ['./data/lung_cancer-male-10-caucasian.txt',
             './data/lung_cancer-male-3-caucasian.txt',
             './data/lung_cancer-male-70-caucasian.txt',
             './data/lung_cancer-male-57-caucasian.txt',
             './data/lung_cancer-male-59-hispanic.txt',
             './data/lung_cancer-female-65-african_american.txt',
             './data/lung_cancer-female-60-asian.txt',
             './data/lung_cancer-female-45-hispanic.txt',
             './data/lung_cancer-female-34-asian.txt',
             './data/lung_cancer-female-23-asian.txt']

url = "https://api.estuary.tech/content/add"

headers = {
    # 'Content-Type': 'multipart/form-data',
    'Accept': 'application/json',
    'Authorization': 'Bearer EST0eae79ed-3ff2-414a-a139-3f5564be0344ARY'
}
    
f = {'data': open('./data/lung_cancer-male-10-caucasian.txt', 'rb')}
res = requests.post(url, headers=headers, files=f)
print(res.text)