**STP (Spanning Tree Protocol)** is a network protocol used to prevent loops in Ethernet networks, particularly in redundant link topologies. It was developed by Dr. Radia Perlman in 1985 and is defined by IEEE standard **802.1D**. STP is essential in ensuring network stability, especially when multiple paths exist between switches. The protocol works by selecting a **loop-free** topology and blocking any redundant paths while allowing for a backup path in case the active path fails.

![[Pasted image 20250330214632.png]]

The core idea behind STP is to eliminate network loops, which can cause broadcast storms, multiple frame copies, and ultimately network outages. STP achieves this by creating a spanning tree, which is a logical view of the network that has no loops.

### **How STP Works**

1. **Bridge Protocol Data Units (BPDU)**: The protocol begins with the exchange of BPDUs. BPDUs are messages that are sent by network switches to share information about the network topology, such as the root bridge and path costs.

2. **Root Bridge Selection**: In STP, the network must have a **root bridge**. The root bridge is the logical center of the spanning tree and is selected based on the lowest bridge ID. The bridge ID is a combination of the **bridge priority** (a configurable value) and the **MAC address** of the switch.

3. **Path Selection**: After selecting the root bridge, each switch calculates the shortest path to the root bridge. STP uses the **lowest path cost** to determine the best route. Path cost is a value that reflects the distance from one switch to another, with each port type (Fast Ethernet, Gigabit Ethernet) having a predefined cost.

4. **Blocking Redundant Paths**: Once the root bridge is determined and the best path is calculated, STP will block any redundant paths to prevent loops. A loop occurs when multiple paths exist that form a cycle, allowing frames to circulate endlessly, causing network congestion.

5. **Convergence**: STP is a dynamic protocol, meaning that it converges (recalculates paths) when network topology changes occur. For example, if a link or switch fails, STP recalculates the paths to ensure the network remains loop-free.

### **STP States**

Switch ports can be in one of several states during the STP process:

- **Blocking**: The port does not forward frames and does not learn MAC addresses. It is used to prevent loops.

- **Listening**: The port listens for BPDUs to learn the network topology but does not forward any frames.

- **Learning**: The port learns MAC addresses but does not yet forward frames.

- **Forwarding**: The port forwards frames and actively participates in the network.

- **Disabled**: The port is administratively shut down and does not participate in STP.

### **STP Roles**

STP defines several port roles to determine how ports function within the topology:

- **Root Port (RP)**: The port on a switch that has the shortest path to the root bridge. A switch can have only one root port.

- **Designated Port (DP)**: The port that forwards frames towards the root bridge on behalf of other switches. There is one designated port per network segment.

- **Blocked Port**: A port that does not forward frames to prevent loops in the network.

- **Root Bridge Port**: The port on the root bridge that sends frames to the network.

### **STP Timers**

STP uses several timers to control its behavior:

- **Hello Time**: The interval between BPDUs sent by the root bridge. Default is 2 seconds.

- **Max Age**: The maximum amount of time a switch will retain a BPDU before discarding it. Default is 20 seconds.

- **Forward Delay**: The time a port spends in the Listening and Learning states before transitioning to the Forwarding state. Default is 15 seconds.

### **STP Types**

- **PVST+ (Per VLAN Spanning Tree Plus)**: Cisco’s proprietary implementation of STP that allows a separate spanning tree for each VLAN, enabling more efficient use of network resources.

- **RSTP (Rapid Spanning Tree Protocol)**: A faster version of STP (defined by IEEE 802.1w) that reduces convergence times by immediately transitioning ports to the Forwarding state when topology changes occur.

- **MSTP (Multiple Spanning Tree Protocol)**: A standard protocol (IEEE 802.1s) that maps multiple VLANs into fewer spanning tree instances, reducing the number of BPDUs and improving network performance.

### **Advantages of STP**

- **Prevents Network Loops**: The primary benefit of STP is its ability to prevent loops, ensuring the stability and performance of Ethernet networks.

- **Redundant Links**: STP allows the use of multiple network paths for redundancy, improving network resilience. In case of failure of a link, STP can quickly reroute traffic through another available path.

- **Scalable**: STP works in large-scale networks with multiple switches, ensuring that topology changes are handled correctly without causing disruptions.

### **Disadvantages of STP**

- **Slow Convergence**: Traditional STP (802.1D) has slower convergence times, which may cause network interruptions during topology changes.

- **Blocked Paths**: STP blocks redundant paths to prevent loops, which means that some links may remain unused under normal conditions, reducing the overall efficiency of the network.

- **Complexity in Larger Networks**: In large and complex networks, managing STP can become challenging, and improper configuration can lead to network instability.