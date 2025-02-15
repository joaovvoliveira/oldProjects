1.	Initialize a Git repository in the project

git init
Description: Creates a Git repository in the current folder. This command is the starting point for versioning a project.
	2.	Configure your username and email

git config –global user.name “João Victor”
git config –global user.email “jvictor_oliveira@outlook.com.br”
Description: Sets your credentials to identify who is making the changes.
	3.	Add files to version control

git add .
Description: Adds all project files to the index (staging area) to be versioned. Use git add file_name to add only a specific file.
	4.	Create a checkpoint (commit)

git commit -m “Descriptive commit message”
Description: Saves changes to the repository history. The message should clearly describe what was changed.
	5.	Check the repository status

git status
Description: Displays information about modified, untracked, or staged files.
	6.	Link the local repository to GitHub

git remote add origin https://github.com/your-username/repository-name.git
Description: Connects your local repository to the remote repository on GitHub.
	7.	Push commits to GitHub

git push -u origin main
Description: Sends commits to the main branch (main) on GitHub. The first time you use it, -u links the local branch to the remote one.
	8.	Clone an existing GitHub repository

git clone https://github.com/your-username/repository-name.git
Description: Downloads a remote repository to your local machine.
	9.	View commit history

git log
Description: Shows a list of commit history, including the author, date, and message.
	10.	Update the local repository with remote changes

git pull
Description: Fetches and applies changes from the remote repository to the local repository.
	11.	Remove a file from version control (without deleting it locally)

git rm –cached file_name
Description: Removes the file from version control but keeps it in your local folder.
	12.	View differences between changes

git diff
Description: Displays differences between modified files and the latest committed version.
	13.	List existing branches

git branch
Description: Lists all branches in the repository. The current branch is highlighted with an asterisk *.
	14.	Create a new branch

git branch branch-name
Description: Creates a new branch to work on isolated changes.
	15.	Switch to another branch

git checkout branch-name
Description: Switches to the specified branch.
	16.	Merge a branch into the current branch

git merge branch-name
Description: Combines changes from another branch into the current branch.
	17.	Revert local changes

git checkout – file_name
Description: Discards local changes to a file, restoring it to the last committed state.
	18.	Delete a branch

git branch -d branch-name
Description: Deletes a branch that has already been merged into the main branch.
	19.	Delete a file and mark the deletion for the next commit

git rm file_name
Description: Removes a file from the directory and marks it for deletion in the next commit.
	20.	Reset the repository to a previous commit

git reset –hard commit-ID
Description: Resets the repository to the state of a specific commit. Warning: this can cause loss of changes!

—————— Alura Alura

git init -> Initializes an empty repository on your computer.

git branch -M main -> Creates a branch for the repository.

git remote add NAME URL_ORIGIN -> Connects your repository to the GitHub repository.

git status -> Checks changes that haven’t been committed.

git add . -> . selects all files in the folder.

git commit -m “TEXT”

git push origin main -> Pushes the file to GitHub.

git pull origin main -> Pulls the updated file from GitHub to your machine.

git checkout BRANCH -> Switches between branches.

git tag -a v1.0 -m “Version 1.0” -> Creates a tag for the current version.

git push origin v1.0 -> Pushes the tag to GitHub.