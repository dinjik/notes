**Generic Routing Encapsulation (GRE)** is a tunneling protocol used to encapsulate a wide variety of network layer protocols, enabling their transport over IP networks. Unlike IPsec, GRE does **not** provide encryption on its own but is often used in combination with IPsec to add security features.

![[27c52877-2475-4b21-9f58-8d856451c981.png]]
### **Key Features**

- Supports **multicast, broadcast, and non-IP protocols** (e.g., IPv6, AppleTalk), making it highly versatile for different types of data.
- Can encapsulate **a variety of data types**, including non-IP protocols, which is beneficial for transporting legacy applications and different communication methods within a modern IP network.
- Creates a **point-to-point virtual tunnel** between two devices or networks, allowing transparent communication.
- Widely used in **corporate networks** to link remote offices and extend internal services, ensuring diverse network traffic can be routed over the tunnel.

### **mGRE (Multipoint Generic Routing Encapsulation)**

While standard GRE typically sets up tunnels between two specific endpoints, **mGRE (Multipoint GRE)** enhances this by supporting dynamic connections between multiple endpoints without the need to manually configure individual tunnels for each pair. This is particularly useful in **DMVPN (Dynamic Multipoint VPNs)**, enabling flexible, scalable networks that can support a variety of traffic types.

![[GRE-Multipoint-Tunnel-Diagram.jpg]]

The ability of GRE to transport various protocols (like IPv6 and AppleTalk) across an IP network makes it an excellent choice for environments that need to handle diverse communication needs without relying on different tunneling mechanisms for each protocol.