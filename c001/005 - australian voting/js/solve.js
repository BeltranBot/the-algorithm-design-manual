function caseData (i, n) {
  let nCandidates = +n[i++]
  let candidates = []
  let ballots = []

  for (let j = 0; j < nCandidates; j++) {
    candidates.push(n[i++])
  }

  while (i < n.length && n[i] !== '') {
    ballots.push(n[i++].split(' ').map(x => candidates[x - 1]))
  }

  return [i, candidates, ballots]
}

function getWinner (candidates, ballots) {
  let totalBallots = ballots.length
  let winnersCut = totalBallots / 2
  let winners = []

  while (true) {
    let votes = {}
    let fewestVotes = Infinity
    let leadVotes = -1

    // counts votes of available candidates
    for (let i = 0; i < totalBallots; i++) {
      let candidate = 0
      let j = 0
      while (true) {
        candidate = ballots[i][j]
        if (candidates.includes(candidate)) break
        j++
      }
      (votes[candidate]) ? votes[candidate]++ : votes[candidate] = 1
    }

    for (const candidate in votes) {
      fewestVotes = (votes[candidate] < fewestVotes) ?
        votes[candidate] : fewestVotes
      leadVotes = (votes[candidate] > leadVotes) ?
        votes[candidate] : leadVotes
      if (votes[candidate] > winnersCut) winners.push(candidate)      
    }

    if (winners.length > 0) return winners.join('\n')

    let to_delete = []
    if (fewestVotes !== leadVotes) {
      // removes all candidates with the fewest votes, including those who
      // didn't get any votes at all
      to_delete = to_delete.concat(
        Object.keys(votes).filter(k => votes[k] === fewestVotes))
      candidates.forEach(c => (!votes[c] && !to_delete.includes(c)) ?
        to_delete.push(c) : false)
      candidates = new Set(candidates)
      to_delete.forEach(candidate => {
        candidates.delete(candidate)
        delete votes[candidate]
      })
      candidates = [...candidates]
    } else {
      candidates.forEach(candidate => (votes[candidate]) ?
        winners.push(candidate) : false)
      return winners.join('\n')
    }
  }
  return 0
}

function solve (n) {
  n = n.split('\r\n')
  let i = 0
  let output = ''
  cases = +n[i++]

  for (let j = 0; j < cases; j++) {
    let [k, candidates, ballots] = caseData(++i, n)
    i = k
    output += getWinner(candidates, ballots) + '\n'
    if (j !== cases - 1) output += '\n'
  }  

  return output
}

module.exports = { solve }