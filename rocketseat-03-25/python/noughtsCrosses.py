board2 = [[' ' for _ in range(0, 3)] for _ in range(3)]

board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
]

soma = 0
for num in range(1, 5):
    soma += num

print(soma)

player = 'X'


def showBoard():
    for line in board:
        print('|'.join(line))


def play(line, column):
    if (
        not 0 <= line <= 2 or
        not 0 <= column <= 2 or
        board[line][column] != ' '
    ):
        print('Wrong try')
        return player

    board[line][column] = player
    return 'O' if player == 'X' else 'X'
    # if player == 'X':
    #     return 'O'
    # else:
    #     return 'X'


def victory():
    """ Check lines """
    for line in range(3):
        if (
            board[line][0] != ' ' and
            board[line][0] == board[line][1] and
            board[line][0] == board[line][2]
        ):
            print(f'{board[line][0]} won !!')
            return True

    """ Check Columns"""
    for column in range(3):
        if (
            board[0][column] != ' ' and
            board[0][column] == board[1][column] and
            board[0][column] == board[2][column]
        ):
            print(f'{board[0][column]} woN !!')
            return True

    """Check others"""
    if (
        (
            board[1][1] != ' ' and
            board[0][0] == board[1][1] and
            board[0][0] == board[2][2]) or
        (
            board[1][1] != ' ' and
            board[0][2] == board[1][1] and
            board[0][2] == board[2][0]
        )
    ):
        print(f'{board[1][1]} WON !!')
        return True

    """If theres no winner"""
    return False


def draw():
    for line in range(3):
        for column in range(3):
            if board[line][column] == ' ':
                return False
    print('DRAW !!')
    return True


while True:
    print(f'Jogador da vez {player}')
    try:
        line = int(input('Digite a linha: '))
        column = int(input('Digite a Coluna: '))
        player = play(line, column)
    except ValueError:
        print('Wrong Value. Has to be between 0-2 !')
    except IndexError:
        print('Only numbers between 0-2')
    showBoard()
    if victory() or draw():
        break
