import json

f = open('classification.json')

data = json.load(f)

dict = {}

for x in data:
    dict[x["name"]] = x["uuid"]

print(dict)

f.close()