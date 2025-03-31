Active Directory (AD) uses authentication protocols to verify the identity of users and computers before granting access to resources. The main authentication methods include **NTLM**, **Kerberos**, and other modern authentication mechanisms like **LDAP** and **OAuth**.

### NTLM (NT LAN Manager)

**NTLM** is an older authentication protocol based on challenge-response mechanisms. It does not require a central authentication server but is less secure than modern methods.

- Uses **password hashing** instead of transmitting plaintext passwords.
- Relies on a **challenge-response** mechanism to authenticate users.
- Still used for backward compatibility but is vulnerable to **relay attacks** and **pass-the-hash attacks**.

#### NTLM Authentication Process

1. The client sends a request to the server for authentication.
2. The server replies with a **challenge** (random number).
3. The client encrypts the challenge using its password hash and sends it back.
4. The server verifies the response by comparing it with its stored hash.

```plaintext
Client  →  Server: "Authenticate me"
Server  →  Client: "Challenge: XYZ123"
Client  →  Server: "Response: Encrypted(XYZ123, Hash(Password))"
Server  →  Validates response and grants/denies access
```

### Kerberos Authentication

**Kerberos** is a more secure authentication protocol that relies on **ticket-based authentication** instead of password hashing.

- Uses a **Key Distribution Center (KDC)** to issue **tickets** for authentication.
- Supports **mutual authentication**, preventing man-in-the-middle attacks.
- More efficient than NTLM because it does not repeatedly verify passwords.

#### Kerberos Authentication Process

1. The client requests a **Ticket-Granting Ticket (TGT)** from the **Key Distribution Center (KDC)**.
2. The KDC verifies the request and issues a **TGT**.
3. The client presents the TGT to the **Ticket-Granting Service (TGS)** to obtain a service-specific ticket.
4. The client uses the service ticket to authenticate to the target system.

```plaintext
Client  →  KDC: "Request TGT"
KDC     →  Client: "TGT Issued"
Client  →  TGS: "Request Service Ticket"
TGS     →  Client: "Service Ticket Issued"
Client  →  Server: "Authenticate using Service Ticket"
```

### LDAP (Lightweight Directory Access Protocol)

LDAP is not an authentication method by itself but is used for **querying and managing directory services**, including authentication.

- AD uses **LDAP over SSL/TLS (LDAPS)** for secure authentication.
- Supports **bind authentication**, where clients authenticate with usernames and passwords.
- Often used in **single sign-on (SSO)** and third-party integrations.

Example of an LDAP authentication query:

```plaintext
Bind Request: 
Client → AD: "Bind Request (Username, Password)"
AD → Client: "Bind Successful"
```

### Modern Authentication Methods

With the rise of cloud services, Microsoft and other vendors have introduced **modern authentication methods** that improve security.

|Method|Description|Use Case|
|---|---|---|
|**OAuth 2.0**|Token-based authentication for web and mobile apps|Cloud services, API access|
|**SAML (Security Assertion Markup Language)**|XML-based authentication for single sign-on|Web-based applications|
|**FIDO2 / WebAuthn**|Passwordless authentication using biometrics or security keys|Zero-trust environments|

### NTLM vs. Kerberos vs. Modern Methods

|Feature|NTLM|Kerberos|Modern Authentication (OAuth, SAML)|
|---|---|---|---|
|**Security**|Weak (vulnerable to attacks)|Strong (ticket-based security)|Very Strong (tokens, encryption)|
|**Authentication Type**|Challenge-Response|Ticket-Based|Token-Based|
|**Mutual Authentication**|No|Yes|Yes|
|**Best For**|Legacy systems|Windows domains|Cloud and hybrid environments|
