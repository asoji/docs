---
title: Yiski's Configuration
---

# Yiski's Configuration
This file is Yiski's own configuration, needs for parts of Yiski to operate.

To use it, cope the `config.example.toml` in your cloned Yiski folder, and rename it to `config.toml`

## Config
```toml title="config.example.toml"
[universal]
githubToken = ""
botPrefix = "yk!"

[revolt]
botToken = ""
ownerRoleName = ""
ventChannelID = ""

[discord]
botToken = ""
ownerRoleID = ""
ventChannelID = ""

[images]
    [images.static]
    devtools = "assets/images/devtoolsconfig.png"
    ims = "assets/images/dreadfulims.png"
    token = "assets/images/token.png"
```

## Explaining each part of the config

- `[universal]` - You can use it on the Revolt and Discord side of the bot at the same time
    - `githubToken` - Used for the `ghr` command, this would be your GitHub PAT, and the bot can see repos that you can see.
    - `botPrefix` - The prefix required to run a command. Default is `yk!`


- `[revolt]` - Revolt side only
    - `botToken` - The Bot Token for your bot on Revolt, you can find it in Settings -> My Bots -> Clipboard
    - `ownerRoleName` - The name of your Owner Role, or whichever role you want to use to manage the bot. This is Case Sensitive.
    - `ventChannelID` - The ID of your Vent Channel to be wiped every night


- `[discord]` - Discord side only
    - `botToken` - The Bot Token for your bot on Discord, which you can find by going to https://discord.dev -> Sign In, Click on your App, Click on Bot -> Copy [or create a Bot User and then Copy]
    - `ownerRoleID` - The ID of your Owner Role, or whichever role you want to use to manage the bot. Click on a user -> right click on one of their roles in the profile popup -> Copy ID
    - `ventChannelID` - The ID of your Vent Channel to be wiped every night


- `[images]` - Images for the bot to use, also Universal technically
    - `[images.static]` - Static images to use. Animated images/GIFs were planned to be used at one point but kind of fell apart.
    - `devtools` - Image used for the `devtools` command on the Discord side of the bot, shows what your configuration should look like
    - `ims` - IMS is a brat.
    - `token` - Used for the `token` command to make fun of token leaking