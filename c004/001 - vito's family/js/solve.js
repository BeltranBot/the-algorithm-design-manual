function getMedian(len, numbers) {
    let m = 0
    if (len % 2 == 0) {
        m = Math.round(len / 2)
        m = Math.round((numbers[m - 1] + numbers[m]) / 2)
    } else {
        m = Math.round(len / 2)
        m = numbers[m - 1]
    }
    return m
}

function solve (n) {
    n = n.split('\r\n')
    let cases = +n.shift()
    let output = ''
    
    for (let i = 0; i < cases; i++) {
        let numbers = n.shift().trim().split(/\s+/).map(Number)
        let len = numbers.shift()
        numbers.sort((a, b) => a - b)
        let median = getMedian(len, numbers)
        let total = 0

        for (let j = 0; j < numbers.length; j++) {
            total += Math.abs(median - numbers[j])
        }

        output += total + '\n'
    }

    return output
}

module.exports = { solve }