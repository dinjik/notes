RIP is one of the oldest distance-vector routing protocols used to determine the best path based on the number of hops between routers.

![[how_rip_works.jpg]]

- **How it Works**: RIP uses hop count as its metric. Each hop from one router to another counts as 1, and the maximum number of hops allowed is 15, meaning that any network with more than 15 hops is considered unreachable.

- **Updates**: RIP routers broadcast their entire routing table to neighboring routers every 30 seconds. This makes RIP relatively simple but not as efficient in larger networks.

- **Advantages**: Easy to configure and widely supported across many devices.

- **Disadvantages**: Slow convergence times and limited scalability due to its hop count metric.