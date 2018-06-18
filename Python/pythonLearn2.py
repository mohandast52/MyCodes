
# ---------------------------------about imports-----------------------------

import sys
# importing function and variable
from pythonLearn1 import pythonLearn1Function as fi, testVariable
fi('called from pythonLearn2')
print(testVariable)

# from where the python checks for import? Ans : below
print(sys.path) # return all the path


# ---------------------------------about functions----------------------------


def hello_func1():
    pass  # empty function should have 'pass' so it not throws error


print(hello_func1)  # tells that this is function and its memory location
print(hello_func1())  # empty function prints None

# function with default value in argument


def hello_func2(greeting, name="Das"):
    return "{}, {}".format(greeting, name)


# passed only one argument and function takes the default value of 'name'
print(hello_func2('Hi'))

# passing the second argument too
print(hello_func2('Good Morning', 'Linux-Man'))

# ---------------------------------*args and **kwargs---------------------------
print("--------------- *args and **kwargs -------------")

# if i dont know number of arguments to passed, we use *args


def argsExample(*args):
    for eachItemInArgs in args:
        print(eachItemInArgs)


argsExample('apple', 'banana', 'grapes')  # arbitary number of arguments passed

# Similarly, **kwargs allows you to handle named arguments ie. each args have names and values


def kwargsEg(**kwargs):
    for itemName, itemValue in kwargs.items():
        print("name : {}, value : {}".format(itemName, itemValue))


kwargsEg(apple='fruit', vegetable='carrot',
         junkFood='wafers')  # ike passing dictionries
