---
icon: TiArticle
---
## cd
You can use `cd` without parameters to display the current drive and directory. It is the equivalent of asking the system, where am I?

```shell-session
C:\Users\strategos>cd
C:\Users\strategos
```

You can also change to any directory by using the command `cd target_directory`; this is equivalent to double-clicking the `target_directory` on your desktop.

```shell-session
C:\>cd
C:\

C:\>cd Users

C:\Users>cd 
C:\Users 
```
## dir
You can view the child directories using `dir`.

```shell-session
C:\Users\strategos>dir 
 Volume in drive C has no label. 
 Volume Serial Number is A8A4-C362

 Directory of C:\Users\strategos

05/01/2024  02:40 PM    <DIR>          .
05/01/2024  02:40 PM    <DIR>          ..
11/14/2018  06:56 AM    <DIR>          Desktop
05/01/2024  02:40 PM    <DIR>          Documents
09/15/2018  07:19 AM    <DIR>          Downloads
```

Note that you can use the following options with `dir`:

- `dir /a` - Displays hidden and system files as well.
- `dir /s` - Displays files in the current directory and all subdirectories.

## tree
You can type `tree` to visually represent the child directories and subdirectories.

```shell-session
C:\Users\strategos>tree
Folder PATH listing
Volume serial number is A8A4-C362
C:.
├───Desktop
├───Documents
├───Downloads
```

## mkdir
To create a directory, use `mkdir directory_name`; `mkdir` stands for _make directory_.

```shell-session
C:\example>mkdir backup_files

strategos@WIN-SRV-2019 C:\example>dir
 Directory of C:\example

05/02/2024  07:36 AM    <DIR>          .
05/02/2024  07:36 AM    <DIR>          ..
05/02/2024  07:36 AM    <DIR>          backup_files
               0 File(s)              0 bytes
               3 Dir(s)  14,984,724,480 bytes free
```

## rmdir
To delete a directory, use `rmdir directory_name`; `rmdir` stands for _remove directory_.

```shell-session
C:\example>rmdir backup_files

C:\example>dir 
 Directory of C:\example

05/02/2024  07:36 AM    <DIR>          .
05/02/2024  07:36 AM    <DIR>          ..
               0 File(s)              0 bytes
               2 Dir(s)  14,984,724,480 bytes free
```

