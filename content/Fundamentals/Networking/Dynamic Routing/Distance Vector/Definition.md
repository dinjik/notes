Distance Vector routing protocols are a class of dynamic routing protocols that determine the best path to a destination based on distance (hop count or a similar metric) and direction (vector, meaning the next-hop router). These protocols rely on the Bellman-Ford algorithm to compute the shortest path, with routers exchanging routing information with their directly connected neighbors.

Each router maintains a routing table containing a list of known networks, associated metrics (typically hop count), and the next-hop router for each destination. Distance Vector protocols operate under the fundamental principle of "routing by rumor," meaning that routers rely on information received from neighbors rather than having a complete view of the network topology.

## **Key Characteristics**

- **Metric-Based Path Selection**: Uses hop count or another numerical value to determine the best path, with lower values indicating better routes.

- **Periodic Updates**: Routers broadcast or multicast their entire routing table at regular intervals, regardless of whether changes have occurred. This can lead to excessive bandwidth consumption.

- **Neighbor-to-Neighbor Communication**: Routers share routing information only with directly connected neighbors, leading to slower network-wide updates.

- **Hop Count Limitation**: Most Distance Vector protocols impose a maximum hop count to prevent routing loops, which restricts scalability in large networks.

- **Loop Prevention Mechanisms**: Implement techniques such as split horizon, route poisoning, and hold-down timers to mitigate routing loops.

- **Simple Configuration**: Distance Vector protocols are relatively easy to set up and manage, making them suitable for smaller or less complex networks.

## **Common Distance Vector Protocols**

- **RIPv1**: A classful protocol using hop count as the metric, with a maximum hop count of 15. Lacks support for subnet masks, CIDR, and authentication.

- **RIPv2**: An improved version of RIPv1 that supports classless routing, CIDR, VLSM, and authentication.

## **Advantages**

- Simple to configure and manage, making them ideal for smaller networks.
- Do not require significant processing power or memory, making them efficient for lower-end routers.
- Basic loop prevention mechanisms enhance stability in smaller-scale environments.
## **Limitations**

- Slow convergence, meaning network changes take time to propagate, potentially causing temporary routing loops or black holes.

- High bandwidth usage due to periodic full-table updates, even when no changes occur.

- Limited scalability, as the hop count restriction prevents these protocols from being effective in large networks.

- Susceptible to routing loops and suboptimal path selection without additional mechanisms.
