OSPF is a link-state protocol that uses the Dijkstra algorithm to find the shortest path based on link costs.

![[image109.webp]]

- **How it Works**: OSPF routers exchange link-state advertisements (LSAs) to create a complete map of the network. Each router independently calculates the shortest path to every other router using the Dijkstra algorithm.

- **Updates**: OSPF routers only send updates when a change occurs in the network, making it more efficient than RIP. OSPF supports a hierarchical structure with areas to reduce routing table size and optimize performance.

- **Advantages**: Fast convergence and scalability for large networks. It also supports hierarchical design with areas.

- **Disadvantages**: More complex configuration and requires more resources than RIP.