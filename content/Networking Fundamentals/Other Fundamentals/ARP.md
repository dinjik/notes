ARP (Address Resolution Protocol) is a network layer protocol used to map a known IP address to a MAC address (Media Access Control address) within a local network segment. This process allows devices in a network to discover the physical address of another device based on its IP address, which is essential for communication within a local area network (LAN).

![[arp-table3.png]]
### Key Features of ARP

- **IP to MAC Mapping**: ARP translates 32-bit IP addresses into 48-bit MAC addresses, which are used for communication within a local network.

- **Layer 2 and Layer 3 Interaction**: ARP operates at the interface between Layer 3 (Network Layer) and Layer 2 (Data Link Layer) in the OSI model, helping devices communicate across these layers.

- **Cache Mechanism**: ARP responses are cached temporarily to prevent the need for repeated lookups. The entries in the ARP cache are stored for a limited time (typically a few minutes).

- **Broadcast Nature**: ARP requests are broadcast to all devices within a local network, as the sender does not initially know which device holds the IP address it seeks to resolve.

### ARP Process

1. **ARP Request**: When a device wants to communicate with another device on the local network, it needs the MAC address corresponding to the destination IP address. If the MAC address is not already in the ARP cache, the device sends a broadcast ARP request.

2. **ARP Reply**: All devices on the local network receive the ARP request, but only the device with the matching IP address responds. The target device sends back an ARP reply that contains its MAC address.

3. **ARP Cache Update**: Upon receiving the ARP reply, the sender device updates its ARP cache with the newly learned IP-MAC mapping.

4. **Communication**: Once the IP-MAC mapping is known, the sender can use the MAC address to create data frames that are sent to the target device.