import os
from copy import copy
import string
import time
import math
from collections import deque


def print_output(output):
    f = open(os.path.realpath(
        os.path.join(os.getcwd(), os.path.dirname(__file__), '../py_output.txt')), 'w')
    f.write(output)
    f.close()


def getMedian(n, numbers):
    m = 0
    if (n % 2) == 0:
        m = n // 2
        m = (numbers[m - 1] + numbers[m]) // 2
    else:
        m = n // 2
        m = numbers[m]
    return m


def main(filename):
    f = open(filename, 'rU')
    input_data = f.read()
    f.close()
    output = ''
    input_data = input_data.split('\n')
    cases = int(input_data.pop(0))

    for i in range(cases):
        numbers = [int(x) for x in input_data.pop(0).strip().split()]
        n = numbers.pop(0)
        numbers.sort()
        median = getMedian(n, numbers)
        
        total = 0

        for j in range(n):
            total += abs(median - numbers[j])
        
        output += str(total) + '\n'
    
    print_output(output)


if __name__ == '__main__':
    FILE = os.path.realpath(
        os.path.join(os.getcwd(), os.path.dirname(__file__), '../test_input.txt'))
    start = time.time()
    main(FILE)
    end = time.time()
    total_time = end - start
    print('execution time:', math.ceil(total_time * 10000) / 10000, ' secs')
