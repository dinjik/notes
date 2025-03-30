Hybrid routing protocols combine the features of both distance vector and link state protocols. They aim to take advantage of the strengths of both approaches while minimizing their weaknesses. The goal of a hybrid protocol is to provide more scalable, efficient, and faster convergence compared to pure distance vector or link state protocols.

### Key Features of Hybrid Routing Protocols

- **Combination of Distance Vector and Link State Characteristics**: Hybrid protocols use a distance vector method for sharing routing information between routers but also maintain a link state database for maintaining a comprehensive view of the network topology. This combination allows for the scalability of distance vector protocols and the fast convergence of link state protocols.

- **Split Horizon and Poison Reverse**: Hybrid protocols typically incorporate features like split horizon and poison reverse to prevent routing loops, which are common problems in distance vector protocols.

- **Routing Updates**: Like link state protocols, hybrid protocols send routing updates periodically. However, these updates are often more efficient, as they only include changes to the routing tables rather than complete information about the network topology.

- **Faster Convergence**: Hybrid protocols generally aim to converge faster than distance vector protocols but may not always reach the speed of pure link state protocols. They use algorithms that optimize the exchange of routing information to reduce convergence times.

### Examples

- EIGRP