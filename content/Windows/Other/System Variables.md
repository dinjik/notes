Windows system variables are predefined values used by the operating system to store critical paths, settings, and user-specific configurations. These variables are important for system operations and can be accessed or modified to affect the behavior of both the system and applications.

## Common Windows System Variables

These variables are commonly used to point to important system directories and configurations:

### %SystemRoot%

- **Purpose**: Refers to the Windows installation directory, which is essential for system files.
- **Typical Location**: `C:\Windows`

### %ProgramFiles%

- **Purpose**: Refers to the directory where 64-bit applications are installed.
- **Typical Location**: `C:\Program Files`

### %ProgramFiles(x86)%

- **Purpose**: Refers to the directory where 32-bit applications are installed on a 64-bit system.
- **Typical Location**: `C:\Program Files (x86)`

### %UserProfile%

- **Purpose**: Points to the user’s profile directory, where personal files and settings are stored.
- **Typical Location**: `C:\Users\<username>`

### %APPDATA%

- **Purpose**: Points to the folder where application data for the user is stored, typically settings and configurations for programs.
- **Typical Location**: `C:\Users\<username>\AppData\Roaming`

### %TEMP% and %TMP%

- **Purpose**: Point to the directory where temporary files are stored by the system and applications.
- **Typical Location**: `C:\Users\<username>\AppData\Local\Temp`

### %PATH%

- **Purpose**: Defines a list of directories where executable files are located, allowing the system to run applications from any location.
- **Typical Value**: Includes system directories like `C:\Windows\System32`

### %COMPUTERNAME%

- **Purpose**: Represents the name of the computer on the network.
- **Typical Value**: The name you assigned when setting up the computer.

### %USERNAME%

- **Purpose**: Refers to the currently logged-in user's name.
- **Typical Value**: `<username>` of the logged-in user.

### %HOMEPATH%

- **Purpose**: Refers to the path of the user's home directory.
- **Typical Location**: `C:\Users\<username>`

### %USERDOMAIN%

- **Purpose**: Displays the domain name associated with the user’s account, typically in corporate environments.
- **Typical Value**: `<domain_name>`

### %ALLUSERSPROFILE%

- **Purpose**: Points to the folder that contains application data common to all users on the computer.
- **Typical Location**: `C:\ProgramData`

## Table: Comparison of Windows System Variables

|Variable|Purpose|Typical Location/Value|
|---|---|---|
|%SystemRoot%|Windows installation directory|`C:\Windows`|
|%ProgramFiles%|Directory for 64-bit applications|`C:\Program Files`|
|%ProgramFiles(x86)%|Directory for 32-bit applications on 64-bit OS|`C:\Program Files (x86)`|
|%UserProfile%|User’s profile directory|`C:\Users\<username>`|
|%APPDATA%|User-specific application data|`C:\Users\<username>\AppData\Roaming`|
|%TEMP%, %TMP%|Temporary files storage|`C:\Users\<username>\AppData\Local\Temp`|
|%PATH%|Directories for executable files|System directories like `C:\Windows\System32`|
|%COMPUTERNAME%|Name of the computer|`<computer_name>`|
|%USERNAME%|Logged-in user's name|`<username>`|
|%HOMEPATH%|User's home directory path|`C:\Users\<username>`|
|%USERDOMAIN%|Domain name associated with the user|`<domain_name>`|
|%ALLUSERSPROFILE%|Common application data for all users|`C:\ProgramData`|

## Example of Using System Variables

In a command prompt, you can use variables like `%PATH%` to see which directories the system checks for executables:

```bash
echo %PATH%
```

This command will display a list of all the directories stored in the `PATH` variable.

## Flowchart: Usage of System Variables

```plaintext
          +-------------------+
          |   System Variables|
          +-------------------+
                   |
        +----------+-----------+
        |                      |
+-------v-------+          +---v------+
|   User Variables|        | System Variables|
+-----------------+        +------------------+
```

This flowchart shows the division between user-specific variables and system-wide variables, highlighting the different scopes each one has within the Windows environment.