import os

def main(filename):
    f = open(filename, 'rU')

    while True:
        n = int(f.readline())
        if n == 0:
            break

        amounts = []
        for i in range(n):
            amounts.append(float(f.readline()))

        amounts = sorted(amounts)
        solution = 0.0

        for i in range(n // 2):
            [a, b] = [amounts[i], amounts[-1 - i]]

            if not a == b:
                c = (a + b) / 2
                solution += round((c - a), 2)

        print('$%.2f' % solution)


if __name__ == '__main__':
    FILE = os.path.realpath(
        os.path.join(os.getcwd(), os.path.dirname(__file__), 'test_input.txt'))
    main(FILE)
