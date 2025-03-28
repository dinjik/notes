---
icon: TiArticle
---
`Invoke-Command` is essential for executing commands on remote systems, making it fundamental for system administrators, security engineers and penetration testers. `Invoke-Command` enables efficient remote management and—combining it with scripting—automation of tasks across multiple machines.

## Script Execution with -FilePath
```powershell
PS C:\Users\captain> Get-Help Invoke-Command -examples

NAME
    Invoke-Command
    
SYNOPSIS
    Runs commands on local and remote computers.
    
    ------------- Example 1: Run a script on a server -------------
    
    Invoke-Command -FilePath c:\scripts\test.ps1 -ComputerName Server01
    
    The FilePath parameter specifies a script that is located on the local computer. The script runs on the remote computer and the results are returned to the local computer.

```

## ScriptBlock {}
We don't need to know how to script to benefit from the power of `Invoke-Command`. In fact, by appending the `-ScriptBlock { ... }` parameter to the cmdlet's syntax, we can execute any command (or sequence of commands) on the remote computer.

```powershell
PS C:\Users\captain> Invoke-Command -ComputerName wrexn -ScriptBlock {Get-Location}

```




