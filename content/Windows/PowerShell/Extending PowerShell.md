PowerShell offers the flexibility to extend its built-in functionality by downloading additional cmdlets from online repositories like the PowerShell Gallery. These modules contain collections of cmdlets that enhance PowerShell's capabilities, allowing users to work with various systems, tools, and services more efficiently.

## Finding Modules

To search for modules available in online repositories like the PowerShell Gallery, you can use the `Find-Module` cmdlet. This cmdlet allows you to locate specific modules or explore related ones when you're unsure of the exact name.

### 1. **Using Find-Module**

You can search for modules by name using the `Find-Module` cmdlet. If you're not sure about the exact name, you can use wildcards to match partial names.

Example:

```powershell
PS C:\Users\dinjik> Find-Module -Name "PowerShell*"
```

This command searches for all modules whose names start with "PowerShell". The result will show the modules that match the pattern, including their version, description, and the repository from which they can be downloaded.

Example output:

```powershell
Version    Name                                Repository           Description
-------    ----                                ----------           -----------
0.4.7      powershell-yaml                     PSGallery            Powershell module for serializing and deserializing YAML
```

### 2. **Wildcard Usage**

If you want to search for modules related to a particular topic or functionality, you can append a wildcard (`*`) to the name. This allows you to find all modules related to that pattern.

Example:

```powershell
PS C:\Users\dinjik> Find-Module -Name "Azure*"
```

This would search for modules related to Azure.

## Installing Modules

Once you find a module that you want to use, you can install it using the `Install-Module` cmdlet. This downloads the module from the specified repository and makes its cmdlets available for use in your PowerShell session.

### 1. **Install-Module Cmdlet**

To install a module, use the `Install-Module` cmdlet followed by the module's name. You may need administrative privileges depending on the repository and system configuration.

Example:

```powershell
PS C:\Users\dinjik> Install-Module -Name "PowerShellGet"
```

This command installs the `PowerShellGet` module, which provides cmdlets to manage other modules in PowerShell.

### 2. **Module Installation Locations**

Modules can be installed locally in the user's profile or system-wide. By default, `Install-Module` installs modules to the `PSGallery` repository, but you can specify different repositories or installation paths.

### 3. **Using Modules After Installation**

Once a module is installed, you can use its cmdlets directly in your session. For example, after installing the `PowerShellGet` module, you can use its cmdlets to find, install, and update other modules.

### 4. **Module Version Management**

PowerShell allows you to install specific versions of a module. To do so, you can use the `-RequiredVersion` parameter.

Example:

```powershell
PS C:\Users\dinjik> Install-Module -Name "PowerShellGet" -RequiredVersion "2.2.5"
```

This ensures that you install the specified version of the module.