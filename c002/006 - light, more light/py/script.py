import os
import math

def print_output(output):
    f = open(os.path.realpath(
        os.path.join(os.getcwd(), os.path.dirname(__file__), '../py_output.txt')), 'w')
    f.write(output)
    f.close()


def is_on(n):
    return 'yes' if (math.sqrt(n)).is_integer() else 'no'


def main(filename):
    f = open(filename, 'rU')
    input_data = f.read()
    f.close()
    output = ''

    input_data = (int(n) for n in input_data.split('\n'))

    for n in input_data:
        if n == 0:
            break
        output += is_on(n) + '\n'

    print_output(output)


if __name__ == '__main__':
    FILE = os.path.realpath(
        os.path.join(os.getcwd(), os.path.dirname(__file__), '../test_input.txt'))
    main(FILE)
