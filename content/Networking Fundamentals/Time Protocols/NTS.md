Network Time Security is a modern security enhancement for NTP, designed to **protect against spoofing and replay attacks** by using cryptographic authentication and encryption.

![[NTP-client-KE-server-messages-1024x723.jpeg]]

#### **Key Features:**

• **Protection Against Attacks** – Prevents spoofing, mitigates replay attacks, and secures messages with cryptographic methods.  
• **TLS-Based Key Exchange** – Uses the **NTS Key Exchange (NTS-KE) protocol** to establish secure communication between clients and servers.  
• **Integrity and Authentication** – Ensures NTP packets are tamper-proof and come from trusted sources.  
• **Compatibility with NTP** – Designed to extend and enhance existing NTP infrastructure.

#### **How NTS Works:**

1. **Key Exchange Phase** – The client and server establish cryptographic keys over TLS.
2. **Authentication** – The server provides cookies for subsequent secure communication.