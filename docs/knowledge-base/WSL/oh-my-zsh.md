# ZSH OH-MY-ZSH

This is my configuration for the zsh

## Installation

### install zsh

    ```bash
    apt install zsh
    ```

### install the framework oh-my-zsh

| Method    | Command                                                                                           |
| :-------- | :------------------------------------------------------------------------------------------------ |
| **curl**  | `sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"` |
| **wget**  | `sh -c "$(wget -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"`   |
| **fetch** | `sh -c "$(fetch -o - https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"` |

### the plugin `autosuggestions`

    1. install

        ```bash
        git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
        ```

    1. add the plugin in the `.zshrc` file:

        ```bash
        plugins=(git zsh-autosuggestions)
        ```

### the plugin `zsh-syntax-highlighting`

    1. install

        ```bash
        git clone https://github.com/zsh-users/zsh-syntax-highlighting.git $ZSH_CUSTOM/plugins/zsh-syntax-highlighting
        ```

    1. add the plugin in the `.zshrc` file:

        ```bash
        plugins=(git zsh-syntax-highlighting)
        ```

### the theme `powerlevel10k`

    1. install powerlevel10k

        ```bash
        git clone --depth=1 https://github.com/romkatv/powerlevel10k.git $ZSH_CUSTOM/themes/powerlevel10k
        ```

    1. add the theme in the `.zshrc` file:

        ```bash
        ZSH_THEME="powerlevel10k/powerlevel10k"
        ```

### Reload Zsh

    ```bash
    exec zsh
    ```

## Delete oh-my-gosh

    ```sh
    uninstall_oh_my_zsh
    ```
