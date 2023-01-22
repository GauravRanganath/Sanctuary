import random

fileNames = ['heart_disease-female-age60-asian.txt']

for x in fileNames:
    fileName = './data/' + x
    print("creating:", fileName)
    f = open(fileName, "w")
    f.write(x + " CONTENT: test" + str(random.random()))
    f.close()
