import os
from copy import copy
import string
import time
import math

PLAIN_TEXT = 'the quick brown fox jumps over the lazy dog'.split()


def print_output(output):
    f = open(os.path.realpath(
        os.path.join(os.getcwd(), os.path.dirname(__file__), '../py_output.txt')), 'w')
    f.write(output)
    f.close()


def words_match(a, b, c={}, d={}):
    if len(a) != len(b):
        return False

    check = ''

    for i in range(len(a)):
        letter_a = a[i]
        letter_b = b[i]

        if (not letter_a in c) and (not letter_b in d):
            c[letter_a] = letter_b
            d[letter_b] = letter_a
        elif c[letter_a] != letter_b or d[letter_b] != letter_a:
            return False
        check += c[letter_a]
    
    return b == check


def lines_match(a, b):
    if len(a) != len(b):
        return False
    
    c = {}
    d = {}

    for i in range(len(a)):
        if (not words_match(a[i], b[i], c, d)):
            return False
    
    return True


def make_dictionary(a, b):
    c = {}

    for i in range(len(b)):
        for j in range(len(b[i])):
            c[b[i][j]] = a[i][j]
    
    return c


def decrypt_line(dic, line):
    s = ''

    for i in range(len(line)):
        for j in range(len(line[i])):
            s += dic[line[i][j]]
    
        if (i != (len(line) - 1)):
            s += ' '
    
    return s


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
        
        enc_lines = []
        dic = None

        while input_data[index] != '':
            enc_line = input_data[index].split()
            enc_lines.append(enc_line)

            if not dic and lines_match(PLAIN_TEXT, enc_line):
                dic = make_dictionary(PLAIN_TEXT, enc_line)
            
            index += 1

        if not dic:
            output += 'No solution.' + '\n'
        else:
            for enc_line in enc_lines:
                output += decrypt_line(dic, enc_line) + '\n'
        
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
