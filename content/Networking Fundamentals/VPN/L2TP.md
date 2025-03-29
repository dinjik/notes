**Layer 2 Tunneling Protocol** itself is a tunneling protocol that creates a secure tunnel for data to travel through, but it does **not provide encryption** on its own. To ensure security, it is often paired with **IPsec** (Internet Protocol Security), which provides encryption and authentication for the data being transmitted. Together, L2TP and IPsec offer a robust, secure VPN protocol.

![[l2tp-ipsec.png]]

**How It Works**:

- **L2TP** establishes a tunnel between the client and the VPN server. However, the data traveling through this tunnel is **not encrypted** by L2TP alone.
- **IPsec** is used in conjunction with L2TP to encrypt the data inside the tunnel, ensuring that even if the data is intercepted, it remains unreadable.
- The combination of **L2TP** (for tunnel creation) and **IPsec** (for encryption) ensures both **confidentiality** and **integrity** of the data being transmitted.

### **Key Features**:

- **Tunnel Creation**: L2TP creates the framework for the tunnel, but it relies on IPsec to secure the data inside.
- **Encryption**: IPsec provides encryption for the data passing through the L2TP tunnel, which is essential for secure communication, especially over public networks like the internet.
- **Compatibility**: L2TP/IPsec is compatible with a wide range of operating systems and devices, making it a commonly supported protocol for remote access VPNs and site-to-site VPNs.