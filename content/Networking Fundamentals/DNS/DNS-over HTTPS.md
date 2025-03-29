DoH encrypts DNS queries and responses using HTTPS to protect user privacy and prevent interception by ISPs or attackers. It blends DNS traffic with regular web traffic by using port 443.

#### **Key Features**

• **Privacy** – Prevents ISPs and attackers from snooping on DNS traffic.  
• **Encryption** – Encapsulates DNS traffic within HTTPS, making it harder to intercept or manipulate.  
• **Port 443** – Uses the same port as standard HTTPS traffic to blend in with web activity.

#### **How It Works**

A DoH-enabled resolver (e.g., Cloudflare’s 1.1.1.1) receives DNS queries over HTTPS. Queries and responses are encrypted using TLS (Transport Layer Security).

#### **Limitations**

DoH does not verify the authenticity of DNS responses, meaning it does not protect against DNS spoofing unless combined with DNSSEC. It also lacks a built-in hierarchy of trust, requiring users to rely on trusted resolvers.