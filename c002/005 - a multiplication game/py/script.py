import os
import math

def print_output(output):
    f = open(os.path.realpath(
        os.path.join(os.getcwd(), os.path.dirname(__file__), '../py_output.txt')), 'w')
    f.write(output)
    f.close()

def get_winner(n):
    p = 1
    i = 9

    while True:
        p *= i
        if n <= p and i == 9:
            return 'Stan wins.'
        if n <= p and i == 2:
            return 'Ollie wins.'
        i = 2 if i == 9 else 9


def main(filename):
    f = open(filename, 'rU')
    input_data = f.read()
    f.close()
    output = ''

    input_data = (int(n) for n in input_data.split('\n')[:-1])

    for n in input_data:
        output +=  get_winner(n) + '\n'
    
    print_output(output)



if __name__ == '__main__':
    FILE = os.path.realpath(
        os.path.join(os.getcwd(), os.path.dirname(__file__), '../test_input.txt'))
    main(FILE)
