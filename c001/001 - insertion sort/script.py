"""insertion sort"""

def insertion_sort(arr):
    n = len(arr)
    i = 1
    j = 0
    while i < n:
        j = i
        while (j > 0) and (arr[j] < arr[j - 1]):
            [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
            j -= 1
        i += 1
        print ''.join(arr)


def main():
    arr = list('insertionsort')
    insertion_sort(arr)

if __name__ == '__main__':
    main()
