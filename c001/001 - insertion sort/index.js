main()

function main () {
  let arr = 'insertionsort'.split('')
  insertion_sort(arr)
}

function insertion_sort (arr) {
  j = 0
  for (let i = 1; i < arr.length; i++) {
    j = i
    while ((j > 0) && (arr[j] < arr[j - 1])) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
      j--
    }
    console.log(arr.join(''))
  }
}