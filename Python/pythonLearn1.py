def learning():
    messageSwag = 'Mohan Das\'s Python'
    print(messageSwag[5:len(messageSwag)])
    print(messageSwag.find('Das\'s'))
    messageSwag = '{} , {}, {}. Weclome!'.format('yes', 'no', 'swag')
    # print(dir(messageSwag))
    # print(help(str))


    # integer and float
    print("--------------- Calculations -------------")
    num = 3
    print(type(num))  # what type is number 3?
    print(3 ** 3)  # 3 raised to 3
    print(abs(-3))
    print(round(3.77333, 3))  # round upto 3 decimals

    num_1 = '100'
    num_2 = '200'
    print(num_1 + num_2)
    num_1 = int(num_1)
    num_2 = int(num_2)
    print(num_1 + num_2)

    # join function
    s = "-"
    seq = ("a", "b", "c")  # This is sequence of strings.
    print s.join(seq)
    # output : a-b-c

    # for loop
    print("--------------- For Loop -------------")
    for _ in range(1, 10, 2):  # from 1 to 2 with incremention value 2
        print(_)

    # 'is' in if
    # 'is' is used to check if both objects id is same
    print("--------------- `is`in IF -------------")
    isList1 = [1, 2, 3]
    isList2 = [1, 2, 3]
    print(isList1 == isList2) # true because the contents are same
    print(isList1 is isList2) # False : because both are 2 different list

    isList2 = isList1
    print("id1 : {},\nid2 : {}".format(id(isList1), id(isList2)))
    print(isList1 is isList2) # it will be 'True' because both have same object

    # list
    print("--------------- LIST -------------")
    courses = ['History', 'Math', 'Physics']
    print(courses)
    print(" " + str(len(courses)))
    print(courses[len(courses) - 1])
    print(courses[-1])
    print(courses[0: 2])

    courses.append('Comp Sci')  # append at last
    courses.insert(0, 'Art')  # insert at index 0
    print(courses[1:])  # from index 1  to last
    # used to add many list items at a time or other list
    courses.extend(['A1', 'A2', 'A3'])
    courses.pop()  # removes and returns the last item
    courses.reverse()  # reverses
    print(courses)
    courses.sort()  # ascending order sort (sorts original list i.e in-place sort)
    courses.sort(reverse=True)  # descending order sort
    coursesTemp = sorted(courses)  # does NOT sorts the original list
    print(courses)

    print(courses.index('Art'))  # return index of Art
    print('Art' in courses)  # true or false

    for index, eachCourse in enumerate(courses, start=1):
        # enumerate return index as well as item, start = 1 means start the index count from 1, default is 0
        print(index, eachCourse)

    courseString = ', '.join(courses)  # comma seperated values in a string format
    print(courseString)

    # LISTS ARE mutuable and TUPLE are not!!
    coursesTuple = ('History', 'Math', 'Physics')  # round brackets used here
    # coursesTuple[0] = 'Art' #TypeError: 'tuple' object does not support item assignment (this error will be thrown)
    print(coursesTuple)

    print("--------------- SETS -------------")
    # SETS : unorder and non duplicated
    coursesSets = {'History', 'Math', 'Physics', 'Math', 'Math'}
    print(coursesSets)  # prints in random order without duplication

    coursesSets_1 = {'History', 'Math', 'Physics'}
    coursesSets_2 = {'History', 'Math', 'Design'}

    # prints common items in both the sets
    print(coursesSets_1.intersection(coursesSets_2))

    # prints different items in both the sets
    print(coursesSets_1.difference(coursesSets_2))

    # combines items in both the sets
    print(coursesSets_1.union(coursesSets_2))


    # list comprehensions
    print("--------- list comprehensions ---------")

    numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    # using normal loop (getting square of a number in a list)
    squareList = []
    for eachNum in numberList:
        squareList.append(eachNum * eachNum)
    print("Normal Loop {}".format(squareList))

    # https://pyformat.info/ # all about formatting

    # using list comprehension
    squareList = []
    squareList = [n * n for n in numberList]
    print("comprehension {}".format(squareList))

    # get only even number in the list
    evenNumberList = [n for n in numberList if n % 2 == 0]
    print(evenNumberList)

    # get pair for each letter in 'abcd' and each number in '0123'
    letterList = []
    for eachLetter in 'abcd':
        for eachNumber in range(4):
            letterList.append((eachLetter, eachNumber))
    # print(letterList)

    # above question using comprehension
    letterList = []
    letterList = [(eachLetter, num)
                for eachLetter in 'abcd' for eachNumber in range(4)]
    # print(letterList)

    print("--------------- DICTIONARIES -------------")
    # dictioaries (HASHMAP, HASHTABLE), can be of different objects
    student = {'name': 'Mohan', 'age': 25, 'courses': ['Math, Stats']}
    print(student['name'])  # return name

    # if doesnt exists return 2nd arguement
    print(student.get('doesNotExist', 'Not Found yaar'))
    student['name'] = 'DAS'

    # to change many things at a time
    student.update({
        'name': 'MOHAN das',
        'address': 'Mumbai',
        'phone': '555-555555'
    })

    del student['phone']  # deletes phone
    phoneNumber = student.pop('address')  # removes 'address' key from student
    print(student)  # prints everything

    for key, values in student.items():  # to iterate throught all key and values
        print("KEY : {}, VALUES : {} ".format(key, values))

# import only function example
def pythonLearn1Function(argumentPassed):
    print(argumentPassed)

testVariable = 'MOHAN from pythonLearn1'


# learning() # uncomment to run above examples