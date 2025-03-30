RIPv2 is an improved version of RIP that supports Classless Inter-Domain Routing (CIDR) and multicast updates.

- **How it Works**: RIPv2 uses the same hop count metric as RIP but allows for more flexible IP addressing and uses multicast (224.0.0.9) to send updates instead of broadcast.

- **Updates**: Like RIP, RIPv2 sends the entire routing table periodically, but it uses multicast to reduce unnecessary traffic.

- **Advantages**: Supports CIDR, making it more efficient in using IP address space. It is also backward compatible with RIP.

- **Disadvantages**: Still has the hop count limitation (15), which reduces scalability, and slow convergence times.