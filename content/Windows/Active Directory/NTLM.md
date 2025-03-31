**NTLM (NT LAN Manager)** is a legacy authentication protocol used in Windows environments. It is based on a **challenge-response mechanism** to verify user identities without sending passwords over the network. While still supported, NTLM is considered **less secure** than modern authentication methods like **Kerberos**.

## **How NTLM Works**

NTLM authentication happens in three steps:

1. **Client Request:** The user enters credentials, and the client sends a login request to the server.
2. **Challenge-Response:** The server sends a **challenge (random number)**, and the client encrypts it using the **NT hash** of the password.
3. **Authentication Decision:** The server compares the encrypted response to its stored value and grants or denies access.

```plaintext
Client  →  Server: "Login Request"
Server  →  Client: "Challenge (Random Number)"
Client  →  Server: "Encrypted Response"
Server  →  Client: "Access Granted/Denied"
```

## **NTLM vs. Kerberos**

|Feature|NTLM|Kerberos|
|---|---|---|
|**Security**|Weaker (susceptible to relay attacks)|Strong (ticket-based authentication)|
|**Password Exposure**|Sends password hash|No password transmission|
|**Mutual Authentication**|No|Yes|
|**Best Use Case**|Legacy applications|Windows domain authentication|

## **NTLM Security Risks**

NTLM is vulnerable to **various attacks**, making it unsuitable for modern security needs.

- **Pass-the-Hash (PtH) Attacks**: Attackers steal and reuse NTLM hashes to authenticate.
- **Relay Attacks**: Attackers intercept NTLM authentication and impersonate users.
- **Lack of Mutual Authentication**: Only the client authenticates to the server, not vice versa.

```bash
# Disable NTLM authentication via Group Policy
Set-ItemProperty "HKLM:\SYSTEM\CurrentControlSet\Control\Lsa" -Name "LmCompatibilityLevel" -Value 5
```

## **Disabling NTLM and Using Kerberos**

Organizations should **reduce or eliminate NTLM** usage in favor of **Kerberos** for better security.

- **Audit NTLM Usage**

    - Use **Windows Event Logs** to detect NTLM authentication attempts.

```powershell
# Find NTLM authentication events
Get-WinEvent -LogName Security | Where-Object {$_.Id -eq 4776}
```

- **Enforce Kerberos Authentication**

    - Use **Group Policy** to disable NTLM authentication for domain-joined systems.
    - Ensure all **services and applications** support Kerberos.
