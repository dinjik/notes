**IPsec** is a suite of protocols that secures communication at the **network layer (Layer 3)** of the OSI model. It provides encryption, authentication, and integrity for data transmitted over IP networks.

![[what-are-ipsec-modes.svg]]
### **Modes of Operation**

- **Transport Mode** – Encrypts only the data payload of an IP packet, leaving the header exposed. This is useful for device-to-device communication where only the message contents need to be secured.
- **Tunnel Mode** – Encrypts the entire IP packet, including the header, encapsulating it within a new packet. This is commonly used for VPN tunnels between networks.

### **Common Use Cases**

- **Site-to-Site VPNs** – Securely connecting entire networks over the internet.
- **Remote Access VPNs** – Allowing individual users to securely access a private network.
- **Secure Communications Between Devices** – Used in enterprises to ensure encrypted communication between endpoints.

IPsec is often paired with **IKE (Internet Key Exchange)** for secure key management and authentication.