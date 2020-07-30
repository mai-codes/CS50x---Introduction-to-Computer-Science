#include <cs50.h>
#include <stdio.h>
#include <math.h>

int main(void)
{
    int i = 0; // Initialize global counting integer
    float c = 0; // Intialize global cash integer $$$$$

    do
    {
        c = get_float("How much change is owed?: "); //Prompt User for their non negative ca$h
    }
    while(c <= 0); // reprompt user until they input positive ca$h

    while (c >= 0.25)
    {
        c = c - 0.25; // If the ca$h has quarters, subtract and count the coins
        i++;
    }

    c = roundf(c * 100)/100; // round ca$h to realistic decimal place

    while (c > 0.10 || c == 0.10)
    {
        c = c - 0.10; // if ca$h is less than a quarter this checks if it is divisible by dimes, counts amount of dimes in ca$h
        i++;
    }
    c = roundf(c * 100)/100;

    while (c >= 0.05 && c < 0.10)
    {
        c = c - 0.05; // Nickels(not the element) counted and subtracted
        i++;
    }
    c = roundf(c * 100)/100;

    while (c >= 0.01 && c < 0.05)
    {
        c = c - 0.01; // Penny's counted and subtracted
        i++;
    }
    c = roundf(c * 100)/100;
    /*printf("%f\n", c);*/
    
    if (c != 0)
    {
        c = c - 0.01; // Catching any loose moralled ca$h
        i++;
    }
    /*printf("%f\n", c);*/
    c = roundf(c * 100)/100;
    
    printf("%i\n", i);
}
