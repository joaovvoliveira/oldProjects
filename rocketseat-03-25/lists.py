homeworkPending = []
homeworkComplete = []


def newHomework(toDo):
    homeworkToDo = (toDo, "pending")
    homeworkPending.append(homeworkToDo)


newHomework('Lavar a louca')
newHomework('Lavar a roupa')
newHomework('Lavar o chao')


def showHomework():
    for item in homeworkPending:
        print(f'{item[0]} - status: {item[1]}')


def completeHomework(task):
    for item in homeworkPending:
        if item[0] == task:
            homeworkComplete.append((task, 'Concluida'))
            homeworkPending.remove(item)
            break
        else:
            homeworkComplete.append(t)
        # if item[0] == task:
        #     homework[1] = 'Completed'
    print(homeworkComplete)
    print(homeworkPending)


completeHomework('Lavar a louca')
