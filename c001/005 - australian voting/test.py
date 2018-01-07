import os


def main(filename, final_name):
    f = open(filename, 'rU')
    input_data = f.read()
    f.close()
    input_data = input_data.split('\n')
    output = ''

    i = 0
    for line in input_data:

        if line == '':
            i += 1
            line = 'test' + str(i)
        output += line +'\n'

    f = open(os.path.realpath(
        os.path.join(os.getcwd(), os.path.dirname(__file__), final_name)), 'w')
    f.write(output)
    f.close()

    print('finished!!')



if __name__ == '__main__':
    filename = os.path.realpath(
        os.path.join(os.getcwd(), os.path.dirname(__file__), 'test_input.txt'))
    main(filename, 'test_test_input.txt')
    filename = os.path.realpath(
        os.path.join(os.getcwd(), os.path.dirname(__file__), 'output.txt'))
    main(filename, 'test_output.txt')
