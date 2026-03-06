---
title: "Install or update Node JS using apt on Debian based Linux distro"
description: "So I had issues issues in keeping Node JS updated to the required latest version of the software on my Debian based linux machine (Ubuntu). I figured this way out for installation and updating as this way is way easir to maintain i.e. to downgrade or upgade the node versions as and when needed."
date: 2025-02-10
tags: ["nodejs", "issue", "notes"]
---

Using `apt` is the easiest way to install Node JS on any Debian based linux, the only issue being the packages on apt are mostly outdated. In this tutorial we will install Node JS using apt and also update it to match the latest available version.

## Installation

Open terminal and execute the following commands:

- Installing Node JS

```bash
sudo apt install nodejs
```

- Checking Node version

```bash
node -v
```

- Installing npm for package management

```bash
sudo apt install npm
```

Node has been installed but as discussed the Node version will most probably be outdated like version `18.0` or any version around that, while at time of writing the latest version is `v22.13.1`. Let's update it to the latest version now.

## Updating

Open terminal and run the following commands:

- Cleaning any cache with -f force param

```bash
sudo npm cache clean -f
```

- Installing the n package globally to manage the Node version. The n package is used to switch between different version of Node.

```bash
sudo npm install -g n
```

- Using n tool to install the stable version of Node.

```bash
sudo n stable
```

- You can also install the latest version of Node instead of the stable version by using the latestparam instead of stable.

```bash
sudo n latest
```

Restart the shell and check the Node version again, now you should have the stable or the latest version depending upon the path you took.