function calculateFlips (a, b) {
    let flips = []
    for (let i = a.length - 1; i >= 0; i--) {
        if (a[i] == b[i]) continue
        let j = i + 1
        for (let k = j; k >= 0; k--) {
            if (a[k] != b[i]) continue
            if (k != 0) {
                let left = a.slice(0, k + 1).reverse()
                let right = a.slice(k + 1, a.length)
                a = left.concat(right)
                flips.push(a.length - k)
            }
            let left = a.slice(0, j).reverse()
            let right = a.slice(j, a.length)
            a = left.concat(right)
            flips.push(a.length - j + 1)
        }
    }
    flips.push(0)
    return flips.join(' ')
}

function solve (n) {
    n = n.split('\r\n')
    let output = ''

    for (let numbers of n) {
        if (numbers.length == 0) continue
        numbers = numbers.split(' ').map(Number)
        let clone = numbers.slice(0)
        let sorted = clone.slice(0).sort((a, b) => a - b)
        let flips = calculateFlips(clone, sorted)

        output += numbers.join(' ') + '\n' + flips + '\n'
    }

    return output
}

module.exports = { solve }