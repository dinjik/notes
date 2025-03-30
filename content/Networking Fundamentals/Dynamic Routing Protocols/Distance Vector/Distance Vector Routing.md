Distance vector routing protocols are among the first TCP/IP routing protocols, relying on metrics to determine the best path to a destination. **The simplest metric is the hop count**, which counts the number of routers (hops) between the source and the destination. However, not all connections are equal, and administrators can adjust metrics to reflect the quality of connections. For example, a slower route might be given a higher metric, even if it is only one hop away.

Routers using distance vector protocols share their entire routing tables with neighboring routers. If new networks are added, routers will send their routing tables at regular intervals (usually every 30 seconds) to update each other on available routes.

When a router receives updates, it compares the metrics for reaching a network. If it finds multiple routes, it keeps only the route with the lowest metric. This process continues until the routers converge, meaning they all have consistent routing tables.

If a connection breaks, routers continue sending their routing tables, rediscovering alternative paths. This process works well for small networks but can lead to long convergence times in larger networks.

### Examples

- RIPv1
- RIPv2