Hot Standby Router Protocol (HSRP) is a Cisco proprietary First Hop Redundancy Protocol (FHRP) designed to provide high availability and redundancy for default gateway services in IP networks. HSRP ensures that if the primary router fails, one of the standby routers can automatically take over, providing uninterrupted service for devices that rely on the default gateway.

![[Configure-HSRP-in-Cisco-IOS-Router.png]]

HSRP allows multiple routers to act as a single virtual router, with a shared virtual IP address. This virtual IP is used by devices as their default gateway. However, only one router (the active router) is responsible for forwarding traffic at any given time. Other routers are in standby mode, ready to take over if the active router fails.
## **HSRP Working Principles**

HSRP works by establishing a group of routers that share a virtual IP address, which acts as the default gateway for devices within the network. This group consists of three main roles: the **Active Router**, the **Standby Router**, and **Other Routers**.

- **Active Router**: The router in the HSRP group that is responsible for forwarding traffic for the virtual IP address. It is the default gateway for devices in the network.

- **Standby Router**: A router that remains in standby mode, ready to take over the role of the Active Router in the event of its failure.

- **Other Routers**: Any additional routers in the HSRP group that do not actively participate in the forwarding of traffic but are still part of the group for redundancy purposes.

The election process determines which router will take the role of the Active Router. If the Active Router becomes unavailable, the Standby Router will take over. The routers periodically exchange **hello packets** to maintain communication and monitor the status of the Active Router.

### **Key Components in HSRP**

- **Virtual IP Address**: The IP address shared by the routers in the HSRP group. Devices on the network use this as their default gateway.

- **Virtual MAC Address**: The MAC address associated with the Virtual IP address. This is used for traffic forwarding and is shared by the HSRP group. It is used by the Active Router to send traffic on behalf of the Virtual IP.

- **Hello Messages**: Sent by routers in the HSRP group to inform other routers of their presence and to check the status of the Active Router.

- **Priority**: Each router in the HSRP group has a priority value. The router with the highest priority becomes the Active Router. If two routers have the same priority, the router with the lowest IP address becomes the Active Router.

- **Preemption**: A feature that allows a higher-priority router to take over as the Active Router if it comes online after a failure.

## **HSRP Election Process**

1. The routers in the HSRP group exchange hello packets to discover each other.

2. The router with the highest priority becomes the Active Router. If priorities are equal, the router with the lowest IP address becomes the Active Router.

3. The Active Router starts forwarding traffic for the virtual IP address.

4. The Standby Router monitors the Active Router and is ready to take over if the Active Router fails.

5. If the Active Router fails (e.g., stops sending hello messages), the Standby Router takes over as the Active Router.

6. If the Active Router comes back online, the original Active Router may reclaim its role if preemption is enabled.

## **HSRP States**

Routers in the HSRP group go through several states during operation:

- **Initial**: The router is not yet participating in HSRP.

- **Learn**: The router is waiting to receive HSRP hello messages from other routers.

- **Listen**: The router is receiving HSRP hello messages and knows about other routers, but it is not yet the Active or Standby Router.

- **Speak**: The router sends hello messages to other routers in the HSRP group.

- **Standby**: The router is in standby mode, ready to become the Active Router if the current Active Router fails.

- **Active**: The router is the Active Router and is responsible for forwarding traffic for the virtual IP address.

## **HSRP Failover Process**

1. The **Active Router** sends hello messages to maintain its status. If it stops sending these messages, the **Standby Router** will take over as the Active Router.

2. The **Standby Router** transitions to the **Active** state and begins forwarding traffic for the virtual IP address.

3. If the original Active Router recovers, it will attempt to reclaim the Active Router role, but only if **preemption** is enabled.

4. The failover process is automatic and seamless, ensuring that there is minimal disruption to network connectivity.

## **HSRP Advantages**

- **Redundancy and High Availability**: HSRP ensures that the default gateway remains available even if one router fails.

- **Seamless Failover**: HSRP provides automatic failover to a standby router, ensuring minimal disruption.

- **Simple Configuration**: Configuring HSRP is relatively straightforward and does not require complex setups.

- **Compatibility**: HSRP is widely supported on Cisco devices, making it a reliable choice for networks built around Cisco infrastructure.

## **HSRP Limitations**

- **Single Active Router**: In HSRP, only one router is active at a time, which may lead to underutilization of available resources if the backup routers are idle.

- **Cisco Proprietary**: HSRP is a Cisco proprietary protocol and is not supported by non-Cisco devices, limiting its interoperability with other vendors' equipment.

- **Limited Scalability**: HSRPv1 supports up to 256 groups, while HSRPv2 supports up to 1024 groups. However, for very large networks with hundreds of routers, other solutions like GLBP may be more efficient.