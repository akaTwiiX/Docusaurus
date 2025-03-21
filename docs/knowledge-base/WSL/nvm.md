---
sidebar_label: NVM
title: Node Version Manager
sidebar_position: 2
---

## Installation

Install **nvm**

install with **curl**:

    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
    ```

alternative with **wget**:

    ```bash
    wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
    ```

refresh the shell

    ```bash
    source ~/.bashrc
    ```

or using **zsh**:

    ```bash
    source ~/.zshrc
    ```

## Using NVM

check version:

    ```bash
    nvm --version
    ```

install newest node version:

    ```bash
    nvm install node
    ```

install specified version:

    ```bash
    nvm install 18.19.0
    ```

activate version:

    ```bash
    nvm use 20 # for node version 20.x.x
    ```
