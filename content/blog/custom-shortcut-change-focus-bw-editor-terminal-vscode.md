---
title: "Custom Shortcut to change focus between VS Code editor and terminal"
description: "I created a custom shortcut to change focus between the editor and terminal in vscode as there is no default way to do that."
date: 2024-04-20
tags: ["vscode", "notes"]
---
There is no official shortcut assigned in VS code to change the focus between the terminal and the editor, but thanks to the customization options in VS Code you can create a shortcut of your own.

### Recollect

Make sure the shortcut which you're assigning is not being used by VS Code natively or by any external extensions you have installed. Overwriting of pre-assigned or native shortcuts might lead to breaking the combination.

### Procedure

- In VS Code go to `File` > `Preferences` > `Keyboard Shortcuts`
- From the top right corner select `Open Keyboard Shortcuts (JSON)` option

- In the keybindings.json file paste the following code inside the square brackets [ ] :

```json
 {
         "key": "ctrl+k",
         "command": "workbench.action.terminal.focus"
     },
     {
         "key": "ctrl+k",
         "command": "workbench.action.focusActiveEditorGroup",
         "when": "terminalFocus"
 },
```

- If you have not assigned any custom keybindings before, your final code should look something like this:

```json
     [
         {
             "key": "ctrl+k",
             "command": "workbench.action.terminal.focus"
         },
         {
             "key": "ctrl+k",
             "command": "workbench.action.focusActiveEditorGroup",
             "when": "terminalFocus"
         },
     ]
```

- Since `ctrl+k` is generally not a pre-assigned shortcut in VS Code so that's what I am going for, you may assign any key combination of your choice.
- Done !

You can now finally use the key combination assigned (here `ctrl+k`) to change focus between your terminal and your editor or even open a new terminal in case one is not already opened in VS Code.