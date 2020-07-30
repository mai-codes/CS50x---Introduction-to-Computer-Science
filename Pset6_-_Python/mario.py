from cs50 import get_int

# get height input from user
height = get_int("Height: ")

# height bounds
while height < 0 or height == 0 or height > 8:
    height = get_int("Height: ")

#iterate through height
for i in range(1, height + 1):
    # insert spaces before hashes
    for j in range(height - i):
        print(" ", end="")
    for j in range(height - i, height):
        print("#", end="")
    height - 1
    # add new line
    print()
