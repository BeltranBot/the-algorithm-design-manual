import os
import math

def print_output(output):
    f = open(os.path.realpath(
        os.path.join(os.getcwd(), os.path.dirname(__file__), '../py_output.txt')), 'w')
    f.write(output)
    f.close()

def count_carries(a, b):
    list_a = list(a)
    list_b = list(b)
    len_a = len(a)
    len_b = len(b)
    a = int(a)
    b = int(b)

    max_len = len_a
    min_len = len_b
    if max_len < len_b:
        max_len = len_b
        min_len = len_a

    carry = 0
    carry_count = 0

    for i in range(max_len):
        t_a = int(list_a[-i - 1]) if abs(-i - 1) <= len_a else 0
        t_b = int(list_b[-i - 1]) if abs(-i - 1) <= len_b else 0
        d = t_a + t_b + carry
        carry = 0
        if d >= 10:
            carry_count += 1
            carry = 1
    return carry_count


def main(filename):
    f = open(filename, 'rU')
    input_data = f.read()
    f.close()
    output = ''

    input_data = input_data.split('\n')
    input_data = [line.split() for line in input_data]

    for line in input_data:
        if line[0] == '0' and line[1] == '0':
            break
        carry = count_carries(line[0], line[1])
        num = carry
        if carry == 0:
            num = 'No'
        if carry > 1:
            output += str(num) + ' carry operations.\n'
        else:
            output += str(num) + ' carry operation.\n'

    print_output(output)


if __name__ == '__main__':
    FILE = os.path.realpath(
        os.path.join(os.getcwd(), os.path.dirname(__file__), '../test_input.txt'))
    main(FILE)
