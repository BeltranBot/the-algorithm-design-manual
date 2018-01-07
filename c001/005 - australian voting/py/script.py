import os
import math

def get_winners(candidates, ballots):
    total_votes = len(ballots)
    winners_cut = total_votes / 2

    winners = []
    ballots = [[candidates[i - 1] for i in ballot] for ballot in ballots]

    while True:
        dic = {}
        fewest_votes = math.inf
        lead_votes = -1
        len_ballots = len(ballots)
        for j in range(len_ballots):
            candidate = 0
            i = 0
            while True:
                candidate = ballots[j][i]
                if candidate in candidates:
                    break
                i += 1
            if candidate not in dic:
                dic[candidate] = 1
            else:
                dic[candidate] += 1

        for candidate in dic:
            if dic[candidate] < fewest_votes:
                fewest_votes = dic[candidate]
            if dic[candidate] > lead_votes:
                lead_votes = dic[candidate]
            if dic[candidate] > winners_cut:
                winners.append(candidate)

        if winners:
            return '\n'.join(winners)

        to_delete = []

        if fewest_votes != lead_votes:
            for candidate in dic:
                if dic[candidate] == fewest_votes:
                    to_delete.append(candidate)

            for candidate in candidates:
                if candidate not in dic and candidate not in to_delete:
                    to_delete.append(candidate)

            for candidate in to_delete:
                candidates.remove(candidate)
                if candidate in dic:
                    del dic[candidate]
        else:
            winners = []
            for candidate in candidates:
                if candidate in dic:
                    winners.append(candidate)
            return '\n'.join(winners)
    return 0


def main(filename):
    f = open(filename, 'rU')
    input_data = f.read()
    f.close()
    output = ''

    input_data = input_data.split('\n')
    i = 0
    cases = int(input_data[i])
    i += 1
    for j in range(cases):
        i += 1
        n_candidates = int(input_data[i])
        i += 1

        candidates = []
        for k in range(n_candidates):
            candidates.append(input_data[i])
            i += 1

        ballots = []
        while i < len(input_data) and input_data[i] != '':
            ballots.append([int(n) for n in input_data[i].split()])
            i += 1

        output += get_winners(candidates, ballots) + '\n'

        if j != cases - 1:
            output += '\n'

    f = open(os.path.realpath(
        os.path.join(os.getcwd(), os.path.dirname(__file__), '../py_output.txt')), 'w')
    f.write(output)
    f.close()


if __name__ == '__main__':
    FILE = os.path.realpath(
        os.path.join(os.getcwd(), os.path.dirname(__file__), '../test_input.txt'))
    main(FILE)
