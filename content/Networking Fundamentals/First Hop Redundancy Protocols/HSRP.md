HSRP (Hot Standby Routing Protocol) is a Cisco proprietary redundancy protocol designed to provide high availability in IP networks. Its main goal is to ensure that network traffic remains uninterrupted, even in the event of a router failure. HSRP allows multiple routers to work together as a virtual router, ensuring traffic continues to flow even if one of the physical routers fails.

![[Pasted image 20250329012152.png]]

### **How HSRP Works**

- HSRP allows multiple routers to share a virtual IP and MAC address, making devices use this address as their default gateway.
- One router is elected as the Active Router, which forwards all traffic to the virtual IP, while another router takes the Standby role.
- The Active Router sends hello packets to the Standby Router to notify it that it's up and running.
- If the Standby Router doesn’t receive these packets within a specified time, it assumes the Active Router has failed and takes over its role.
- If the Active Router fails, the Standby Router assumes its virtual IP and MAC address, ensuring a smooth failover with minimal disruption.