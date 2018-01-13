class Tree:

    def __init__(self, value, parent=None):
        self.__value = value
        self.__parent = parent
        self.__left = None
        self.__right = None


    # getters
    def get_value(self):
        return self.__value


    def get_left(self):
        return self.__left


    def get_right(self):
        return self.__right


    # setters
    def set_parent(self, parent):
        self.__parent = parent


    def set_left(self, left):
        self.__left = left


    def set_right(self, right):
        self.__right = right

    def set_value(self, value):
        self.__value = value


    # methods
    def insert(self, tree):
        if tree.get_value() < self.get_value():
            if self.get_left() is None:
                tree.set_parent(self)
                self.set_left(tree)
            else:
                self.get_left().insert(tree)
        elif tree.get_value() > self.get_value():
            if self.get_right() is None:
                tree.set_parent(self)
                self.set_right(tree)
            else:
                self.get_right().insert(tree)


    def print(self, order=False):
        if order:
            if self.get_right() is not None:
                self.get_right().print(order)
            print(self.get_value())
            if self.get_left() is not None:
                self.get_left().print(order)
        else:
            if self.get_left() is not None:
                self.get_left().print(order)
            print(self.get_value())
            if self.get_right() is not None:
                self.get_right().print(order)


    def search(self, value):
        if self.get_value() == value:
            return self

        if self.get_left() is not None and value < self.get_value():
            return self.get_left().search(value)
        elif self.get_right() is not None and value > self.get_value():
            return self.get_right().search(value)

        return None


    def min(self):
        if self.get_left() is not None:
            return self.get_left().min()
        return self


    def max(self):
        if self.get_right() is not None:
            return self.get_right().max()
        return self


    def delete(self, value):
        if self is None:
            return None
        if value < self.get_value() and self.get_left() is not None:
            self.set_left(self.get_left().delete(value))
        elif value > self.get_value() and self.get_right() is not None:
            self.set_right(self.get_right().delete(value))
        else:
            # case 1: no child
            if self.get_left() is None and self.get_right() is None:
                self = None
            elif self.get_left() is None: # case 2: one child
                temp = self
                self = self.get_right()
                temp = None
            elif self.get_right() is None:
                temp = self
                self = self.get_left()
                temp = None
            else: # case 3: 2 children
                print('i am here')
                min_node = self.get_right().min()
                self.set_value(min_node.get_value())
                print('right', self.get_right().get_value())
                temp = self.get_right().delete(min_node.get_value())
                print('test this', temp)
                self.set_right(temp)
        return self

