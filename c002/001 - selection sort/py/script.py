import os
import math

def selection_sort():
    arr = list('selectionsort')
    len_arr = len(arr)

    print(''.join(arr))

    for i in range(len_arr):
        min_value = i
        for j in range(i + 1, len_arr):
            if arr[j] < arr[min_value]:
                min_value = j
        [arr[i], arr[min_value]] = [arr[min_value], arr[i]]
        print(''.join(arr))


if __name__ == '__main__':
    selection_sort()
