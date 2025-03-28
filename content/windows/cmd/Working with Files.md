---
icon: TiArticle
---
## type
You can easily view text files with the command `type`.
```shell-session
C:\example>type flag.txt

THM{CLI_POWER}
```

## copy
The `copy` command allows you to copy files from one location to another.

```shell-session
C:\example>copy test.txt test2.txt
        1 file(s) copied.
```
## move
Similarly, you can move files using the `move` command.

```shell-session
C:\example>move test2.txt .. 
        1 file(s) moved. 
```
## del & erase
Finally, we can delete a file using `del` or `erase`.

```shell-session
C:\example>dir
 Directory of C:\example

05/02/2024  08:16 AM    <DIR>          .
05/02/2024  08:16 AM    <DIR>          ..
05/02/2024  07:57 AM                17 test.txt
05/02/2024  07:57 AM                17 test2.txt
               2 File(s)             34 bytes
               2 Dir(s)  14,983,409,664 bytes free

C:\example>erase test2.txt

C:\example>dir 
 Directory of C:\example

05/02/2024  08:16 AM    <DIR>          .
05/02/2024  08:16 AM    <DIR>          ..
05/02/2024  07:57 AM                17 test.txt
               1 File(s)             17 bytes
               2 Dir(s)  14,983,409,664 bytes free
```