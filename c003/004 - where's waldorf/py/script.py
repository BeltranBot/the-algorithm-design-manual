import os
from copy import copy
import string
import time
import math


def print_output(output):
    f = open(os.path.realpath(
        os.path.join(os.getcwd(), os.path.dirname(__file__), '../py_output.txt')), 'w')
    f.write(output)
    f.close()


def check_up_left(grid, j, i, word, n=1):
    j -= 1
    i -= 1
    if (j >= 0) and (i >= 0) and grid[j][i] == word[n]:
        n += 1
        if (n == len(word)):
            return True
        return check_up_left(grid, j, i, word, n)
    return False


def check_up(grid, j, i, word, n=1):
    j -= 1
    if (j >= 0) and grid[j][i] == word[n]:
        n += 1
        if (n == len(word)):
            return True
        return check_up(grid, j, i, word, n)
    return False


def check_up_right(grid, j, i, word, n=1):
    j -= 1
    i += 1
    if (j >= 0) and (i < len(grid[j])) and grid[j][i] == word[n]:
        n += 1
        if (n == len(word)):
            return True
        return check_up_right(grid, j, i, word, n)
    return False


def check_left(grid, j, i, word, n=1):
    i -= 1
    if (i >= 0) and grid[j][i] == word[n]:
        n += 1
        if (n == len(word)):
            return True
        return check_left(grid, j, i, word, n)
    return False


def check_right(grid, j, i, word, n=1):
    i += 1
    if (i < len(grid[j])) and grid[j][i] == word[n]:
        n += 1
        if (n == len(word)):
            return True
        return check_right(grid, j, i, word, n)
    return False


def check_down_left(grid, j, i, word, n=1):
    j += 1
    i -= 1
    if (j < len(grid)) and (i >= 0) and grid[j][i] == word[n]:
        n += 1
        if (n == len(word)):
            return True
        return check_down_left(grid, j, i, word, n)
    return False


def check_down(grid, j, i, word, n=1):
    j += 1
    if (j < len(grid)) and grid[j][i] == word[n]:
        n += 1
        if (n == len(word)):
            return True
        return check_down(grid, j, i, word, n)
    return False


def check_down_right(grid, j, i, word, n=1):
    j += 1
    i += 1
    if (j < len(grid)) and (i < len(grid[j])) and grid[j][i] == word[n]:
        n += 1
        if (n == len(word)):
            return True
        return check_down_right(grid, j, i, word, n)
    return False


def check_for_word(grid, j, i, word):
    if (check_up_left(grid, j, i, word)):
        return True
    if (check_up(grid, j, i, word)):
        return True
    if (check_up_right(grid, j, i, word)):
        return True
    if (check_left(grid, j, i, word)):
        return True
    if (check_right(grid, j, i, word)):
        return True
    if (check_down_left(grid, j, i, word)):
        return True
    if (check_down(grid, j, i, word)):
        return True
    if (check_down_right(grid, j, i, word)):
        return True
    return False
    

def find_word(grid, word):
    for j in range(len(grid)):
        for i in range(len(grid[j])):
            if grid[j][i] == word[0]:
                if len(word) == 1 or check_for_word(grid, j, i, word):
                    return ' '.join([str(j + 1), str(i + 1)])


def main(filename):
    f = open(filename, 'rU')
    input_data = f.read()
    f.close()
    output = ''
    input_data = input_data.split('\n')
    index = 0
    cases = int(input_data[index])
    index += 1

    for i in range(cases):
        index += 1
        [rows, cols] = [int(n) for n in input_data[index].split()]
        index += 1
        grid = []

        for j in range(rows):
            grid.append([l.lower() for l in list(input_data[index])])
            index += 1
        
        n_words = int(input_data[index])
        index += 1

        for j in range(n_words):
            output += find_word(
                grid,
                [l.lower() for l in list(input_data[index])]
            ) + '\n'
            index += 1

        if i != (cases - 1):
            output += '\n'

    print_output(output)


if __name__ == '__main__':
    FILE = os.path.realpath(
        os.path.join(os.getcwd(), os.path.dirname(__file__), '../test_input.txt'))
    start = time.time()
    main(FILE)
    end = time.time()
    total_time = end - start
    print('execution time:', math.ceil(total_time * 10000) / 10000, ' secs')
