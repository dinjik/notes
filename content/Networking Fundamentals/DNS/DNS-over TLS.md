Like DoH, DoT encrypts DNS traffic to prevent eavesdropping and interception, but it uses a dedicated port and protocol instead of blending in with HTTPS traffic.

#### **Key Features**

• **Privacy** – Prevents ISPs and attackers from viewing DNS queries.  
• **Encryption** – Uses TLS to secure DNS queries and responses.  
• **Port 853** – Uses a dedicated port for DNS traffic, separating it from other internet traffic.

#### **How It Works**

A DoT-enabled client establishes a **secure TLS connection** to a DoT-capable resolver (e.g., Google DNS or Quad9), ensuring that DNS queries are encrypted and protected from interception.

#### **Limitations**

DoT does not verify the authenticity of DNS responses without DNSSEC. Unlike DoH, it does not disguise DNS traffic within regular HTTPS requests, making it easier for network administrators or ISPs to identify and potentially block.