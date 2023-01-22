import requests
import time

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

classifiication_dict = {
    "string": "342fc333-997b-4d08-8ad2-8a693bfc4598",
    "rama1": "2ecf15f2-0bc6-44db-9b15-e5859ad69435",
    "caucasian": "15259ca4-1918-4420-ac3f-1c8eedc692a9",
    "lung_cancer": "a6185f93-139d-4f0d-ba13-d54016d66c6d",
    "osteoporosis": "45f0ef77-ce0e-44a0-8ec6-17b9dae601f2",
    "female": "0e215c75-ea14-49e2-80c3-1b5eba937e49",
    "rama15": "93274a38-e0e9-4299-a48a-1502f6def8a1",
    "try2": "626e5503-6b7a-43de-ab9a-3d7844183c81",
    "try6": "52a7509e-48e3-4f69-84c7-7876d16563e3",
    "try7": "1dfadc61-1112-4dec-b4b6-d6b1de754079",
    "age30": "320a474b-c6bc-4b35-9ac0-ff7206ce69ad",
    "age33": "e6df28e9-49bc-487b-911c-bab6e58e4c2f",
    "age37": "34bfb849-1153-4428-9637-83ca3b492c67",
    "age40": "4ed2fd1c-4284-4f7f-affd-5c8ecdb9d324",
    "age60": "52dee5ba-5698-48be-99ff-1b01a37dffd4",
    "age63": "b6461a57-38a8-4e62-bf1d-068c6385eb52",
    "collection1": "ef26a93d-1bb0-45a3-85d6-2223e923a153",
    "rama2": "9531a715-d8cb-4808-a490-18056108a8a6",
    "african_american": "1d9bb3eb-ecd0-4f4c-a082-3be829a96e4d",
    "try3": "c4ad7580-619e-4afb-b743-0b1da10dd6b4",
    "age39": "e1452ab5-3a8f-4cb6-b214-c787146df8a9",
    "age70": "71a5f163-4278-437d-b894-1cabe5dce28a",
    "age72": "984a2c45-a05c-4c5e-80d9-bcd1672fda8b",
    "age79": "3bde47bc-005a-4f5e-b9aa-0c7b463e53db",
    "heart_disease": "7c67557a-e627-415e-bbc8-d0f055819131",
    "asian": "3863ec9e-82f6-4d52-8bb4-134951e4a375",
    "try4": "bb51b401-b843-4b16-b17e-ced65de5afad",
    "try8": "b05ec976-a0cf-4a95-baff-961918720b0c",
    "age41": "5499b4ec-9d2e-41a2-a035-ca1e0cdc01f1",
    "age71": "60136fd5-3f6b-4474-88d0-5c35581688fa",
    "age83": "2fba9029-6ba3-46df-8a2a-a9ccf02c48c2",
    "age87": "b85a20ee-76d4-43b0-a8af-d8e97d9378be",
    "age89": "1c856600-2e53-4592-88e3-de67faa65fdc",
    "age90": "9e81de4b-10f2-48bc-a981-e20640b424e7",
    "age93": "e3353b93-4341-4949-8a2e-cc7aecce6407",
    "age95": "d57c9cc4-8dd7-4346-8612-080ff9277edf",
    "col2": "bc1960f9-32cb-4fb9-bfd0-824e726c8a53",
    "lung_disease": "570b6d71-f4ec-4b9b-8a0c-d61efbc53a3a",
    "native": "ba9e2645-20e9-42a0-8cf9-4a56239b59bc",
    "try9": "d40d9048-601f-4abd-aeeb-53304ac7471a",
    "age42": "f4d9b10d-e8ae-4d6f-9acc-f297135074ec",
    "age44": "2e21300c-91ba-4dfd-a68b-8700c06fb1f4",
    "age78": "997bfd5e-df73-4a29-a8ce-01cb2704d31d",
    "age85": "081d50e1-70ee-4e93-b414-c2ad3e4f2066",
    "age94": "39966005-f46d-41e5-870c-ab16bd943721",
    "hispanic": "680b3530-9961-4de4-9f65-4af1c15166db",
    "age1": "c9ddebbd-b49a-44fe-8dbb-242ac344d698",
    "age43": "9822b085-d31c-4919-bdb1-f6d05f8a7cbf",
    "age91": "f187e116-6280-4ea8-b8fb-5f9b897c45b7",
    "pacific_islander": "ba74b049-8962-4be8-a3df-aaac371557e5",
    "age2": "628bbad1-4ef4-4942-a007-db3d9add0e6d",
    "age4": "8b781b5a-8fe3-4ba7-92cd-ab6bd9e1effe",
    "age12": "4eb28851-1cc0-44db-8e0c-624f38b93681",
    "age13": "7d2d526f-e61e-48a6-884d-75bcefc5601b",
    "age15": "5ffe430c-048a-4290-a5e3-c80317cfaf27",
    "age17": "c1d0d591-ed22-40d9-b382-87cf91384b28",
    "age18": "7770f1fd-4569-413c-8cb1-696d3b347b0a",
    "age34": "4af5a200-0b1b-461d-bfa5-5b103c65006f",
    "age36": "c94c188e-d19b-4973-b8e3-9cd535814f2c",
    "age45": "5238784e-3203-4d60-904c-5978148a99bc",
    "age96": "19cc7d71-fd32-40c4-97d4-0ecacfef604c",
    "leaukimia": "c05f6553-f2db-419a-aa05-bb706d176034",
    "age3": "2bca3e77-cf60-4562-8bd8-9ce6382fb8bf",
    "age46": "603a1f5e-5e39-44a2-beab-3a179413be17",
    "age97": "caeb8682-dc6d-49dc-84b0-3dd665b5d2a5",
    "male": "944a210b-1368-441f-ae10-5950c4f33dbd",
    "age5": "a04ae32b-0de1-42d4-8ae7-2adc7c2d394d",
    "age47": "7417f887-47b8-4079-81b8-fe7008ce7125",
    "age51": "8d08c08b-0f4f-459f-a006-5afc6609bce1",
    "age61": "31ec34af-b797-46ff-9a85-0135a8eb4cc9",
    "age65": "dcc8d6f0-ba95-42c2-9796-26096df8cbb9",
    "age66": "9e6b2cac-ceba-4d19-a384-fea7bbaaf1d6",
    "age81": "bcbc92a4-2eeb-4880-8700-11e849a6ea5f",
    "age84": "dcfed114-6804-4998-9f7e-82cc6118ef5c",
    "age86": "d658204a-0ea3-440b-b906-4c94353228cd",
    "age98": "11ac82c1-e354-4af3-920d-00afb7c14325",
    "age6": "8bacfb2b-8847-4c4f-a8c5-de236fd16b6e",
    "age8": "e61c4a47-abf5-48ab-a976-9af5a9da1029",
    "age28": "10ddc66a-a86a-424d-bd9d-d304e4fd0837",
    "age48": "2f2b3d79-a778-410d-a509-c038ca21db5b",
    "age54": "504ee4e4-4350-43a9-ab42-e525fe122fdf",
    "age99": "987f31a5-52c6-4618-b31a-70f7649434ba",
    "age7": "0dcacf8e-294c-495b-941b-0af3b2e43702",
    "age16": "2ce62b39-79b1-49ad-9a38-9f767d4d9554",
    "age22": "e8b13c8c-b448-4353-b0b0-5129f2128abc",
    "age24": "19208afb-dc86-4339-bb0a-91d8da23d17f",
    "age27": "8be03ea9-baee-4982-86ad-8092e149b9d3",
    "age49": "a33f284e-13e8-4a6c-8eda-b95bc584470b",
    "age55": "d69f3cf7-735f-4658-bd25-8aef219e33c6",
    "age73": "16729640-ff35-49d7-8f66-888d7d399916",
    "age77": "2c0786b4-46fa-4438-9cae-f06dc0476d54",
    "age100": "b6a5327d-d4c5-4dcf-b73a-4f486665640a",
    "rama3": "4acddc2a-4a68-49fd-9533-7eda07e23af7",
    "a1": "d8b2a132-d566-46f2-9d2f-803404deda03",
    "age9": "2e2bb4d7-13c1-4b38-a0b0-ad822d3e791c",
    "age23": "65dbd6f1-4f4d-4df7-b9ce-21d72b76b5cd",
    "age25": "928a6169-b35c-4db7-a4d2-6bef0329dbb7",
    "age26": "73e4855a-c263-45a9-86a6-52f2e28fd3eb",
    "age31": "22122208-0d6a-4ee7-ae2c-4b107abb192c",
    "age35": "ee0d4c9f-2f89-4951-95b3-e3d1c1abc900",
    "age50": "1baae0fc-fe85-4a0f-a1a9-cc1dbbe5c7a7",
    "age56": "f5348db8-3a11-476d-b40e-3e3aad02e238",
    "age69": "b22dc1b6-c23a-4893-9d43-357e23f58da2",
    "age74": "752970c5-afd8-4bd2-bd77-84328fd627e4",
    "age75": "479f2cd3-1d78-4d0d-a9a9-0e2169c42f9e",
    "age76": "2c4cf514-e1a2-4800-901a-e8b4f42533f1",
    "age80": "ff4cfa76-c10a-4340-a89b-c1359cad38a7",
    "leukemia": "146a1452-a2ed-4f0c-bbc8-99065781c7e3",
    "a2": "9f5f0dc7-8f39-4260-bc2e-7315615b8f55",
    "age10": "f6bfc529-fca7-4057-84ef-40020836b247",
    "age11": "52f7a04c-6637-459b-9ae3-f486569095ae",
    "age20": "2e4571df-0c82-4adc-8cf2-b1efccec6eac",
    "age52": "4711a463-9188-449e-8654-06ae55c53974",
    "age58": "e86f1f63-636b-44e1-a183-5bba67ee8775",
    "age59": "ccdde8d0-af8a-4d2c-a658-9b3840f92f3d",
    "age62": "01b4a4ab-5cf7-4fa8-8392-01489a4f4b1d",
    "age64": "47d0cd28-b077-4676-90c6-2dae4615df4f",
    "age67": "04bb858f-1203-4f27-92ae-d3e1cbe91f62",
    "a3": "b6c9ba35-0ac6-4250-a80f-544bedecb01d",
    "age14": "abb033dd-9435-491f-93ec-821acbad3f48",
    "age19": "48054b18-e86a-4d40-bea0-c380a7024031",
    "age21": "e9b0c633-8e4f-4942-969d-5a60a4df21a7",
    "age32": "ab202b95-a16b-470e-b9ae-4606e1969543",
    "age38": "63118abf-c310-4aea-848c-1cc3462d24e4",
    "age53": "aa9ec291-ad18-4eb9-8994-d64f364f2557",
    "a4": "b39791d8-5029-42a0-8119-9cf0ed008642",
    "a5": "87ee9836-0d00-4eca-9461-7756e320f61f",
    "rama11": "762a4a41-b397-4698-9f82-b75a1f9a8b9a",
    "rama12": "e48c0f08-1b03-4009-b736-eab86529d832",
    "rama13": "b608d4a2-3c3f-4908-b22d-82fdf5aec48f",
    "rama14": "235ec7e7-ae8d-4efc-bde8-36eea92c9e4b",
    "try1": "226e678b-261e-4d91-87d9-5a97255aa85d",
    "try5": "30605f19-4e17-4a84-9420-782b864043a7",
    "age29": "87af1efa-8c0d-4e12-90c5-31e226b9dbfe",
    "age57": "7a167c19-79b8-4fbb-90aa-cf03fa0da2f2",
    "age68": "12fb32fa-f5a7-481d-980f-05351a1007b2",
    "age82": "765e8bc3-25bb-4afd-8076-f2fd5b5f7083",
    "age88": "a4bdb557-bd4e-447e-a3c7-76f4677b8ce1",
    "age92": "0f46f76b-c3b6-46da-9a84-9e8f02cd02f3"
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
        url_sex = "https://api.estuary.tech/collections/" + \
            classifiication_dict[sex]
        url_age = "https://api.estuary.tech/collections/" + \
            classifiication_dict[age]
        url_race = "https://api.estuary.tech/collections/" + \
            classifiication_dict[race]

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
