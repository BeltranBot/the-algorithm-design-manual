import os
import math

def find_match(needle, stack):
    n = len(needle)
    m = len(stack)

    i = 0
    while i <= m - n:
        j = 0
        while j < n and needle[j] == stack[i + j]:
            j += 1
            if j == n:
                return i
            i += 1
        return -1

if __name__ == '__main__':
    print(find_match('needle', 'this is a stack of needles'))
