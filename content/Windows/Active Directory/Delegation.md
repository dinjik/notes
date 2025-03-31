**Delegation in AD** allows administrators to assign specific permissions to users or groups, enabling them to manage objects without giving them full administrative rights. This improves security by following the **principle of least privilege**.

## **Types of Delegation**

### **1. Administrative Delegation**

Grants **custom permissions** to users or groups on specific **Organizational Units (OUs)**.

- Used to allow **helpdesk staff** to reset passwords or unlock accounts.
- Configured using the **Delegation of Control Wizard**.
- Prevents giving full **Domain Admin** rights unnecessarily.

```bash
# View delegated permissions in AD
dsacls "OU=HR,DC=example,DC=com"
```

### **2. Kerberos Delegation**

Allows a service to **act on behalf of a user** to access another service. Used for **single sign-on (SSO) scenarios**.

- **Unconstrained Delegation**: Grants **full impersonation rights**, which is a security risk.
- **Constrained Delegation**: Limits access to specific services (recommended).
- **Resource-Based Constrained Delegation (RBCD)**: More secure, controlled by the target resource.

```bash
# Check if a computer account has delegation enabled
Get-ADComputer -Identity "Server1" -Properties TrustedForDelegation
```

## **Delegation of Control Wizard**

The **Delegation of Control Wizard** simplifies assigning permissions to users or groups on **OUs**.

- Select the **OU** in **Active Directory Users and Computers (ADUC)**.
- Choose the **user or group** to delegate control to.
- Pick **specific permissions** (e.g., Reset passwords, Create/Delete accounts).

This prevents **overuse of Domain Admin privileges**, improving **security** and **management efficiency**.

## **Comparison of Delegation Types**

|Delegation Type|Purpose|Example Use Case|
|---|---|---|
|**Administrative Delegation**|Assigns control over AD objects|Helpdesk can reset passwords|
|**Unconstrained Delegation**|Full impersonation of users|Legacy apps (not recommended)|
|**Constrained Delegation**|Limits access to specific services|Web server accessing a database|
|**Resource-Based Constrained Delegation (RBCD)**|Controlled by the target resource|Cloud and hybrid environments|
