import os
import time
import math


def print_output(output):
    f = open(os.path.realpath(
        os.path.join(os.getcwd(), os.path.dirname(__file__), '../py_output.txt')), 'w')
    f.write(output)
    f.close()


def calculate_flips(a, b):
    flips = []
    for i in range(len(a) - 1, -1, -1):
        if (a[i] == b[i]):
            continue
        j = i + 1
        for k in range(j - 1, -1, -1):
            if a[k] != b[i]:
                continue
            if k != 0:
                left = a[0:k + 1]
                left.reverse()
                right = a[k + 1:len(a)]
                a = left + right
                flips.append(len(a) - k)
            left = a[0:j]
            left.reverse()
            right = a[j:len(a)]
            a = left + right
            flips.append(len(a) - j + 1)
    flips.append(0)
    return ' '.join(map(str, flips))


def main(filename):
    f = open(filename, 'rU')
    input_data = f.read()
    f.close()
    output = ''
    input_data = input_data.split('\n')

    for numbers in input_data:
        if not numbers:
            continue
        numbers = [int(x) for x in numbers.split()]
        clone = numbers[:]
        sorted_list = sorted(clone)
        flips = calculate_flips(clone, sorted_list)
        output += ' '.join(map(str, numbers)) + '\n' + flips + '\n'
    
    print_output(output)


if __name__ == '__main__':
    FILE = os.path.realpath(
        os.path.join(os.getcwd(), os.path.dirname(__file__), '../test_input.txt'))
    start = time.time()
    main(FILE)
    end = time.time()
    total_time = end - start
    print('execution time:', math.ceil(total_time * 10000) / 10000, ' secs')
