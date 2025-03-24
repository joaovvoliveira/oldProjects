listHomework = [('Wash the dishes', 'Pending'), ('Mop Floor', 'Pending')]


def pendingHomework(task):
    newTask = (task, 'Pending')
    listHomework.append(newTask)


def showHomework():
    for index in listHomework:
        print(f'Task: {index[0]} - Status: {index[1]}')


pendingHomework('Clear Bathroom')
showHomework()

print('Getting it done...')

# newlist = [n * 2 for n in list if n > 4]

# listn = [n for n in test if n < 1400]
# test = [ n for n in range(1,2456) if n % 3 ==0]
# [ (n,n*3) for n in range(1,11)]
# list3 = [n.lower() for n in lista2]


def completeHomework(task):
    global listHomework
    listHomework = [(t[0], 'Completed')
                    if t[0] == task
                    else t
                    for t in listHomework]

    """Option for the line above"""
    # newList = []
    # for t in listHomework:
    #     newList.append(t if t[0] != task else (task, 'Completed'))
    # listHomework = newList

    """Other Option ver the same code"""
    #     if t[0] == task:
    #         newList.append((task, 'Completed'))
    #         print(newList)
    #     else:
    #         newList.append(t)


completeHomework('Mop Floor')
showHomework()

# homeworkPending = []
# homeworkComplete = []


# def newHomework(toDo):
#     homeworkToDo = (toDo, "pending")
#     homeworkPending.append(homeworkToDo)


# newHomework('Lavar a louca')
# newHomework('Lavar a roupa')
# newHomework('Lavar o chao')


# def showHomework():
#     for item in homeworkPending:
#         print(f'{item[0]} - status: {item[1]}')


# def completeHomework(task):
#     global homeworkPending
#     task = [(t[0], 'Completed') if t[0] for t in task in t[0] == task else t)]
#     for item in homeworkPending:
#         # homeworkComplete.append(
#         #     item if item[0] == task else (task, 'Concluida'))

#         # if item[0] == task:
#         #     homeworkComplete.append((task, 'Concluida'))
#         #     homeworkPending.remove(item)
#         #     break
#         # if item[0] == task:
#         #     homework[1] = 'Completed'
#     print(homeworkComplete)
#     print(homeworkPending)


# completeHomework('Lavar a louca')

# list = [1, 6, 4, 3, 7]
# newlist = [n * 2 for n in list if n > 4]
# print(newlist)
