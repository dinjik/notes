Resetting passwords in **Active Directory (AD)** is a common administrative task. It helps users regain access to their accounts while maintaining security. Administrators must ensure password resets follow **security policies** and **compliance requirements**.

## **Methods to Reset Password in AD**

There are multiple ways to reset a user's password in Active Directory.

### **1. Using Active Directory Users and Computers (ADUC)**

- Open **Active Directory Users and Computers (ADUC)**.
- Locate the **user account** under the correct **Organizational Unit (OU)**.
- Right-click the user and select **Reset Password**.
- Enter the **new password** and enforce **password policies**.

### **2. Using PowerShell**

Administrators can reset passwords via **PowerShell**, allowing for bulk password resets or automation.

```powershell
# Reset a user's password in AD
Set-ADAccountPassword -Identity "username" -NewPassword (ConvertTo-SecureString "NewP@ssw0rd!" -AsPlainText -Force)
```

- Use **`Set-ADAccountPassword`** to change the password.
- The **`ConvertTo-SecureString`** command ensures password security.

### **3. Using Command Prompt (net user)**

```cmd
net user username NewP@ssw0rd! /domain
```

- Requires **administrative privileges**.
- Works on domain-joined computers.

## **Forcing a User to Change Password at Next Login**

For security, administrators can force users to change passwords upon login.

### **Using ADUC**

- Check the **"User must change password at next logon"** option when resetting the password.

### **Using PowerShell**

```powershell
Set-ADUser -Identity "username" -ChangePasswordAtLogon $true
```

- Ensures the user sets a **secure password** after logging in.

## **Unlocking a Locked-Out Account**

If an account is locked due to **failed login attempts**, it must be unlocked before resetting the password.

### **Using PowerShell**

```powershell
Unlock-ADAccount -Identity "username"
```

- Removes the **lockout flag** without changing the password.
 
## **Password Policies in AD**

Administrators should enforce strong password policies to **prevent unauthorized access**.

|Setting|Description|
|---|---|
|**Minimum Length**|Enforces a minimum number of characters (e.g., 12).|
|**Complexity Requirement**|Requires uppercase, lowercase, numbers, and special characters.|
|**Expiration**|Forces users to change passwords periodically.|
|**Lockout Threshold**|Locks accounts after repeated failed login attempts.|

```powershell
# View domain password policies
Get-ADDefaultDomainPasswordPolicy
```