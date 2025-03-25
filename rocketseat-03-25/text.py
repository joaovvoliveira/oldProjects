frase = ' This is a example of something created on a spot '

print(f'First Letter: {frase.strip()[0]}')
print(f'Last Letter: {frase.strip()[-1]}')
print(f'Lenght: {len(frase.strip())}')

print()

print(f'Maiuscula: {frase.upper()}')
print(f'Maiuscula: {frase.lower()}')

print()
"""Split by default by space, or by parameter """
print(f'Fatiando: {frase.split()}')

print()
"""get the first occurrence of the parameter"""
print(f'Find: {frase.find(' is ')}')

"""Remove empty spaces at the beginning"""
print(f'Fatiando: {frase.strip()}')


def textAnalysis(text):
    words = text.split()
    qtd_palavras = len(words)
    qtd_letters = len(text)
    qtd_letter_no_space = qtd_letters - text.count(' ')
    print(words)
    return qtd_palavras, qtd_letters, qtd_letter_no_space


numP, numC, numCSE = textAnalysis(frase)

print(f'{numP} - {numC} - {numCSE}')
print(2 ** 3)
