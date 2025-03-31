**Network Address Translation (NAT)** is a technique used in networking to modify the source or destination IP address of packets as they pass through a router or firewall. It enables multiple devices on a local network to share a single public IP address when accessing external networks, such as the internet. NAT is a fundamental component of modern networking and plays a crucial role in preserving the limited supply of public IP addresses and enhancing security.

![[What-are-the-NAT-Types-Diagram.jpg]]
### **How NAT Works**

NAT operates by translating private IP addresses used within a local network (LAN) to a public IP address for communication with external networks (WAN). When devices within the network want to access the internet, the router uses NAT to replace the private IP address of the sending device with its own public IP address. When the external network responds, the router then translates the public address back to the appropriate private IP address and forwards the response to the correct internal device.

This process allows multiple devices within a local network to access the internet using a single public IP address, making more efficient use of available IP addresses and adding an additional layer of security by hiding internal network details.

### **Types of NAT**

1. **Static NAT**: Static NAT creates a one-to-one mapping between a private IP address and a public IP address. This means that each internal device is assigned a specific, unchanging public IP address for external communication. Static NAT is typically used when a device inside the network needs to be accessible from outside the network, such as a web server or mail server.

2. **Dynamic NAT**: Dynamic NAT uses a pool of public IP addresses and dynamically assigns one of the available addresses to a device within the internal network when it initiates a connection to the external network. This method is more flexible than static NAT but doesn't guarantee a fixed public IP address for internal devices.

3. **Port Address Translation (PAT)**: Also known as **Overloading** or **NAT Overload**, PAT allows multiple devices within a private network to share a single public IP address. The router differentiates between different connections by tracking the source port numbers of each session. This allows hundreds or even thousands of internal devices to access external networks using just one public IP address.

### **Key Benefits of NAT**

- **Conservation of IP addresses**: NAT helps conserve the limited number of available public IPv4 addresses. Instead of assigning a unique public IP to each device, a single public IP can be used for all devices behind the router.

- **Security**: NAT provides a level of security by masking the internal IP addresses of the devices on a private network. External devices do not have direct access to these internal devices, reducing the exposure to potential attacks.

- **Flexibility**: NAT provides flexibility in network design by allowing devices on an internal network to change their IP addresses without affecting external communication. Only the NAT device needs to be aware of the internal structure.

- **Traffic Routing**: NAT allows for better control and management of network traffic by providing translation rules that direct incoming and outgoing packets based on IP and port numbers.

### **NAT Process**

When a packet is sent from a device within a private network to an external network, the NAT device performs the following steps:

1. **Translation**: The NAT device translates the source private IP address to a public IP address, keeping track of the session's port number.

2. **Routing**: The packet is forwarded to the external destination with the public IP address as the source address.

3. **Response Handling**: When the response comes back to the public IP address, the NAT device translates the destination public IP address back to the corresponding private IP address using its translation table and forwards the packet to the correct internal device.

### **NAT Table**

The NAT table is where the NAT device stores the mapping of private IP addresses to public IP addresses and port numbers. This table is essential for ensuring that traffic can be routed correctly and responses can be sent to the appropriate device within the network. The table keeps track of:

- **Internal IP Address**: The private IP address of the device initiating the connection.

- **External IP Address**: The public IP address assigned to the device for communication with external networks.

- **Port Number**: The source port number used to differentiate between multiple connections.

- **Translation State**: Information that helps the router identify whether the translation is valid and the connection is still active.