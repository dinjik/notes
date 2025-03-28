---
icon: TiArticle
---
**Piping** is a technique used in command-line environments that allows the output of one command to be used as the input for another.

For example, if you want to get a list of files in a directory and then sort them by size, you could use the following command in PowerShell:

```powershell
PS C:\Users\captain\Documents\captain-cabin> Get-ChildItem | Sort-Object Length
```
