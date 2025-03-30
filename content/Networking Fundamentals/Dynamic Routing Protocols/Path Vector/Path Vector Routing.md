Path vector routing protocols are a type of distance vector protocol that add additional complexity to prevent routing loops and manage larger networks. They are typically used in environments where there are complex routing requirements and where policies must be enforced for routing decisions. Unlike traditional distance vector protocols, path vector protocols use a list of autonomous systems (ASes) or other route information to maintain an accurate view of the network topology.

In a path vector protocol, the key component is the path, which records the list of ASes that a packet passes through on its way to the destination. This ensures that routing loops are avoided, as a router can compare the AS path with its own to determine whether a route is valid or should be avoided. The primary protocol that uses path vector routing is Border Gateway Protocol (BGP), which is used to manage routing across the internet.

### Examples:

- BGP
