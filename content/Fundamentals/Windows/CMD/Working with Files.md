In Command Prompt (CMD), working with files is an essential part of managing your system. You can perform tasks such as viewing, copying, moving, renaming, and deleting files. Below are the most commonly used commands for file management in CMD, along with their practical uses.

## Viewing Files with `type`

The `type` command is used to display the contents of a file in the command prompt window. This is useful for quickly checking the contents of text files without opening a dedicated text editor.

To display the contents of a file:

```cmd
type filename.txt
```

If the file is large, the text will scroll rapidly. To view the file page by page, use the `more` command in combination with `type`:

```cmd
type filename.txt | more
```

## Copying Files with `copy`

The `copy` command is used to copy files from one location to another. You can specify a file or group of files to copy, as well as the destination directory.

To copy a single file to a different directory:

```cmd
copy source.txt D:\Backup\source.txt
```

To copy multiple files:

```cmd
copy *.txt D:\Backup\
```

You can also use the `/y` switch to suppress the confirmation prompt when overwriting an existing file:

```cmd
copy /y source.txt D:\Backup\source.txt
```

## Moving Files with `move`

The `move` command is used to move or rename files. This is useful when you want to change the file's location or name without making a copy.

To move a file to a different directory:

```cmd
move source.txt D:\Backup\
```

To rename a file:

```cmd
move oldname.txt newname.txt
```

If the file is being moved and renamed, the same syntax applies:

```cmd
move source.txt D:\Backup\newname.txt
```

## Renaming Files with `ren`

The `ren` (rename) command is used specifically for renaming files within a directory. It allows you to change the name of a file, but not its location.

To rename a file:

```cmd
ren oldname.txt newname.txt
```

If you want to rename multiple files with a pattern (e.g., changing extensions), you can use wildcards:

```cmd
ren *.txt *.bak
```

This will rename all `.txt` files to `.bak` in the current directory.

## Deleting Files with `del`

The `del` command is used to delete files from the system. This is a permanent operation, and deleted files cannot be recovered unless a backup exists.

To delete a specific file:

```cmd
del filename.txt
```

To delete all files in a directory:

```cmd
del *.*
```

Be cautious when using this command as it will delete all files in the current directory.

To delete multiple files based on a pattern, you can use wildcards:

```cmd
del *.txt
```

To confirm each deletion, you can use the `/p` switch:

```cmd
del /p filename.txt
```

## Deleting Files with `erase`

The `erase` command is synonymous with `del` and works the same way. It is simply another option for file deletion.

To delete a file:

```cmd
erase filename.txt
```

## Viewing and Editing File Properties with `attrib`

The `attrib` command is used to view and modify file attributes, such as making files read-only, hidden, or system files.

To view file attributes:

```cmd
attrib filename.txt
```

To make a file read-only:

```cmd
attrib +r filename.txt
```

To remove the read-only attribute:

```cmd
attrib -r filename.txt
```

To make a file hidden:

```cmd
attrib +h filename.txt
```

## Searching for Text in Files with `find`

The `find` command allows you to search for specific text or strings within files. This is helpful when you need to locate a particular term in a large file or set of files.

To search for a string in a file:

```cmd
find "search_string" filename.txt
```

To search for a string in all `.txt` files in a directory:

```cmd
find "search_string" *.txt
```

## Compressing Files with `compact`

The `compact` command is used to compress files and directories in NTFS file systems. This can save disk space, especially for large files.

To compress a file:

```cmd
compact /c filename.txt
```

To uncompress a file:

```cmd
compact /u filename.txt
```

To compress all files in a directory:

```cmd
compact /c /s:directory_path
```