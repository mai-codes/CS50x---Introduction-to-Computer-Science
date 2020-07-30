from cs50 import get_float

# global counter
i = 0
c = get_float("Change owed: ")

while c < 0:
    c = get_float("Change owed: ")

if c > 0:
    while c >= 0.25:
        c -= 0.25 #If the ca$h has quarters, subtract and count the coins
        i+=1

    while c > 0.10 or c == 0.10:
        c -= 0.10; # if ca$h is less than a quarter this checks if it is divisible by dimes, counts amount of dimes in ca$h
        i+=1
        c = round(c, 2)

    while c >= 0.05 and c < 0.10:
        c -= 0.05; # Nickels(not the element) counted and subtracted
        i+=1
        c = round(c, 2)

    while c >= 0.01 and c < 0.05:
        c -= 0.01 # Penny's counted and subtracted
        i+=1
        c = round(c, 2)

    if c != 0:
        c -= 0.01 # Catching any loose moralled ca$h
        i+=1

    print(i)