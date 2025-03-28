---
icon: TiArticle
---
One example is using tools like Responder to capture NTLM hashes during network traffic interception. Here's a typical scenario:

1. **Hash Capture**: The attacker sets up a tool like Responder to intercept NTLM authentication attempts. This can happen when a misconfigured server or client sends authentication requests over an insecure network.
2. **Hash Cracking**: Once the NTLM hash is captured, tools like Hashcat or John the Ripper are used to perform brute-force or dictionary attacks to crack the hash and retrieve the plaintext password.