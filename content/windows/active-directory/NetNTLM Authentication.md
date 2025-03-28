---
icon: TiArticle
---
<mark style="background: #FFB86CA6;">NTLM authentication has a number of inherent vulnerabilities that make it susceptible to attacks like relay, replay, and hash cracking. </mark>These weaknesses, combined with the availability of much more secure alternatives, have led to NTLM being gradually phased out in many modern systems.

NetNTLM works using a challenge-response mechanism. The entire process is as follows:

1. **Challenge Generation**: When a client wants to authenticate with a server, the server sends a randomly generated 16-byte value called the _challenge_ to the client.
2. **Combining the Password**: On the client side, the user's password isn't sent directly. Instead, it's hashed using a one-way hashing algorithm (such as MD4 or NT hash) to create a hash representation of the password.
3. **Challenge-Response Creation**: The client takes the challenge received from the server, combines it with the password hash, and then encrypts this combination using a cryptographic algorithm (like DES) to create a response. This ensures that the response is unique to the specific challenge issued by the server.
4. **Server Validation**: The server already has access to the user's hashed password (stored securely in its directory service, e.g., Active Directory). It uses the same challenge value and the stored hash to generate its own version of the expected response. If the server's calculated response matches the one sent by the client, authentication is successful.

![[ntlm_relay_basic-2390285604.png]]