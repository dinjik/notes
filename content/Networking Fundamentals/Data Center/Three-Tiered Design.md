![[Pasted image 20250328222041.png]]

The primary purpose of redundant connections between the Access, Distribution, and Core Layers is to ensure that if one connection fails, traffic can still reach its destination through an alternative path. Think of it like having multiple routes on a map: if a major highway is closed, traffic can reroute along another highway (a secondary connection) to reach the destination. Redundant connections help prevent network downtime by maintaining connectivity, even in the event of failures.
## Access Layer (Bottom Layer)

- **Role:** The Access Layer is like the building’s entry doors and lobby. This is where employees, guests, and equipment (like computers and phones) enter and access the building. It connects all end devices like computers, phones, and printers to the network.
- **Functions:** This layer is responsible for allowing users into the network. It includes switches, access points, and security policies like authentication to ensure only authorized devices connect. For example, when you plug your laptop into a network jack or connect to Wi-Fi, you're accessing the network through this layer.
- **Example Devices:** Network switches and wireless access points.
- **Why It’s Important:** By having a dedicated layer for device connections, we can control which devices are allowed onto the network and monitor their activity more easily.

## Distribution Layer (Middle Layer)

- **Role:** The Distribution Layer is like the central security and traffic management center of the building. Imagine it as a control room that manages where people should go, checks for authorization, and directs groups to different areas based on their roles or needs.
- **Functions:** This layer aggregates data from the Access Layer and enforces policies and rules on traffic flow. It manages tasks like routing (directing data to where it needs to go), network filtering (deciding which data is allowed to move between different parts of the network), and load balancing (making sure that no single part of the network gets overloaded with traffic).
- **Example Devices:** Routers, Layer 3 switches (switches that can route traffic), and firewalls.
- **Why It’s Important:** The Distribution Layer ensures that data is moving efficiently and securely through the network. It also allows network administrators to enforce policies and segment the network. For instance, you might want to keep employee devices and guest devices on separate virtual networks for security reasons.

## Core Layer (Top Layer)

- **Role:** The Core Layer is the backbone of the network, like the main highways that connect major cities. It’s all about high-speed data transport and reliability, without much processing or filtering. This layer simply needs to be as fast and efficient as possible to move data across the network.
- **Functions:** This layer is responsible for quickly and reliably moving large amounts of data across the network. It handles high-speed switching and routing but avoids any extra processing or filtering (like firewalls or load balancing) to keep data moving as fast as possible.
- **Example Devices:** High-capacity routers and switches with fast data-forwarding capabilities.
- **Why It’s Important:** The Core Layer allows data to flow across the entire network, making it possible for users and applications on opposite ends of the network to communicate with each other. Since it’s designed for speed, it avoids anything that might slow down data movement.