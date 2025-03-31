VLSM (Variable Length Subnet Mask) is a subnetting technique used in IP networking that allows a network to be divided into subnets of varying sizes. Unlike Fixed Length Subnet Mask (FLSM), where all subnets are the same size, VLSM enables more efficient use of IP addresses by allocating different subnet sizes based on the specific requirements of each subnet. This approach is particularly useful when dealing with networks that require different numbers of hosts in each subnet.

### **How VLSM Works**

In VLSM, the network is initially divided into subnets using a base subnet mask, and then each subnet can be further divided into smaller subnets based on the number of required hosts. This allows for subnets to be tailored to the needs of each network segment, rather than applying the same subnet mask to all segments.

The process involves assigning a subnet mask that fits the number of hosts required for a specific subnet. The more hosts a subnet needs, the larger the subnet mask and the more IP addresses are provided. Conversely, smaller subnets are assigned smaller subnet masks to conserve address space.

### **Steps to Implement VLSM**

1. **Determine the Network Requirements**: Identify the total number of IP addresses required and the number of subnets needed. Assess the host requirements for each subnet.

2. **Subnet the Network**: Start by creating subnets using a basic subnet mask. This initial subnetting gives an overview of the address space.

3. **Apply VLSM**: For each subnet, choose an appropriate subnet mask based on the number of hosts required in that subnet. Larger subnets will receive a smaller subnet mask, while smaller subnets will have a larger subnet mask.

4. **Assign Addresses**: Allocate IP addresses to each subnet based on the adjusted subnet mask. Ensure that the IP address range fits within the network address.

### **Example of VLSM Implementation**

Consider the network 192.168.1.0/24, and suppose the administrator needs to create four subnets with varying sizes:

- **Subnet 1**: Needs 50 hosts.
- **Subnet 2**: Needs 30 hosts.
- **Subnet 3**: Needs 10 hosts.
- **Subnet 4**: Needs 5 hosts.

#### Step 1: **Start with the Largest Subnet**

The first subnet needs 50 hosts, so it requires at least 64 addresses (2^6 = 64). Using a /26 subnet mask (255.255.255.192) provides 64 addresses, with 62 usable addresses.

- **Subnet 1**: 192.168.1.0/26 (usable IP range: 192.168.1.1 - 192.168.1.62)

#### Step 2: **Next Largest Subnet**

The second subnet requires 30 hosts, so it needs 32 addresses (2^5 = 32). A /27 subnet mask (255.255.255.224) provides 32 addresses, with 30 usable addresses.

- **Subnet 2**: 192.168.1.64/27 (usable IP range: 192.168.1.65 - 192.168.1.94)

#### Step 3: **Smaller Subnet**

The third subnet requires 10 hosts, so it needs 16 addresses (2^4 = 16). A /28 subnet mask (255.255.255.240) provides 16 addresses, with 14 usable addresses.

- **Subnet 3**: 192.168.1.96/28 (usable IP range: 192.168.1.97 - 192.168.1.110)

#### Step 4: **Smallest Subnet**

The fourth subnet needs 5 hosts, so it requires at least 8 addresses (2^3 = 8). A /29 subnet mask (255.255.255.248) provides 8 addresses, with 6 usable addresses.

- **Subnet 4**: 192.168.1.112/29 (usable IP range: 192.168.1.113 - 192.168.1.118)