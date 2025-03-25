from heapq import *

fila_prioridade = []

heappush(fila_prioridade, (2, 'Atender Cliente VIP'))
heappush(fila_prioridade, (1, 'Situacao critica'))
heappush(fila_prioridade, (3, 'Cliente normal'))
heappush(fila_prioridade, (1, 'Situacao critica'))

print(fila_prioridade)

while fila_prioridade:
    prioridade, tarefa = heappop(fila_prioridade)
    print(f'{prioridade} - {tarefa}')

print(fila_prioridade)
