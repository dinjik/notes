UAC works by creating a boundary between normal user activities and system-level tasks that require administrative privileges. When a program or task tries to perform an operation that affects system settings or other user accounts, UAC prompts the user for approval. This prevents unauthorized applications or malicious software from making changes to the system without the user's knowledge.

### Key Features of UAC:

- **Elevated Privileges**: UAC helps ensure that only authorized users with administrative rights can perform tasks that could affect the system's stability or security.

- **Permission Prompts**: When a program or process requests administrative privileges, UAC prompts the user to approve or deny the action.

- **Access Control**: UAC helps maintain access control by preventing unauthorized users from making changes to system settings or installing malicious software.

## How UAC Works

When a program or process tries to make changes that require administrative privileges, UAC intercepts the action and displays a prompt asking the user for permission. The prompt typically asks whether the user wants to allow or deny the action.

- **Standard User**: If a standard user (without administrative rights) tries to run a program requiring elevated privileges, UAC will deny the action unless the user has access to an administrator account to provide the necessary credentials.

- **Administrator User**: If an administrator user attempts to perform a task that requires elevated privileges, UAC will prompt the user for confirmation but will not require a password (unless the user is running the program in a different security context).

### Types of UAC Prompts

- **Consent Prompt**: A user with administrative privileges sees this prompt when attempting to make a system-level change. It asks the user to confirm their action, and they can proceed with or cancel the operation.

- **Credential Prompt**: This prompt is shown when a non-administrative user tries to perform a task that requires administrative credentials. The user must enter an administrator’s username and password to proceed.

## UAC Levels

Windows provides several levels of UAC notification, which control how frequently UAC prompts the user for permission. The higher the level, the more frequently UAC will ask for user approval.

1. **Always Notify**: UAC prompts for approval whenever programs try to install software or make changes to the computer. This is the most secure setting, but it may be intrusive for everyday tasks.

2. **Notify Me Only When Programs Try to Make Changes to My Computer**: UAC will only prompt when a program tries to make changes, such as installing software or modifying system settings. It will not prompt for actions that are initiated by the user, such as opening a program or accessing files.

3. **Notify Me Only When Programs Try to Make Changes to My Computer (Do Not Dim My Desktop)**: Similar to the previous setting, but the desktop will not be dimmed during the UAC prompt. This is less secure as it can allow background processes to take control of the system while UAC is waiting for user approval.

4. **Never Notify**: UAC is completely turned off, and users will not be prompted for permission when making changes to the system. This is the least secure option and should only be used in certain controlled environments.

## Configuring UAC Settings

To configure UAC settings, follow these steps:

1. Open the **Control Panel**.
2. Go to **User Accounts**.
3. Click **Change User Account Control settings**.
4. Adjust the slider to one of the available levels (Always Notify, Notify Me Only When Programs Try to Make Changes, etc.).
5. Click **OK** to apply the changes.

The system may require a restart for some UAC settings to take effect.