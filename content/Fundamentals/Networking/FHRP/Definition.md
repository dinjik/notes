First Hop Redundancy Protocols (FHRPs) are network protocols designed to ensure the availability and reliability of the default gateway in a network. These protocols allow for automatic failover and provide redundancy for the first hop a device uses to reach destinations outside its local subnet. FHRPs are critical in preventing network downtime and ensuring that devices can always reach their gateway, even if one router or gateway fails.

In a typical network, devices rely on a default gateway to route traffic destined for external networks. If the gateway fails, devices would lose network connectivity. FHRPs resolve this issue by enabling multiple routers to work together, presenting a virtual gateway IP address to the devices. In the event of a failure, another router can take over, ensuring continuous connectivity.

## **Types of FHRP**

There are several types of FHRPs, each with different methods of providing redundancy and failover. The most common FHRPs are:

- **HSRP (Hot Standby Router Protocol)**: Developed by Cisco, HSRP is a Cisco proprietary protocol designed to provide gateway redundancy. It enables a group of routers to work together as a single virtual gateway. One router is elected as the active router, while others remain in standby mode. If the active router fails, the standby router takes over as the active router, ensuring uninterrupted service.

- **VRRP (Virtual Router Redundancy Protocol)**: VRRP is an open standard protocol, similar to HSRP, that also allows multiple routers to provide a redundant virtual gateway. Unlike HSRP, VRRP supports more than two routers and has a more standardized implementation across vendors.

- **GLBP (Gateway Load Balancing Protocol)**: GLBP is another Cisco proprietary protocol that not only provides redundancy but also allows for load balancing across multiple routers. Multiple routers can share the load of the traffic, rather than having a single active router.

## **Working Principles of FHRP**

FHRPs work by creating a virtual IP address that is shared among multiple routers. Devices on the network are configured to use this virtual IP as their default gateway. The FHRP protocol ensures that only one router at a time is active and responds to traffic for the virtual IP, while the other routers are in a standby state, ready to take over in case of a failure.

### **Key Components**

- **Virtual IP (VIP)**: The IP address that acts as the default gateway for devices on the network. This IP address is not bound to a specific physical router but is shared by multiple routers in the FHRP group.

- **Active Router**: The router that is currently responsible for forwarding traffic for the virtual IP address.

- **Standby Router**: The router that remains idle but is ready to take over as the active router if the active router fails.

- **Hello Messages**: Routers in the FHRP group exchange hello messages to monitor the status of each other. These messages help determine which router should be the active or standby router.

## **FHRP Failover Process**

The failover process ensures that if the active router becomes unavailable, another router can immediately take over without interrupting service. The failover procedure typically involves:

- The active router sending periodic hello messages to the standby routers.

- If a router stops receiving these hello messages from the active router, it assumes the active router has failed.

- The router with the highest priority or the one with the lowest IP address (depending on the protocol) takes over the role of the active router.

- The new active router starts responding to the virtual IP address, ensuring that the network can continue to route traffic.