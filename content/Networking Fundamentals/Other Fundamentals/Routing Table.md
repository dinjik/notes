A **routing table** is a crucial component in routers that determines how packets are forwarded to their destinations. When a packet arrives at a router, the first step is to remove the Layer 2 (data link) information. The router then checks its routing table to decide where to forward the packet based on the **destination IP address** found in the packet header. The process usually follows a **First In, First Out (FIFO)** method, but advanced routers can prioritize traffic using mechanisms like **Quality of Service (QoS)**.

![[Pasted image 20250329132653.png]]

### Routing Table Search Process:

Contrary to common belief, the router does not process the routes in the routing table sequentially from top to bottom. Instead, it checks the destination IP against all routes simultaneously. The router forwards the packet according to the route that best matches the destination.

![[Pasted image 20250329132337.png]]
### Zeros in Routing Tables:

A **0** in the destination or subnet mask means that "any" value is acceptable. For instance, in a route like `10.12.14.0/24`, the last octet can range between `1` and `254` within that network.

![[Pasted image 20250329132327.png]]
### Key Elements in a Routing Table:

- **Destination**: Defines the network ID. Any network directly connected to one of the router’s ports is listed here.

- **Gateway**: The next-hop router’s IP address. If the outgoing packet is not for a network directly connected to the router, the gateway directs the packet to the next router. If the network is directly connected, this column shows symbols like `*`, `0.0.0.0`, or `On-link`.

- **Genmask (Subnet Mask)**: Defines the network ID with the subnet mask. The router uses the term **Genmask** instead of the usual "subnet mask."

- **Flags**: These describe the destination route:

    - `U`: The route is active.
    
    - `H`: The route is for a specific host (complete IP address).
    
    - `G`: The route is directed to a gateway.
    
- **Metric**: Used to determine the best route. A lower metric value means the route is preferred. In case a primary route fails, the router automatically switches to a secondary route.

- **Type and Iface**: Indicate which port to use and its type. Common examples are `eth0`, `br0`, or `Gig0/0`.

- **Default Route (0.0.0.0)**: If no specific route matches the destination IP, the router forwards the packet to the default route, often leading to the Internet.

### Interpreting Routing Table Output:

When analyzing a routing table, it’s essential to understand what each column and entry represents.

![[Pasted image 20250329132457.png]]
#### Codes Legend

- `C`: Connected route (directly connected network).
- `S`: Static route (manually configured route).
- `L`: Loopback interface.
#### Routing Entries

- **192.168.4.0/24 (C):** This indicates that the router has a direct connection to the network 192.168.4.0 with a subnet mask of 255.255.255.0. Any packets matching this network will be sent out through eth1.

- **127.0.0.0/8 (L):** This is the loopback address, indicating that any packets sent to 127.0.0.1 (localhost) will use the lo (loopback) interface.

- **73.155.122.0/23 (C):** This shows a connected network that routes packets through eth0. The /23 indicates a subnet mask of 255.255.254.0, meaning this route encompasses a range of IP addresses.

- **0.0.0.0/0 (S):** This is the default route, with the S indicating it is a static route. It means that any packet not matching a more specific route will be sent to the specified next-hop IP address. This route is crucial as it determines how packets destined for unknown networks are handled.