Gateway Load Balancing Protocol is a Cisco proprietary protocol designed to provide load balancing along with redundancy, allowing multiple routers to share a virtual gateway IP address while distributing traffic.

![[glbp-avg-avf.png]]

### **How GLBP Works**

- GLBP allows multiple routers to act as a group for providing a virtual gateway IP.
- Each router in the GLBP group is assigned a unique virtual MAC address, and the virtual IP is shared among the routers.
- A router is selected as the Active Virtual Gateway (AVG) and responsible for distributing traffic.
- The AVG assigns different virtual MAC addresses to different routers, balancing the load between them.
- If the AVG fails, another router takes over as the new AVG, ensuring continuous traffic flow without disruption.