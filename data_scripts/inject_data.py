import requests
import time

fileNames = ['rama15-rama11-rama12-rama13.txt',
             'rama14-rama11-rama12-rama13.txt',
             'rama15-rama11-rama12-rama13.txt',
             'rama14-rama11-rama12-rama13.txt',
             'rama15-rama11-rama12-rama13.txt',
             'rama14-rama11-rama12-rama13.txt',
             'rama15-rama11-rama12-rama13.txt'
             ]

classifiication_dict = {
    "string": "342fc333-997b-4d08-8ad2-8a693bfc4598",
    "rama1": "2ecf15f2-0bc6-44db-9b15-e5859ad69435",
    "caucasian": "15259ca4-1918-4420-ac3f-1c8eedc692a9",
    "lung_cancer": "a6185f93-139d-4f0d-ba13-d54016d66c6d",
    "osteoporosis": "45f0ef77-ce0e-44a0-8ec6-17b9dae601f2",
    "female": "0e215c75-ea14-49e2-80c3-1b5eba937e49",
    "rama15": "93274a38-e0e9-4299-a48a-1502f6def8a1",
    "collection1": "ef26a93d-1bb0-45a3-85d6-2223e923a153",
    "rama2": "9531a715-d8cb-4808-a490-18056108a8a6",
    "african_american": "1d9bb3eb-ecd0-4f4c-a082-3be829a96e4d",
    "heart_disease": "7c67557a-e627-415e-bbc8-d0f055819131",
    "asian": "3863ec9e-82f6-4d52-8bb4-134951e4a375",
    "col2": "bc1960f9-32cb-4fb9-bfd0-824e726c8a53",
    "lung_disease": "570b6d71-f4ec-4b9b-8a0c-d61efbc53a3a",
    "native": "ba9e2645-20e9-42a0-8cf9-4a56239b59bc",
    "hispanic": "680b3530-9961-4de4-9f65-4af1c15166db",
    "pacific_islander": "ba74b049-8962-4be8-a3df-aaac371557e5",
    "leaukimia": "c05f6553-f2db-419a-aa05-bb706d176034",
    "male": "944a210b-1368-441f-ae10-5950c4f33dbd",
    "rama3": "4acddc2a-4a68-49fd-9533-7eda07e23af7",
    "a1": "d8b2a132-d566-46f2-9d2f-803404deda03",
    "a2": "9f5f0dc7-8f39-4260-bc2e-7315615b8f55",
    "a3": "b6c9ba35-0ac6-4250-a80f-544bedecb01d",
    "a4": "b39791d8-5029-42a0-8119-9cf0ed008642",
    "a5": "87ee9836-0d00-4eca-9461-7756e320f61f",
    "rama11": "762a4a41-b397-4698-9f82-b75a1f9a8b9a",
    "rama12": "e48c0f08-1b03-4009-b736-eab86529d832",
    "rama13": "b608d4a2-3c3f-4908-b22d-82fdf5aec48f",
    "rama14": "235ec7e7-ae8d-4efc-bde8-36eea92c9e4b"
}



headers = {
    # 'Content-Type': 'multipart/form-data',
    'Accept': 'application/json',
    'Authorization': 'Bearer EST0eae79ed-3ff2-414a-a139-3f5564be0344ARY'
}

for x in fileNames:
    print(">>>> Uploading:", x)
    
    # generate tags based on filename
    tags = x.split('-')
    tags[3] = tags[3][:-4:]
    
    disease = tags[0]
    sex = tags[1]
    age = tags[2]
    race = tags[3]

    print(disease, sex, age, race)

    fileName = './data/' + x
    f = {'data': open(fileName, 'rb')}

    # upload content and retrieve estuaryId
    url = "https://api.estuary.tech/content/add"
    res = requests.post(url, headers=headers, files=f)
    print("url", res.status_code)
    
    if res.status_code == 200:
        estuaryId = res.json()["estuaryId"]
        print("estuaryId", estuaryId)

        # add to collections
        url_disease = "https://api.estuary.tech/collections/" + \
            classifiication_dict[disease]
        url_sex = "https://api.estuary.tech/collections/" + classifiication_dict[sex]
        url_age = "https://api.estuary.tech/collections/" + classifiication_dict[age]
        url_race = "https://api.estuary.tech/collections/" + classifiication_dict[race]

        body = {
            "contentIDs": [
                estuaryId
            ]
        }

        res = requests.post(url_disease, headers=headers, json=body)
        print("url_disease", res.status_code)
        
        res = requests.post(url_sex, headers=headers, json=body)
        print("url_sex", res.status_code)
        
        res = requests.post(url_age, headers=headers, json=body)
        print("url_age", res.status_code)
        
        res = requests.post(url_race, headers=headers, json=body)
        print("url_race", res.status_code)
        
        print("Done!")
        
    # put a timer
    time.sleep(5)