---
sidebar_label: Lifecycle in Git
title: Lifecycle in Git
---

Here’s a brief Git lifecycle for **clone**, **commit**, and **push**:

- **git init**: Initializes a new Git repository in your project folder.

  ```bash
  git init
  ```

- **git clone**: Copy an existing remote repository to your local machine.

  ```bash
  git clone https://github.com/username/repository.git
  ```

- **git add**: Adds changes to the staging area before committing.

  ```bash
  git add <file-name>  # Adds a specific file

  git add .            # Adds all files
  ```

- **git commit**: Saves changes to the repository with a descriptive message.

  ```bash
  git commit -m "Commit message"
  ```

- **git push**: Send your committed changes from the local repository to the remote repository.

  ```bash
  git push origin main
  ```

  This process repeats as you make more changes and synchronize with the remote repository.

- **git pull**: Fetches and merges changes from the remote repository into your local repository.

  ```bash
  git pull origin main
  ```

- **git push**: Displays the status of your working directory, including untracked or modified files.

  ```bash
  git status
  ```
