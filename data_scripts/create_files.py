import random

fileNames = ['lung_cancer-male-age10-caucasian.txt',
             'lung_cancer-female-age20-hispanic.txt',
             'lung_cancer-female-age23-asian.txt',
             'lung_cancer-male-age24-caucasian.txt',
             'lung_cancer-male-age3-caucasian.txt',
             'lung_cancer-female-age34-asian.txt',
             'lung_cancer-female-age45-hispanic.txt',
             'lung_cancer-female-age45-african_american.txt',
             'lung_cancer-female-age47-asian.txt',
             'lung_cancer-female-age55-hispanic.txt',
             'lung_cancer-female-age56-asian.txt',
             'lung_cancer-male-age57-caucasian.txt',
             'lung_cancer-male-age59-hispanic.txt',
             'lung_cancer-female-age59-hispanic.txt',
             'lung_cancer-female-age60-asian.txt',
             'lung_cancer-female-age60-asian.txt',
             'lung_cancer-female-age65-african_american.txt',
             'lung_cancer-male-age65-asian.txt',
             'lung_cancer-male-age66-asian.txt',
             'lung_cancer-male-age70-caucasian.txt',
             'heart_disease-male-age10-caucasian.txt',
             'heart_disease-female-age20-hispanic.txt',
             'heart_disease-male-age22-caucasian.txt',
             'heart_disease-female-age23-asian.txt',
             'heart_disease-female-age30-asian.txt',
             'heart_disease-female-age45-african_american.txt',
             'heart_disease-female-age47-asian.txt',
             'heart_disease-male-age55-hispanic.txt',
             'heart_disease-female-age56-hispanic.txt',
             'heart_disease-male-age57-asian.txt',
             'heart_disease-female-age60-asian.txt',
             'heart_disease-female-age61-asian.txt',
             'heart_disease-female-age65-hispanic.txt',
             'heart_disease-female-age65-african_american.txt',
             'heart_disease-male-age65-asian.txt',
             'heart_disease-female-age66-asian.txt',
             'heart_disease-male-age66-asian.txt',
             'heart_disease-female-age69-hispanic.txt',
             'heart_disease-male-age70-asian.txt',
             'heart_disease-male-age72-caucasian.txt',
             'leukemia-male-age10-asian.txt',
             'leukemia-male-age20-hispanic.txt',
             'leukemia-male-age22-caucasian.txt',
             'leukemia-female-age26-african_american.txt',
             'leukemia-male-age30-asian.txt',
             'leukemia-female-age31-hispanic.txt',
             'leukemia-male-age33-hispanic.txt',
             'leukemia-male-age42-asian.txt',
             'leukemia-female-age45-african_american.txt',
             'leukemia-female-age47-asian.txt',
             'leukemia-male-age50-caucasian.txt',
             'leukemia-male-age55-african_american.txt',
             'leukemia-female-age56-hispanic.txt',
             'leukemia-male-age57-asian.txt',
             'leukemia-male-age60-asian.txt',
             'leukemia-male-age65-caucasian.txt',
             'leukemia-female-age69-hispanic.txt',
             'leukemia-male-age70-asian.txt',
             'leukemia-male-age72-caucasian.txt',
             'leukemia-male-age8-african_american.txt',
             'osteoporosis-male-age22-hispanic.txt',
             'osteoporosis-female-age26-hispanic.txt',
             'osteoporosis-male-age42-asian.txt',
             'osteoporosis-female-age45-african_american.txt',
             'osteoporosis-female-age47-asian.txt',
             'osteoporosis-male-age48-asian.txt',
             'osteoporosis-female-age49-hispanic.txt',
             'osteoporosis-female-age50-asian.txt',
             'osteoporosis-male-age50-asian.txt',
             'osteoporosis-male-age55-hispanic.txt',
             'osteoporosis-female-age56-hispanic.txt',
             'osteoporosis-female-age57-asian.txt',
             'osteoporosis-female-age58-asian.txt',
             'osteoporosis-female-age59-hispanic.txt',
             'osteoporosis-female-age60-hispanic.txt',
             'osteoporosis-male-age65-caucasian.txt',
             'osteoporosis-female-age69-hispanic.txt',
             'osteoporosis-male-age70-asian.txt',
             'osteoporosis-male-age72-caucasian.txt',
             'osteoporosis-female-age80-african_american.txt']

for x in fileNames:
    fileName = './data/' + x
    print("creating:", fileName)
    f = open(fileName, "w")
    f.write(x + " CONTENT: test" + str(random.random()))
    f.close()
