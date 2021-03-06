#include <cs50.h>
#include <stdio.h>

int main(void)
{
    // Initialize variables
    int start;
    int end;

    // Prompt for start size
    do
    {
        start = get_int("Start size: ");
    }
    while (start < 9);

    // Prompt for end size
    do
    {
        end = get_int("End size: ");
    }
    while (end < start);

    // Calculate number of years until we reach threshold
    int years = 0;
    while (start < end)
    {
        start = start + (start / 3) - (start / 4);
        years++;
    }

    // Print number of years
    printf("Years: %i\n", years);
}