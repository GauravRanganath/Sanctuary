import requests
import time

headers = {
    # 'Content-Type': 'multipart/form-data',
    'Accept': 'application/json',
    'Authorization': 'Bearer EST0eae79ed-3ff2-414a-a139-3f5564be0344ARY'
}

for x in range(1, 101):
    age = "age" + str(x)
    
    body = {
        "description": age + "desc",
        "name": age
    }
    
    res = requests.post("https://api.estuary.tech/collections/", headers=headers, json=body)
    print(age, res.status_code)
    
    time.sleep(2)