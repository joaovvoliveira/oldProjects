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


def removeHomework(task):
    global listHomework
    listHomework = [t for t in listHomework if t[0] != task]

    # for t in listHomework:
    #     if t[0] == task:
    #         listHomework.remove(t)


removeHomework('Mop Floor')
print('--------')
print(listHomework)

# listHomework = [(t[0], 'Completed')
#                     if t[0] == task
#                     else t
#                     for t in listHomework


completeHomework('Mop Floor')
showHomework()
# (t[0], 'Completed')
#                     if t[0] == task
#                     else t
#                     for t in listHomework]
print('')


def getTasks(task):
    listTask = [t for t in listHomework if t[0].lower() == task.lower()]
    if listTask:
        for title, status in listTask:
            print(f'Found: {title}, status: {status}')
    else:
        print(f'Task not found: {task}')


"""1 way"""
# for t in listHomework:
#     if t[0] == tarefa:
#         print(f'Tarefa encontrada: {t[0]} - Status: {t[1]}')
# print(f'Nao achei {tarefa}')

"""Other way"""
# listPending = [(t[0], t[1]) for t in listHomework if t[1] == status]
# print(listPending)


getTasks('Wash the dishes')


# newlist = [n * 2 for n in list if n > 4]
# listn = [n for n in test if n < 1400]
# test = [ n for n in range(1,2456) if n % 3 ==0]
# [ (n,n*3) for n in range(1,11)]
# list3 = [n.lower() for n in lista2]
