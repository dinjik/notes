IS-IS is a link-state routing protocol designed for large-scale networks, similar to OSPF, but without using IP as the underlying protocol.

- **How it Works**: IS-IS uses the Dijkstra algorithm to determine the best path based on link-state information. It supports both IPv4 and IPv6 without requiring a separate protocol for each.

- **Updates**: IS-IS exchanges link-state packets (LSPs) to share information about the network topology, allowing all routers to build a map of the network.

- **Advantages**: Highly scalable and efficient, commonly used in service provider networks.

- **Disadvantages**: Complex to configure and less commonly used than OSPF in enterprise environments.