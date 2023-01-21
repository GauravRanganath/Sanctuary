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

for x in fileNames:
    print("creating:", x)
    f = open(x, "w")
    f.write(x + " CONTENT: test")
    f.close()
