**Dynamic Multipoint Virtual Private Network** is a more **flexible and scalable** version of traditional VPNs, designed to allow multiple sites to connect dynamically without needing direct, static connections between all sites. It’s a **virtual mesh network** that enables on-demand communication between remote sites.

![[hq-branch-routers-internet-gre-tunnels.png]]

**Key Features**:

- **Dynamic Tunnel Creation**: DMVPN utilizes **mGRE (Multipoint GRE)** to dynamically establish secure tunnels between sites only when needed. This reduces the need for manually configuring individual tunnels between every pair of remote sites, offering significant scalability benefits.
- **Hub-and-Spoke Setup**: In a typical DMVPN setup, a central hub (often the main office or headquarters) acts as the connection point for all remote sites (spokes). All spokes maintain secure, **continuous IPsec connections** to the hub, but they only establish direct tunnels to one another when required, using the hub as an intermediary to facilitate the connection.

**How It Works**:

- When one remote site (Spoke A) needs to communicate with another remote site (Spoke B), it initially sends traffic to the hub.
- The hub then facilitates the dynamic creation of a direct tunnel between Spoke A and Spoke B using **mGRE**. Once the tunnel is established, communication between the two spokes bypasses the hub.
- **IPsec** is applied to this direct tunnel, ensuring that the traffic remains encrypted and secure.