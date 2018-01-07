import sys

def three_n_plus_one(n):
    cycle = 0
    while True:
        cycle += 1

        if n == 1:
            break
        if n % 2 == 1:
            n = (3 * n) + 1
        else:
            n = n // 2

    return cycle


def main():
    a = int(sys.argv[1])
    b = int(sys.argv[2])
    max_cycle = 0

    for i in range(a, b + 1):
        cycle = three_n_plus_one(i)
        if cycle > max_cycle:
            max_cycle = cycle

    print(a, b, max_cycle)


if __name__ == '__main__':
    main()
