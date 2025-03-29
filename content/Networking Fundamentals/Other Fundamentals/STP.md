Spanning Tree Protocol (STP) is a network protocol used in Ethernet networks to prevent loops in redundant links. Redundant links are often used in networks to provide fault tolerance and ensure continuous connectivity. However, these redundant links can create loops, causing broadcast storms and network instability. STP ensures that only one active path is used at a time while blocking any redundant paths that could cause a loop.

![[how_stp_works.jpg]]

## **How STP Works**  
STP works by selecting a root bridge and determining the best loop-free path from the root bridge to all other network devices.

![[364370ba0d81257a2eb59ea038f0563c.jpg]]

**Root Bridge Election**  
The root bridge is the central reference point in the STP network. The root bridge is selected based on the lowest bridge ID, which is a combination of priority and MAC address. The device with the lowest bridge ID becomes the root bridge.

**Bridge Protocol Data Units (BPDU)**  
STP uses Bridge Protocol Data Units (BPDUs) to communicate between switches. BPDUs contain information about the network topology, such as the root bridge, path cost, and port roles. Switches exchange BPDUs to calculate the best path and elect the root bridge.

**Path Selection**  
After the root bridge is elected, STP calculates the lowest-cost path to all other devices. The cost is based on the link speed, with higher-speed links having lower costs. Switches use BPDUs to decide which ports to block and which to leave open for forwarding traffic.

**Port Roles**  
STP defines several port roles to determine how a switch port will behave.

- **Root Port (RP)** is the port on a non-root switch with the best path to the root bridge.

- **Designated Port (DP)** is the port on a switch with the best path to the root bridge for a particular network segment.

- **Blocked Port** is a port that is not used for forwarding traffic, preventing network loops.

## **STP States**  
Switch ports go through different states during STP operation.

![[a0267-stp-port-states-chart-1.webp]]

- **Blocking:** The port does not forward traffic.

- **Listening:** The port listens for BPDUs but does not forward traffic.

- **Learning:** The port learns MAC addresses but does not forward traffic.

- **Forwarding:** The port forwards traffic and participates in normal network operations.

- **Disabled:** The port is administratively disabled.