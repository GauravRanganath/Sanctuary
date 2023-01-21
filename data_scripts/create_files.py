fileNames = ['lung_cancer-male-10-caucasian.txt',
             'lung_cancer-male-3-caucasian.txt',
             'lung_cancer-male-70-caucasian.txt',
             'lung_cancer-male-57-caucasian.txt',
             'lung_cancer-male-59-hispanic.txt',
             'lung_cancer-female-65-african_american.txt',
             'lung_cancer-female-60-asian.txt',
             'lung_cancer-female-45-hispanic.txt',
             'lung_cancer-female-34-asian.txt',
             'lung_cancer-female-23-asian.txt',
             ]

for x in fileNames:
    fileName = './data/' + x
    print("creating:", fileName)
    f = open(fileName, "w")
    f.write(x + " CONTENT: test")
    f.close()
