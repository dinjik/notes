**Kerberos** is a secure authentication protocol used in **Active Directory (AD)** environments. It allows users and computers to prove their identity without transmitting passwords over the network. Kerberos relies on **ticket-based authentication**, reducing security risks like password interception.

## **How Kerberos Works**

Kerberos uses a **Key Distribution Center (KDC)** to issue authentication tickets. This ensures secure communication between users and services.

1. **Authentication Request:** The user sends a request to the **KDC** for a **Ticket-Granting Ticket (TGT)**.
2. **TGT Issued:** If credentials are valid, the KDC issues a **TGT**, which acts as proof of authentication.
3. **Service Request:** When accessing a resource (e.g., a file server), the user presents the **TGT** to the **Ticket-Granting Service (TGS)**.
4. **Service Ticket Issued:** The TGS verifies the TGT and issues a **Service Ticket**.
5. **Access Granted:** The user presents the **Service Ticket** to the target server, which verifies it and grants access.

```plaintext
Client  →  KDC: "Request TGT"
KDC  →  Client: "TGT Issued"
Client  →  TGS: "Request Service Ticket"
TGS  →  Client: "Service Ticket Issued"
Client  →  Server: "Authenticate using Service Ticket"
```

## **Kerberos Components**

|Component|Function|
|---|---|
|**Key Distribution Center (KDC)**|Issues authentication tickets|
|**Ticket-Granting Ticket (TGT)**|Proves initial authentication|
|**Ticket-Granting Service (TGS)**|Issues service-specific tickets|
|**Service Ticket**|Grants access to a resource|
|**Client**|The user or computer requesting access|
|**Server**|The resource the client wants to access|

## **Kerberos vs. NTLM**

|Feature|Kerberos|NTLM|
|---|---|---|
|**Security**|Strong (ticket-based)|Weaker (challenge-response)|
|**Mutual Authentication**|Yes|No|
|**Password Transmission**|Not sent over the network|Hash sent over the network|
|**Best Use Case**|Windows domains|Legacy applications|

## **Kerberos Delegation**

Kerberos supports **delegation**, allowing services to act on behalf of users. This is useful for **single sign-on (SSO)** and accessing network resources without re-authentication.

- **Unconstrained Delegation**: Full access to impersonate users (not secure).
- **Constrained Delegation**: Limited access to specific services (recommended).
- **Resource-Based Constrained Delegation (RBCD)**: Controlled by the target service, increasing security.

```bash
# Check if a computer account has delegation enabled
Get-ADComputer -Identity "Server1" -Properties TrustedForDelegation
```

## **Common Kerberos Issues and Troubleshooting**

|Issue|Cause|Solution|
|---|---|---|
|**Clock Skew Error**|System time mismatch|Sync time using **NTP**|
|**TGT Expired**|Ticket lifetime exceeded|Run `klist purge` to clear tickets|
|**Service Ticket Failure**|SPN not registered|Use `setspn -L` to verify Service Principal Name|
