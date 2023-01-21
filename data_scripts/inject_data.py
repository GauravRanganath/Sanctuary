import requests

fileNames = ['lung_cancer-male-10-caucasian.txt',
             'lung_cancer-male-3-caucasian.txt',
             'lung_cancer-male-70-caucasian.txt',
             'lung_cancer-male-57-caucasian.txt',
             'lung_cancer-male-59-hispanic.txt',
             'lung_cancer-female-65-african_american.txt',
             'lung_cancer-female-60-asian.txt',
             'lung_cancer-female-45-hispanic.txt',
             'lung_cancer-female-34-asian.txt',
             'lung_cancer-female-23-asian.txt'
             ]

url = "https://api.estuary.tech/content/add"

headers = {
    # 'Content-Type': 'multipart/form-data',
    'Accept': 'application/json',
    'Authorization': 'Bearer EST0eae79ed-3ff2-414a-a139-3f5564be0344ARY'
}

# generate tags based on filename
tags = fileNames[1].split('-')
tags[3] = tags[3][:-4:]
disease = tags[0]
sex = tags[1]
age = tags[2]
race = tags[3]

print(disease, sex, age, race)

# fileName = './data/' + fileNames[1]
fileName = 'test.txt'
f = {'data': open(fileName, 'rb')}

# retrieve estuaryId
res = requests.post(url, headers=headers, files=f)
estuaryId = res.json()["estuaryId"]
print("estuaryId", estuaryId)

