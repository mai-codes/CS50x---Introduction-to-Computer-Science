#include <stdio.h>
#include <ctype.h>
#include <stdlib.h>
#include <cs50.h>
#include <string.h>

#define MAXCHAR 80

int main(int argc, char *argv[])
{

    /* check is argument is equal to two, if not exit */
    if (argc == 2)
    {
        for (int j = 0; j < strlen(argv[1]); j++)
        {
            /*if not an integer, exit*/
            if (argv[1][j] != '0' && argv[1][j] != '1' && argv[1][j] != '2' && argv[1][j] != '3' && argv[1][j] != '4' && argv[1][j] != '5'
                && argv[1][j] != '6' && argv[1][j] != '7' && argv[1][j] != '8' && argv[1][j] != '9')
            {
                printf("Usage: ./caesar key\n");
                j++;
                exit(1);
            }
        }
        int num = atoi(argv[1]);

        /*get string from user */
        string str = get_string("plaintext: ");

        int i;
        int l = strlen(str);
        char c;
        char ciph[MAXCHAR];


        for (i = 0; i < l; i++) /* ci = (pi + k) & 26 */
        {
            c = str[i];

            /* converts lowercase letters */
            if (c >= 'a' && c <= 'z')
            {
                c = ((c + num) - 'a') % 26 + 'a';
                ciph[i] = c; /*arg2[i] = c;*/
            }

            /*converts uppercase letters */
            else if (c >= 'A' && c <= 'Z')
            {
                c = ((c + num) - 'A') % 26 + 'A';
                ciph[i] = c; /*arg2[i] = c;*/
            }

            else
            {
                ciph[i] = c;
            }
        }

        printf("ciphertext: %s\n", ciph);
        return 0;
    }

    else
    {
        printf("Usage: ./caesar key\n");
        return 1;
    }
}
