import os

perguntas = [['Ele faz pocotó ?', 'Cavalo'],
             ['Ele gosta de Banana ?', 'Macaco']]

print(f'Pense em um animal...')

while True:
    acertou = False
    for pergunta in perguntas:
        resposta = input(f'{pergunta[0]} (s/n)')
        if resposta.lower() == 's':
            print(f'Voce pensou: {pergunta[1]}')
            acertou = True
            break

    if not acertou:
        animal = input('Desisto. Qual animal voce pensou ? ')
        novaPergunta = input('Pergunta para esse animal ? ')
        perguntas.append([novaPergunta, animal])

        novoJogo = input('Deseja brincar novamente ? (s/n)')
        if novoJogo.lower() != 's':
            print('OK')
            break


print(perguntas)


# comando = 1
# soma = 0

# for index in range(1, 11):
#     print(f'valor: {index}')
#     soma = index + soma
#     index = comando + 1
#     print(f'Soma: {soma}')

# soma = sum([i for i in range(1, 11)])
# print(soma)

# x = [1, 2, 3, 4, 5, 6]
# x.pop(2)
# print(x)
# x.append(64)
# print(x)
# x[1] = 29
# print(x)
# x.insert(2, [2, 7, 4])
# print(x)

# notas = [6, 8, 3, 10]
# calculo = 0

# for i in notas:
#     calculo = + i
#     print(calculo)
#     print(calculo/4)

# match comando:
#     case 'oi':
#         print('Oii fdp')
#     case 'tchau':
#         print('tchau tonto')
#     case 'bao':
#         print('bao demais')
#     case _:
#         print('invalido')

# print("Choose one of those cards below: ")
# print('------')

# print("Q♣️ K♦️ J❤️ Q❤️ J♣️ K♠️")
# input()

# os.system('clear')
# print("The card you chose...")
# input()
# print("IS GONE !")

# print("J♠️ Q♦️ J♦️ Q♠️ K❤️")

# print(1*5)
# x = 9
# print(1+x)

# print(type(x))
# print(1+x)

# print(x.is_integer())
