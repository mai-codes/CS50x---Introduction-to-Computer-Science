#include <cs50.h>
#include <stdio.h>

int main()
{
    //declare global variables
    int h, i, j;
    //input height of pyramid from user until a number from 1 to 8 is picked
    do
    {
        h = get_int("Height: ");
    }
    while (h > 8 || h <= 0);

    //RIGHT-ALIGNED TRIANGLE
    //iterate through rows
    for (i = 0; i < h; i++)
    {
        //insert spaces during interation
        for (j = i; j < h - 1; j++)
        {
            printf(" ");  
        }  
        //print # for the input height
        for (j = 0; j <= i; j++)
        {
            printf("#");
        }
//insert space after every iteration    
printf("\n");
    }
}