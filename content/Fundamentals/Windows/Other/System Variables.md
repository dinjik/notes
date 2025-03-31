System variables in Windows are key-value pairs that store dynamic system information. These variables are used by the operating system and applications to find resources like files, directories, and settings. They are especially useful for automating tasks, system configurations, and troubleshooting.

System variables come in two types:

- **User variables**: Specific to individual user accounts and can be customized by the user.
- **System variables**: System-wide variables that apply to all users on the machine.

These variables can be accessed and modified through the Command Prompt, PowerShell, or the Environment Variables dialog in the System Properties.

## Common System Variables in Windows

Windows has a set of default environment variables that help users and applications interact with the system. These variables control system paths, user profiles, and other critical settings.

### Key System Variables:

```cmd
%SystemRoot%    - Refers to the Windows installation directory, usually C:\Windows.
%ProgramFiles%  - Refers to the directory where applications are installed, usually C:\Program Files.
%ProgramFiles(x86)%  - Refers to the directory where 32-bit applications are installed, usually C:\Program Files (x86).
%UserProfile%   - Points to the user’s profile directory, typically C:\Users\<username>.
%APPDATA%       - Points to the application data folder, typically C:\Users\<username>\AppData\Roaming.
%TEMP% and %TMP% - Point to the directory where temporary files are stored, usually C:\Users\<username>\AppData\Local\Temp.
%PATH%          - Defines a list of directories that the system searches for executables.
%COMPUTERNAME%  - Represents the name of the computer on the network.
%USERNAME%      - Refers to the current logged-in user’s name.
%HOMEPATH%      - Refers to the path of the user's home directory, typically C:\Users\<username>.
%USERDOMAIN%    - Displays the domain name associated with the user’s account.
%ALLUSERSPROFILE% - Points to the folder that contains application data common to all users, usually C:\ProgramData.
```

## Modifying System Variables

While most system variables are predefined, some can be modified by users, administrators, or programs to change how the system behaves.

### Modifying System Variables via the Command Prompt:

To view or change a system variable in the Command Prompt, use the `set` command:

- **View a variable**: To display the value of a system variable, simply use the `echo` command.

    ```cmd
    echo %PATH%
    ```

    This will output the directories stored in the `PATH` variable.

- **Set a new variable**: You can set a new variable for the current session by using the `set` command. For example:

    ```cmd
    set MY_VAR=MyValue
    ```

- **Modify a variable**: You can modify an existing variable like `PATH` by appending new paths.

    ```cmd
    set PATH=%PATH%;C:\NewPath
    ```

### Modifying System Variables via the System Properties Dialog:

1. Right-click on **This PC** or **Computer** and select **Properties**.
2. Choose **Advanced system settings** from the left-hand panel.
3. Under the **System Properties** window, click on **Environment Variables**.
4. From here, you can modify both **User Variables** and **System Variables**.
5. To add a new system variable or modify an existing one, click **New** or select a variable and click **Edit**.

## Using System Variables in Scripts

System variables are often used in batch files or scripts to automate tasks, system configurations, and troubleshooting procedures. They can dynamically reference directories, user information, and other settings.

For example, in a batch script, you might use the `%USERPROFILE%` variable to create a file in the user's profile directory:

```cmd
echo Hello, World! > %USERPROFILE%\Documents\hello.txt
```

### Environment Variable Expansion

Windows supports environment variable expansion, where variables are evaluated and replaced with their corresponding values when the script or command is executed. This allows scripts to dynamically change based on the system environment.

- **Immediate Expansion**: Enclosed in `%`, the variable is expanded immediately.

    ```cmd
    echo %COMPUTERNAME%
    ```

- **Delayed Expansion**: You can enable delayed expansion using `setlocal enabledelayedexpansion` to expand variables during runtime in loops or other situations where immediate expansion may not work as expected.