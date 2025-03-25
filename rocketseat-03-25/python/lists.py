import os
listHomework = [('Wash the dishes', 'Pending'), ('Mop Floor', 'Pending')]


def pendingHomework(task):
    newTask = (task, 'Pending')
    listHomework.append(newTask)


def showHomework():
    if not listHomework:
        print('No tasks to do')
    for index in listHomework:
        print(f'Task: {index[0]} - Status: {index[1]}')


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

# listHomework = [(t[0], 'Completed')
#                     if t[0] == task
#                     else t
#                     for t in listHomework


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

# newlist = [n * 2 for n in list if n > 4]
# listn = [n for n in test if n < 1400]
# test = [ n for n in range(1,2456) if n % 3 ==0]
# [ (n,n*3) for n in range(1,11)]
# list3 = [n.lower() for n in lista2]


while True:
    os.system('clear | cls')

    print('Task Management')
    print()
    print('What u want to do ?')
    print()
    print('1 - get tasks list')
    print('2 - Add task')
    print('3 - Remove task')
    print('4 - Mark as it done')
    print('5 - find task')
    print('0 - exit')
    option = int(input('Type your option: '))

    match option:
        case 1:
            showHomework()
        case 2:
            task = input('Type your task: ')
            pendingHomework(task)
        case 3:
            task = input('Which task u want to remove: ')
            removeHomework(task)
        case 4:
            task = input('Which task u want to complete: ')
            completeHomework(task)
        case 5:
            task = input('Which task u want to find: ')
            getTasks(task)
        case 0:
            break
        case _:
            print('Wrong Option')
    print()
    input('Press something to continue...')
    os.system('clear')
