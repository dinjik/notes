Subnetting is the process of dividing a larger network into smaller, more manageable sub-networks, known as subnets. It allows network administrators to optimize the use of IP address space, improve network performance, and enhance security by segmenting a network into distinct zones. Subnetting is an essential technique in IPv4 networking, enabling the efficient allocation of IP addresses and helping to overcome the limitations of address space in large networks.

In a subnetted network, a subnet mask is used to determine which portion of an IP address refers to the network and which part identifies the host within that network. By adjusting the subnet mask, network administrators can control the size of each subnet, effectively splitting a large network into smaller, more manageable units.

### How Subnetting Works

Subnetting works by taking an IP address and borrowing bits from the host portion to create additional network bits. The subnet mask determines the boundary between the network and host portions of the address, with the network portion defining the subnet and the host portion used to assign unique addresses to individual devices within that subnet.

1. **IP Address Structure**: An IPv4 address consists of 32 bits, divided into four octets (8 bits each). The address is typically written in dotted-decimal notation, such as `192.168.1.0`. The subnet mask, also a 32-bit number, works with the IP address to determine the network and host portions.

2. **Subnet Mask**: The subnet mask specifies which bits of the IP address are allocated to the network and which are used for hosts. The network portion is represented by `1` bits in the subnet mask, and the host portion is represented by `0` bits. For example, a subnet mask of `255.255.255.0` indicates that the first 24 bits are used for the network, and the remaining 8 bits are for host addresses within that subnet.

3. **Subnetting Process**:
    
    - The first step in subnetting is determining how many subnets are required for the network. The number of subnets can be calculated by borrowing bits from the host portion of the address.
        
    - Once the number of subnets is determined, the subnet mask is adjusted accordingly. Borrowing more bits increases the number of available subnets but reduces the number of hosts per subnet.
        
    - After determining the subnet mask, the next step is to calculate the network addresses for each subnet. This involves incrementing the network address by the value of the least significant bit in the subnet mask for each new subnet.
        
4. **Classful vs. Classless Subnetting**:
    
    - **Classful subnetting** was used in the early days of networking, where IP addresses were divided into classes (A, B, and C), and each class had a default subnet mask. Classful subnetting is now largely outdated.
        
    - **Classless Inter-Domain Routing (CIDR)** is the modern method used in subnetting. CIDR allows for more flexible allocation of IP addresses, without the constraints of classful addressing. CIDR notation is represented by an IP address followed by a slash and the number of network bits, such as `192.168.1.0/24`.
### Key Concepts of Subnetting

- **Network Address**: The first address in a subnet, which is used to identify the subnet itself. It cannot be assigned to a host.

- **Broadcast Address**: The last address in a subnet, used to send a message to all devices within the subnet. It also cannot be assigned to a host.

- **Valid Host Range**: The range of IP addresses between the network address and the broadcast address. These addresses can be assigned to devices within the subnet.

- **Subnet Mask**: Defines the division between the network and host portions of an IP address. A subnet mask can be written in dotted-decimal or CIDR notation.

- **CIDR Notation**: A method for representing the subnet mask using a slash followed by the number of network bits. For example, `192.168.1.0/24` represents a subnet mask of `255.255.255.0`.

### Steps for Subnetting

1. **Determine the Required Number of Subnets**: Consider the number of subnets needed for the network and how many bits should be borrowed from the host portion of the IP address to create those subnets.

2. **Choose the New Subnet Mask**: Modify the subnet mask to reflect the number of subnets required. This is done by adjusting the number of bits used for the network portion of the address.

3. **Calculate Subnet Addresses**: Calculate the network addresses for each subnet by incrementing the address by the value of the least significant bit in the subnet mask.

4. **Assign Host IPs**: After determining the subnet addresses, assign IP addresses to hosts within each subnet, ensuring that the network address and broadcast address are not used for hosts.