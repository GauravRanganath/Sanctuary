import random
fileNames = ['rama15-rama11-rama12-rama13.txt',
             'rama14-rama11-rama12-rama13.txt']

for x in fileNames:
    fileName = './data/' + x
    print("creating:", fileName)
    f = open(fileName, "w")
    f.write(x + " CONTENT: test" + str(random.random()))
    f.close()
