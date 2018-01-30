import os
import math

def print_output(output):
    f = open(os.path.realpath(
        os.path.join(os.getcwd(), os.path.dirname(__file__), '../py_output.txt')), 'w')
    f.write(output)
    f.close()

def jolly_jumpers(n):
    if n[0] == 1:
        return 'Jolly'

    distances = []
    arr = n[1:]

    for i in range(0, len(arr) - 1):
        a = abs(arr[i] - arr[i + 1])

        if a not in distances:
            distances.append(a)

    for i in range(1, n[0]):
        if i not in distances:
            return 'Not jolly'

    return 'Jolly'


def main(filename):
    f = open(filename, 'rU')
    input_data = f.read()
    f.close()
    output = ''

    input_data = input_data.split('\n')

    for line in input_data:
        if line == '':
            break
        output += jolly_jumpers([int(n) for n in line.split()]) + '\n'

    print_output(output)


if __name__ == '__main__':
    FILE = os.path.realpath(
        os.path.join(os.getcwd(), os.path.dirname(__file__), '../test_input.txt'))
    main(FILE)
