import os
from copy import copy
import string
import time
import math

ALPHABET = string.ascii_lowercase


def print_output(output):
    f = open(os.path.realpath(
        os.path.join(os.getcwd(), os.path.dirname(__file__), '../py_output.txt')), 'w')
    f.write(output)
    f.close()

def valid_sub(enc, word, subs):
    if len(enc) != len(word):
        return False

    for e, w in zip(enc, word):
        if subs[e] and subs[e] != w:
            return False

    return True

def create_sub(enc, word, subs):
    new_subs = copy(subs)

    for e, w in zip(enc, word):
        if new_subs[e] == w:
            continue

        if new_subs[e] is not None:
            raise ValueError

        if w in new_subs.values():
            raise ValueError

        new_subs[e] = w

    return new_subs

def decrypt(enc, words, subs=None):
    # print('here', subs)
    if subs is None:
        subs = {c: None for c in ALPHABET}

    for word in words[len(enc[0])]:
        if not valid_sub(enc[0], word, subs):
            continue

        try:
            new_subs = create_sub(enc[0], word, subs)
        except ValueError:
            continue

        if len(enc) == 1:
            return [word]

        dec = decrypt(enc[1:], words, new_subs)

        if dec is not None:
            return [word] + dec

    return None


def main(filename):
    f = open(filename, 'rU')
    input_data = f.read()
    f.close()
    output = ''
    input_data = input_data.split('\n')
    index = 0
    cases = int(input_data[index])
    index += 1
    words = {}

    for i in range(cases):
        word_len = len(input_data[index])
        if not word_len in words:
            words[word_len] = []
        words[word_len].append(input_data[index])
        index += 1

    while True:
        if not input_data[index]:
            break

        enc = input_data[index].split()
        dec = decrypt(enc, words)

        if dec:
            output += ' '.join(dec) + '\n'
        else:
            output += ' '.join('*' * len(w) for w in enc) + '\n'

        index += 1

    print_output(output)


if __name__ == '__main__':
    FILE = os.path.realpath(
        os.path.join(os.getcwd(), os.path.dirname(__file__), '../test_input.txt'))
    start = time.time()
    main(FILE)
    end = time.time()
    total_time = end - start
    print('execution time:', math.ceil(total_time * 10000) / 10000, ' secs')
