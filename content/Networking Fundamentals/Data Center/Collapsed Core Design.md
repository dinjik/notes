A collapsed core network (also known as a collapsed core/distribution design) is a simplified network architecture that combines the Core Layer and the Distribution Layer into a single layer. This is particularly useful in smaller networks or environments where cost, simplicity, and manageability take priority over the high availability and scalability of a traditional three-tier architecture.

![[Pasted image 20250328222233.png]]

**In essence, a collapsed core network condenses the three-tier architecture down to two layers:**

- **Access Layer:** Connects end devices (like computers, printers, IP phones) to the network.

- **Collapsed Core Layer:** Combines the functions of both the Core and Distribution Layers, handling high-speed traffic forwarding, routing, policy enforcement, and interconnecting different parts of the network.

**The collapsed core design is often used in scenarios where:**

1. **Network Size is Small or Medium:** Smaller organizations or branch offices with limited networking needs can handle traffic with just one layer handling both core and distribution tasks.

2. **Cost Constraints:** Fewer devices and connections are required, so costs are lower. You don’t need separate core routers and distribution switches; instead, a single high-performance switch or router can handle both layers’ functions.

3. **Simplicity:** With fewer devices and a simplified design, management and troubleshooting become easier.