The `Invoke-Command` cmdlet is an essential tool for executing commands on remote systems. It is particularly useful for system administrators, security engineers, and penetration testers who need to manage multiple machines remotely or automate tasks across different systems.

## Script Execution with -FilePath

With the `-FilePath` parameter, you can execute a script from a local computer on a remote machine. This allows you to automate complex tasks or apply changes across multiple systems from a centralized location.

### Example:

```powershell
PS C:\Users\dinjik> Get-Help Invoke-Command -examples

NAME
    Invoke-Command
    
SYNOPSIS
    Runs commands on local and remote computers.

    ------------- Example 1: Run a script on a server -------------
    
    Invoke-Command -FilePath c:\scripts\test.ps1 -ComputerName Server01
    
    The FilePath parameter specifies a script that is located on the local computer. The script runs on the remote computer, and the results are returned to the local computer.
```

## ScriptBlock {}

The `-ScriptBlock` parameter allows you to execute a sequence of commands directly on the remote system without needing a script file. This is useful for quick tasks or commands that don’t require a separate script.

### Example:

```powershell
PS C:\Users\dinjik> Invoke-Command -ComputerName dinjik -ScriptBlock {Get-Location}
```

This will run the `Get-Location` cmdlet on the remote computer named `dinjik` and return the current directory of that machine.