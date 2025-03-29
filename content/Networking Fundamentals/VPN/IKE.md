**Internet Key Exchange** is the protocol used to establish and manage **IPsec tunnels**. It negotiates security settings, authenticates peers, and generates encryption keys.

![[imgonline-com-ua-resize-CacMXXaeAgDO9A-1.jpg]]
### **Phases of IKE**

1. **IKE Phase 1** – Establishes a secure channel between peers using encryption and authentication. This is done using Diffie-Hellman key exchange and certificates or pre-shared keys.
2. **IKE Phase 2** – Uses the secure channel from Phase 1 to negotiate the IPsec tunnel settings and create the actual encrypted connection.

IKE is crucial for dynamically securing IPsec VPNs by automatically managing encryption keys and security parameters.