PowerShell offers powerful cmdlets for managing files and directories. These cmdlets allow users to perform a variety of file system operations, such as listing, creating, removing, and navigating directories and files. Below are some of the most commonly used cmdlets in PowerShell for working with files and directories.

## Get-ChildItem

The `Get-ChildItem` cmdlet lists all files and directories in a specified location. If no path is provided, it defaults to the current directory.

### Example:

```powershell
PS C:\Users\dinjik> Get-ChildItem
```

This command will display all files and directories in the current directory.

### Specify a Path:

You can also specify a particular path to list the contents of a specific directory.

Example:

```powershell
PS C:\Users\dinjik> Get-ChildItem -Path C:\
```

This will display all files and directories in the `C:\` drive.

## Set-Location

To change your current directory, use the `Set-Location` cmdlet (similar to `cd` in Command Prompt).

### Example:

```powershell
PS C:\Users\dinjik> Set-Location -Path ".\Documents"
PS C:\Users\dinjik\Documents>
```

This command navigates to the `Documents` directory from the current directory.

## New-Item

You can create new items, such as files and directories, with the `New-Item` cmdlet. You need to specify the path and item type (e.g., file or directory).

### Create a Directory:

```powershell
PS C:\Users\dinjik\Documents> New-Item -Path ".\dinjik\rack" -ItemType "Directory"
```

This creates a new directory named `rack` inside the `dinjik` folder.

### Create a File:

```powershell
PS C:\Users\dinjik\Documents> New-Item -Path ".\dinjik\rack\boots.txt" -ItemType "File"
```

This creates a new text file named `boots.txt` inside the `rack` directory.

## Remove-Item

The `Remove-Item` cmdlet is used to delete both files and directories. Unlike Command Prompt, where you use separate commands (`rmdir` for directories and `del` for files), `Remove-Item` can handle both types of items.

### Example:

```powershell
PS C:\Users\dinjik\Documents> Remove-Item -Path ".\dinjik\rack\boots.txt"
```

This command deletes the `boots.txt` file from the `rack` directory.

## Copy-Item

Use `Copy-Item` to copy files or directories from one location to another, similar to the `copy` command in Command Prompt.

### Example:

```powershell
PS C:\Users\dinjik\Documents> Copy-Item -Path .\dinjik\dinjik.txt -Destination .\dinjik\dinjik2.txt
```

This command copies the `dinjik.txt` file and names the copy `dinjik2.txt` in the same directory.

## Get-Content

The `Get-Content` cmdlet is used to read the contents of a file. It is similar to the `type` command in Command Prompt or the `cat` command in Unix-like systems.

### Example:

```powershell
PS C:\Users\dinjik\Documents\dinjik> Get-Content -Path ".\dinjik.txt"
```

This will display the content of the `dinjik.txt` file.

Sample output:

```
   _____
  /     \
 /       \
|  O   O  |
|    ^    |
 \_______/

```