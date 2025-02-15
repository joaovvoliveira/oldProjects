1. Inicializar um repositório Git no projeto

git init
Descrição: Cria um repositório Git na pasta atual. Esse comando é o ponto de partida para começar a versionar um projeto.

2. Configurar seu nome de usuário e e-mail

git config --global user.name "João Victor"
git config --global user.email "jvictor_oliveira@outlook.com.br"
Descrição: Configura suas credenciais para identificar quem está fazendo as alterações.

3. Adicionar arquivos ao controle de versão

git add .
Descrição: Adiciona todos os arquivos do projeto ao índice (staging area) para serem versionados. Use git add nome_do_arquivo para adicionar apenas um arquivo específico.

4. Criar um ponto de controle (commit)

git commit -m "Mensagem descritiva do commit"
Descrição: Salva as alterações no histórico do repositório. A mensagem deve descrever claramente o que foi alterado.

5. Verificar o status do repositório

git status
Descrição: Mostra informações sobre os arquivos alterados, não rastreados ou preparados para commit.

6. Associar o repositório local ao GitHub

git remote add origin https://github.com/seu-usuario/nome-repositorio.git
Descrição: Conecta seu repositório local ao repositório remoto no GitHub.

7. Enviar os commits para o GitHub

git push -u origin main
Descrição: Envia os commits para o branch principal (main) no GitHub. A primeira vez que usar, o -u conecta o branch local ao remoto.

8. Clonar um repositório existente do GitHub

git clone https://github.com/seu-usuario/nome-repositorio.git
Descrição: Baixa um repositório remoto para sua máquina local.

9. Ver o histórico de commits

git log
Descrição: Mostra uma lista com o histórico de commits, incluindo o autor, a data e a mensagem.

10. Atualizar o repositório local com alterações do remoto

git pull
Descrição: Baixa e aplica alterações do repositório remoto para o repositório local.

11. Remover um arquivo do controle de versão (sem deletar o arquivo local)

git rm --cached nome_do_arquivo
Descrição: Remove o arquivo do controle de versão, mas o mantém na sua pasta local.

12. Visualizar diferenças entre alterações

git diff
Descrição: Exibe as diferenças entre os arquivos alterados e a versão mais recente do commit.

13. Ver branches existentes

git branch
Descrição: Lista todos os branches (ramos) no repositório. O branch atual é destacado com um asterisco *.

14. Criar um novo branch

git branch nome-do-branch
Descrição: Cria um novo branch para trabalhar em alterações isoladas.

15. Alternar para outro branch

git checkout nome-do-branch
Descrição: Alterna para o branch especificado.

16. Fundir um branch ao branch atual

git merge nome-do-branch
Descrição: Combina as alterações de outro branch ao branch atual.

17. Reverter alterações locais

git checkout -- nome_do_arquivo
Descrição: Desfaz as alterações feitas em um arquivo local, retornando ao último estado commitado.

18. Apagar um branch

git branch -d nome-do-branch
Descrição: Apaga um branch que já foi fundido no branch principal.

19. Excluir um arquivo e marcar a exclusão para o próximo commit

git rm nome_do_arquivo
Descrição: Remove um arquivo do diretório e marca sua exclusão para ser commitada.

20. Redefinir o repositório para um commit anterior

git reset --hard ID_do_commit
Descrição: Redefine o repositório para o estado de um commit específico. Cuidado: pode causar perda de alterações!

------------------ Alura Alura

git init -> Inicia repositorio vazio no seu computador

git branch -M main -> Cria uma branch para o repositorio

git remote add NOME URL_ORIGIN -> Conecta seu repositorio com o repositorio do github

git statuS -> Verifica as alteracoes que nao foram commitadas

git add . -> . seleciona todos os arquivos da pasta

git commit -M "TEXTO"

git push origin main -> Envia o arquivo para o GITHUB

git pull origin main -> Tras o arquivo alterado do Github para sua maquina

git checkout BRANCH -> faz a troca das branchs que voce esta

git tag -a v1.0 -m "Versao 1.0" -> Cria uma tag para a versao atual

git push origin v1.0 -> Envia para o github
