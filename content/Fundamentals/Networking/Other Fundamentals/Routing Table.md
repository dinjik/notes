A routing table is a fundamental component of a router or layer 3 device that stores the routes to different network destinations. It helps routers determine the best path for forwarding packets to their intended destinations across the network. Routing tables are updated based on changes in network topology, routing protocols, or manual configuration.

The routing table consists of a list of entries, each specifying a destination network and the corresponding route information, which includes the next hop, the interface to use, and the metric for evaluating the best route. Routers consult the routing table to make forwarding decisions for incoming packets.

### Key Components of a Routing Table

- **Destination Network**: The destination IP address or subnet that defines the network to which a packet should be sent.

- **Subnet Mask**: Defines the network's size and scope, used with the destination IP address.

- **Next Hop**: The IP address of the next router or device on the path to the destination network.

- **Interface**: The specific network interface through which the packet will be forwarded.

- **Metric**: A value that indicates the "cost" of reaching the destination. This is often used by dynamic routing protocols to determine the best path.

- **Route Source**: Identifies how the route was learned, whether it's static, dynamic, or directly connected to the router.

### Types of Routing

- **Static Routing**: Routes are manually configured by an administrator. The router follows pre-defined paths to reach destinations. Static routing is simple but does not adapt to changes in the network automatically.

- **Dynamic Routing**: Routes are learned dynamically through routing protocols such as RIP, OSPF, or BGP. These protocols allow the router to automatically update the routing table based on changes in the network topology, making dynamic routing more flexible and scalable than static routing.

- **Directly Connected Routes**: Networks that are physically connected to the router are listed as directly connected routes in the routing table. These routes are automatically added and do not require manual configuration or routing protocols.

### How a Routing Table Works

When a packet arrives at a router, the router checks the destination IP address and compares it against the entries in the routing table. The router then selects the best route based on criteria like the longest match (prefix match) and the lowest metric, directing the packet to the next hop or final destination. If the router cannot find a matching route, the packet is either discarded or forwarded to a default route if one exists.

### Routing Table Example

|Destination Network|Subnet Mask|Next Hop|Interface|Metric|Route Source|
|---|---|---|---|---|---|
|192.168.1.0|255.255.255.0|192.168.1.1|eth0|10|Static|
|10.0.0.0|255.0.0.0|10.1.1.1|eth1|20|OSPF|
|0.0.0.0|0.0.0.0|192.168.0.1|eth2|30|Default Route|
