Data Center Interconnect (DCI) is a technology that connects two or more data centers to provide seamless communication, resource sharing, and disaster recovery between them. When combined with VXLAN, DCI extends Layer 2 networks across geographically distributed data centers over a Layer 3 backbone, offering scalability, flexibility, and isolation. Essentially, you may think of devices within same VLAN residing in geographically separated datacenters.

VXLAN (Virtual Extensible LAN) is a network virtualization technology that extends traditional VLAN functionality to address scalability, flexibility, and physical network limitations.

![[Pasted image 20250328233845.png]]

**How It Works:**

- **Encapsulation:** VXLAN encapsulates Layer 2 Ethernet frames inside UDP VXLAN packets, enabling them to traverse Layer 3 networks.(port 4789 by default)
- **VTEPs (VXLAN Tunnel Endpoints):** These devices perform the encapsulation and decapsulation, acting as the endpoints for VXLAN tunnels.
- **VXLAN Network Identifier (VNI):** A 24-bit identifier that provides up to 16,777,215 unique virtual networks, compared to VLAN’s 4,096 limit.