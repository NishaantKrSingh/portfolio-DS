---
title: "Update VS Code in any Debian Based Distro using apt"
description: "So if you have installed VS Code on any debian based linux distro then updating it seems a bit trickey, as beginner you migh get confused on how to actually update it like do you uninstall and install a newer version or you just install it on top of the current version. Here I have solution to the problem as when I was a beginner I had this same issue."
date: 2025-02-05
tags: ["vscode","linux", "notes"]
---

If you have installed VS Code by manually downloading the `.deb` file the chances are the automatic updates are not being installed and you have to update your VS Code manually from the website, but it is possible to update it just via `apt` without downloading and installing the laste version again and again from the website.

### Just do the following -

- Refresh the package list by doing:

```bash
sudo apt update
```

- Install VS Code:

```bash
sudo apt install code
```

__Done!!__ You should now have the latest* version of vscode ready to use.

