"""summation"""

def summation(n):
    i = 1
    total = 0
    while i <= n:
        total += i
        i += 1
    total2 = (n * (n + 1)) // 2
    return total - total2


def main():
    total = 0
    for n in range(100):
        total += summation(n)
        # print 'n: %d %d' % (n, total)
    print total

if __name__ == '__main__':
    main()
