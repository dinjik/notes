Managing computers in **Active Directory (AD)** ensures that all devices in a network are secure, compliant, and properly configured. Computers are **AD objects** that can be monitored, controlled, and updated using Group Policies, security settings, and remote management tools.

## **Adding Computers to Active Directory**

Computers must be **joined to the domain** to be centrally managed. This allows for authentication, policy enforcement, and security monitoring.

- **Manually Join a Computer**

    - In **System Properties**, go to **Domain Membership** and enter the domain name.
    - Provide **domain admin credentials** when prompted.
    - Restart the computer for changes to take effect.

```powershell
# Join a computer to a domain using PowerShell
Add-Computer -DomainName "example.com" -Credential (Get-Credential) -Restart
```

- **Automatic Enrollment**

    - Use **Group Policy** to configure **Auto-enrollment** for Windows devices.
    - Deploy **Windows Autopilot** for cloud-based domain joins.

## **Managing Computer Accounts in AD**

Computer objects in AD must be **properly maintained** to ensure security and compliance.

- **Locate a Computer in AD**

    - Use **Active Directory Users and Computers (ADUC)** under the **Computers** container.
    - Run `Get-ADComputer` in PowerShell to retrieve details.

```powershell
# Find a computer in AD
Get-ADComputer -Filter {Name -like "PC-*"}
```

- **Reset a Computer Account**

    - If a computer loses trust with the domain, reset its AD account.
    - Run `Reset-ComputerMachinePassword` to re-establish domain trust.

## **Group Policy for Computer Management**

**Group Policy Objects (GPOs)** help manage security, updates, and configuration settings for computers.

- **Common GPO Settings for Computers**

    - **Password Policies** (e.g., complexity, expiration)
    - **Software Deployment** (installing applications automatically)
    - **Security Settings** (firewall rules, user rights)
    - **Windows Update Policies** (enforcing updates and restarts)

```powershell
# Check applied GPOs on a computer
gpresult /R /Scope Computer
```

## **Remote Management of Computers**

Administrators can manage computers remotely using built-in tools.

|Method|Tool|Use Case|
|---|---|---|
|**Remote Desktop**|`mstsc`|Full GUI access to a remote machine|
|**PowerShell Remoting**|`Enter-PSSession`|Run commands remotely|
|**Windows Admin Center**|Web UI|Centralized management|
|**PsExec (Sysinternals)**|`psexec \\computer cmd`|Run commands on a remote system|

```powershell
# Enable PowerShell Remoting on a machine
Enable-PSRemoting -Force
```

## **Monitoring and Auditing Computers**

Monitoring helps detect **unauthorized access, security breaches, and system health issues**.

- **Event Viewer** logs system activities and errors.
- **Windows Defender ATP** provides real-time security alerts.
- **Audit Policies** track logins, software changes, and failed access attempts.

```powershell
# View failed logon attempts
Get-WinEvent -LogName Security | Where-Object {$_.Id -eq 4625}
```