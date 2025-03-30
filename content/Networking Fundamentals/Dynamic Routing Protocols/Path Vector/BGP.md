BGP is the protocol used for routing between different autonomous systems (ASes), such as between different ISPs or large networks.

![[609d0ae94662fb519f216016_bgp-as-diagram-1024x440.png]]

- **How it Works**: BGP uses a path-vector approach and makes routing decisions based on attributes like AS path, prefix length, and next-hop address. BGP maintains routing tables for each prefix and shares routing information across ASes.

- **Updates**: BGP sends updates only when there’s a change in the routing table, rather than periodically like RIP or OSPF.

- **Advantages**: Highly scalable and flexible, making it ideal for inter-domain routing (such as the Internet).

- **Disadvantages**: Slower convergence, complex configuration, and requires more memory and CPU resources.