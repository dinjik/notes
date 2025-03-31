Cmdlets are more advanced and flexible than traditional Windows commands and follow a structured `Verb-Noun` naming convention, making it easier to understand their functionality.

## Cmdlet Naming Convention

- **Verb-Noun**: Cmdlets follow a `Verb-Noun` structure. The verb indicates the action being performed, while the noun specifies the object on which the action is being performed. This consistent pattern allows for easy identification and understanding of cmdlets.

Examples:

- `Get-Content`: Retrieves (gets) the content of a file and displays it in the console.
- `Set-Location`: Changes (sets) the current working directory.

## Get-Command

To view all available cmdlets, functions, aliases, and scripts that can be executed in the current PowerShell session, you can use the `Get-Command` cmdlet.

### Example:

```powershell
PS C:\Users\captain> Get-Command
```

This will list all the commands (cmdlets, functions, aliases, and scripts) available in the current session. You can also filter commands by their type.

### Filter by Command Type:

```powershell
PS C:\Users\captain> Get-Command -CommandType "Function"
```

This will show only the functions available in the current session.

## Get-Help

The `Get-Help` cmdlet is essential for understanding how cmdlets work. It provides detailed information about a specific cmdlet, including its syntax, parameters, and examples.

### Example:

```powershell
PS C:\Users\captain> Get-Help Get-Date
```

This command will provide help for the `Get-Date` cmdlet, showing information such as:

- **Name**: `Get-Date`
- **Synopsis**: Gets the current date and time.

## Get-Help with -Examples Flag

By adding the `-Examples` flag to the `Get-Help` cmdlet, you can quickly retrieve usage examples for any cmdlet, which helps you understand how to use the cmdlet effectively in various scenarios.

### Example Usage:

```powershell
PS C:\Users\captain> Get-Help Install-Module -Examples
```

This command will provide example usages for the `Install-Module` cmdlet, which is helpful for understanding common ways to use the cmdlet in real-world scenarios.

## Get-Alias

Aliases are shortcuts for cmdlets and can make it easier to execute commonly used commands. For example, `cat` is an alias for `Get-Content`. You can use `Get-Alias` to list all available aliases in the current session.

### Example:

```powershell
PS C:\Users\captain> Get-Alias
```

This will list all the aliases in your session, including their associated cmdlets.

### Sample Output:

```
CommandType     Name                                               Version    Source 
-----------     ----                                               -------    ------
Alias           % -> ForEach-Object
Alias           ? -> Where-Object
Alias           ac -> Add-Content
Alias           asnp -> Add-PSSnapin
Alias           cat -> Get-Content
```
