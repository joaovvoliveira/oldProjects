lista = {
    'valor': 5,
    'proximo': None
}


def showList(lista):
    if not lista:
        print('Empty list')
        return
    elemento = lista

    while elemento != None:
        print(f'{elemento['valor']} -', end=' ')
        elemento = elemento['proximo']
    print('.')


def addEnd(element):
    global lista
    if not lista:
        lista = {'valor': element, 'proximo': None}
        return
    atual = lista
    while atual['proximo']:
        atual = atual['proximo']
    atual['proximo'] = {'valor': element, 'proximo': None}


showList(lista)
print(lista)
addEnd(7)
addEnd(9)
addEnd(11)
showList(lista)
print(lista)
# from collections import deque

# """Deque is used to make sure the itens will be removed from the beginning or the end only"""
# """append - popleft - popright"""


# def createLine():
#     return deque()


# list = [1, 2, 3, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]
# def createLine():
#     return []
# def putIntoLine(line, element):
#     line.append(element)
# def removeFromLine(line):
#     return line.pop(0)
# def searchLine(line, element):
#     for i in line:
#         if i == element:
#             print(f'IS HERE: {i}')
#             return
#     print('That number is not there')
# line1 = createLine()
# print(line1)
# putIntoLine(line1, 523)
# putIntoLine(line1, 824)
# putIntoLine(line1, 564)
# putIntoLine(line1, 234)
# putIntoLine(line1, 864)
# putIntoLine(line1, 426)
# print(line1)
# print(f'Removendo... {line1}')
# removeFromLine(line1)
# removeFromLine(line1)
# print(f'Removendo... {line1}')
# print('--')
# searchLine(line1, 8641)
# print('--')
# # list.append(2)
# # print(list)
# # list.pop()
# # list.append(5)
# # list.pop(1)
# # print(list)
