import csv
from sys import argv

# check correct number of command line arguments
if len(argv) < 3:
    print("Usage: python dna.py data.csv sequence.txt")

sequencetexts = argv[2]
csv_database = argv[1]

# open dna file
with open(sequencetexts) as dna_seq:
    dna_reader = csv.reader(dna_seq)
    for row in dna_reader:
        dna_row = row

# store the sequence in a string
dna = dna_row[0]

# store the desired sequences in a new empty dictionary
sequences = {}

# extract the sequences from the database into a list
with open(csv_database) as people_data:
    people = csv.reader(people_data)
    for row in people:
        dnaSequences = row
        dnaSequences.pop(0)
        break

# copy the list in a dictionary where the genes are the keys
for n in dnaSequences:
    sequences[n] = 1

# iterate through the dna sequence and count the repetitions of the values from sequence dictionary
for key in sequences:
    l = len(key)
    tempMax = 0
    temp = 0
    for i in range(len(dna)):
        # after having counted a sequence it skips at the end of it to avoid counting again
        while temp > 0:
            temp -= 1
            continue

        # if the segment of dna corresponds to the key and there is a repetition of it we start counting
        if dna_row[0][i: i + l] == key:
            while dna[i - l: i] == dna[i: i + l]:
                temp += 1
                i += l

            # it compares the value to the previous longest sequence and if it is longer it overrides it
            if temp > tempMax:
                tempMax = temp

    # store the longest sequences in the dictionary using the correspondent key
    sequences[key] += tempMax

# open and iterate trough the database of people treating each one like a dictionary so it can compare to the sequences one
with open(csv_database, newline='') as people_data:
    people = csv.DictReader(people_data)
    for person in people:
        match = 0
        # compares the sequences to every person and prints name before leaving the program if there is a match
        for dna in sequences:
            if sequences[dna] == int(person[dna]):
                match += 1
        if match == len(sequences):
            print(person['name'])
            exit()

    print("No match")