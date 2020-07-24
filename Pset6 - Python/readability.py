from cs50 import get_string

# ask user for a string
s = get_string("Text: ");

# initialize variables
n = len(s)
countL = 0
i = 0
countW = 0
countS = 0
c = 0

# scans length of string
for i in range(len(s)):
    # counts letters in string
    if (s[i] >= 'A' and s[i] <= 'Z') or (s[i] >= 'a' and s[i] <= 'z'):
        countL += 1

    # counts words in string
    if s[i] == ' ' and s[i+1] != ' ':
        countW += 1

    # counts sentences in string
    if s[i] == '.' or s[i] == '?' or s[i] == '!':
        countS += 1

# counts the last word in string
if s[0]:
    countW += 1

# calculate variables part of equation
L = (countL / countW) * 100
S = (countS / countW) * 100
gradeLevel = 0.0588 * L - 0.296 * S - 15.8

# print results
if gradeLevel < 0:
    print("Before Grade 1")

if gradeLevel > 16:
    print("Grade 16+")

if gradeLevel > 0 and gradeLevel < 16:
    print(f"Grade {round(gradeLevel)}")