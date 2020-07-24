#include <stdio.h>
#include <cs50.h>
#include <string.h>
#include <ctype.h>
#include <math.h>

int main(void)
{
    /* ask user for a string */
    string s = get_string("Text: ");

    /* initialize variables */
    int n = strlen(s);
    float countL = 0;
    int i = 0;
    int c;
    float countW = 0;
    float countS = 0;

    /* scans length of string */
    while ((c = s[i++]) && (i <= n))
    {
        /* counts letters in string */
        if ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z'))
        {
            countL++;
        }

        /* counts words in string */
        if (c == ' ' && c + 1 != ' ')
        {
            countW++;
        }

        /* counts sentences in string */
        if (c == '.' || c == '?' || c == '!')
        {
            countS++;
        }

    }

    /* counts the last word in string */
    if (s[0])
    {
        countW++;
    }

    /* calculate variables part of equation */
    float L = (countL / countW) * 100;
    float S = (countS / countW) * 100;
    float gradeLevel = 0.0588 * L - 0.296 * S - 15.8;

    /* print results */
    if (gradeLevel < 0)
    {
        printf("Before Grade 1\n");
    }

    if (gradeLevel > 16)
    {
        printf("Grade 16+\n");
    }

    if (gradeLevel > 0 && gradeLevel < 16)
    {
        printf("Grade %1.0f\n", gradeLevel);
    }

}