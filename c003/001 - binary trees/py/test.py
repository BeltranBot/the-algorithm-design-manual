from classes.tree import Tree
import sys
import random

def main():
    args = sys.argv[1:]
    if len(args) > 0:
        if args[0] == '--create' or args[0] == '--c':
            test_create()
        elif args[0] == '--print' or args[0] == '--p':
            test_print()
        elif args[0] == '--search' or args[0] == '--s':
            test_search()
        elif args[0] == '--minmax' or args[0] == '--mm':
            test_minmax()
        elif args[0] == '--delete' or args[0] == '--d':
            test_delete()
        else:
            print('Usage: [--create --print --search --minmax --delete]')
    else:
        print('Usage: [--create --print --search --minmax --delete]')


def generate_random_tree(a, b, c):
    my_set = []
    tree = None
    while len(my_set) < c:
        num = random.randint(a, b)
        if num not in my_set:
            my_set.append(num)
            if tree is None:
                tree = Tree(num)
            else:
                tree.insert(Tree(num))
    print('list', my_set, '\n')
    return tree


def test_create():
    my_tree = Tree(1, None)
    print('Create tree object with value 1: ', my_tree.get_value())


def test_print():
    tree = generate_random_tree(1, 10, 10)
    print('Print tree in ascendent order')
    tree.print()
    print('\n')
    print('Print tree in descendent order')
    tree.print(True)


def test_search():
    tree = generate_random_tree(1, 100, 10)
    print('is 25 in the tree?', tree.search(25) is not None)
    print('is 50 in the tree?', tree.search(50) is not None)
    print('is 75 in the tree?', tree.search(75) is not None)
    print('is 100 in the tree?', tree.search(100) is not None)


def test_minmax():
    tree = generate_random_tree(1, 100, 10)
    print('Min num is:', tree.min().get_value())
    print('Max num is:', tree.max().get_value())

def test_delete():
    my_list = []
    my_list.append(2)
    my_list.append(1)
    my_list.append(7)
    my_list.append(4)
    my_list.append(8)
    my_list.append(3)
    my_list.append(6)
    my_list.append(5)

    tree = Tree(2)
    tree.insert(Tree(1))
    tree.insert(Tree(7))
    tree.insert(Tree(4))
    tree.insert(Tree(8))
    tree.insert(Tree(3))
    tree.insert(Tree(6))
    tree.insert(Tree(5))

    print('list', my_list, '\n')
    print('delete node 7:')
    tree.delete(7)
    tree.print()
    print('delete node 5:')
    tree.delete(5)
    tree.print()


if __name__ == '__main__':
    main()
