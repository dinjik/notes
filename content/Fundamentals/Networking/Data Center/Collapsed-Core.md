The collapsed core datacenter design is a streamlined architecture where the core and distribution layers of the traditional three-tier network model are combined into a single layer. This design is typically implemented in smaller or mid-sized datacenters to reduce the complexity and cost of network infrastructure while still providing the necessary functionality, scalability, and redundancy.

In a traditional three-tier network, there are three layers: the access layer, distribution layer, and core layer. The collapsed core design merges the distribution and core layers, creating a simpler, more efficient network topology. This approach is particularly suited for organizations that do not require the extensive scalability of larger datacenters but still want high availability and simplified management.

![[collapsed-core.png]]

The collapsed core design is becoming increasingly popular due to its cost-effectiveness, ease of management, and improved performance in smaller-scale environments.

## **Key Characteristics of Collapsed Core Design**

- **Simplified Network Topology**: By combining the core and distribution layers, the network becomes simpler, reducing the number of devices and connections needed.

- **Reduced Equipment Costs**: Fewer devices are required to maintain the same level of performance, leading to lower capital expenditures and reduced power consumption.

- **Improved Latency and Performance**: The shorter path between devices reduces latency and increases performance by eliminating the need for traffic to traverse multiple layers of the network.

- **Scalability**: While not as scalable as a full three-tier architecture, a collapsed core can still scale up to meet the demands of mid-sized networks. However, it may eventually need to be redesigned for very large environments.

- **High Availability**: By using redundant connections and devices within the collapsed core, the design can still ensure high availability and fault tolerance, though not to the same extent as in a full three-tier model.

## **Design Components of Collapsed Core**

- **Collapsed Core Layer**: This layer consolidates both the core and distribution functions into one. It is responsible for routing between VLANs and segments of the network. It often uses high-speed switches or routers that support advanced features such as Quality of Service (QoS), security, and routing protocols like OSPF or BGP.

- **Access Layer**: This layer connects end-user devices, servers, and storage systems to the network. It consists of access switches that provide connectivity to endpoints and connect directly to the collapsed core layer. In a collapsed core design, access switches are typically connected to the core layer through redundant paths to ensure fault tolerance.

- **Redundancy**: Despite the simplified topology, redundancy remains a key aspect of the collapsed core design. Typically, multiple links are used between the collapsed core and access layer switches to provide resilience. Additionally, redundant power supplies and network interfaces are often employed to prevent single points of failure.

- **Spine-Leaf Architecture (Optional)**: In some collapsed core designs, especially those transitioning toward software-defined networking (SDN) or modern datacenter designs, a spine-leaf architecture may be used. The spine-leaf model ensures efficient, low-latency routing between devices by connecting all leaf switches to spine switches. In a collapsed core, this architecture may be simplified into fewer devices, but the basic principles remain.

## **Advantages of Collapsed Core Design**

- **Simplified Management**: The reduction of layers and devices in the network simplifies management and troubleshooting. Network administrators can focus on fewer components while maintaining high performance.

- **Cost Savings**: Collapsing the core and distribution layers reduces the number of physical devices needed, lowering capital expenditures for hardware. Additionally, reduced complexity leads to lower operational costs for ongoing maintenance and support.

- **Faster Implementation**: With fewer devices and simpler design, the collapsed core network can be set up and configured more quickly than a traditional three-tier datacenter.

- **Improved Traffic Flow**: The direct connection between the access layer and the collapsed core reduces the number of hops and layers through which data must pass, improving overall network performance.

- **Flexibility for Smaller to Mid-Sized Environments**: This design is ideal for smaller datacenters or environments that do not require massive scalability but still need redundancy, high availability, and efficient performance.

## **Disadvantages of Collapsed Core Design**

- **Limited Scalability**: While suitable for small to mid-sized environments, the collapsed core design may not scale well for very large datacenters. As the network grows, it may require a more complex multi-tier architecture to handle the increased load.

- **Single Point of Failure**: Although redundancy is built into the collapsed core design, the core layer itself becomes a potential single point of failure. If the core layer experiences issues, it can affect the entire datacenter’s operation.

- **Potential for Congestion**: In high-traffic environments, combining core and distribution functions may lead to congestion or bottlenecks, especially if the equipment is not properly sized for the growing demands of the network.

- **Less Granular Control**: The simplified design may lead to less fine-grained control over routing and traffic management compared to a more traditional three-tier design, which has separate core and distribution layers.

## **Best Use Cases for Collapsed Core Design**

- **Small to Medium-Sized Datacenters**: Organizations with limited scalability needs that require a simpler, more cost-effective design. Examples include small enterprises or branch office datacenters.

- **Virtualized Environments**: Environments with a focus on virtualization, where the number of physical devices is reduced, and virtual machines handle much of the load. The collapsed core can support these environments with the appropriate configuration.

- **High-Availability Applications**: Organizations that require high availability but do not need the complexity or scale of a full three-tier datacenter.

- **Cost-Conscious Deployments**: Smaller organizations or startups looking to build efficient, high-performing datacenters without incurring the high costs associated with traditional designs.