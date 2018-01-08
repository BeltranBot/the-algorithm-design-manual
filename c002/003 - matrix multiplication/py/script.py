import os
import math


def matrix_multiplication(a, b):
    c = []
    x = len(a)
    y = len(b[0])
    z = len(b)

    for i in range(x):
        c.append([])
        for j in range(y):
            c[i].append(0)
            for k in range(z):
                c[i][j] += a[i][k] * b[k][j]

    return c


if __name__ == '__main__':
    a = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ]
    b = [
        [9, 8, 7],
        [6, 5, 4],
        [3, 2, 1]
    ]
    print(matrix_multiplication(a, b))
