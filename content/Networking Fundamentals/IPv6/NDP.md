Neighbor Discovery Protocol (NDP) in IPv6 plays a critical role similar to ARP in IPv4 but with additional functionalities. 

![[Pasted image 20250328221337.png]]
## NDP Control Message Types

1. **Neighbor Solicitation (NS):** This message is used by a device to discover the MAC address associated with a specific IPv6 address on the local network. It sends out a request to find the hardware address of the neighbor device.

2. **Neighbor Advertisement (NA):** This response message is sent back from the device that was queried. It contains the MAC address associated with the IPv6 address requested in the Neighbor Solicitation message.

3. **Router Solicitation (RS):** When a device joins a network, it sends out a Router Solicitation message to ask routers on the network for their configuration information.

4. **Router Advertisement (RA):** Routers respond to Router Solicitation messages with Router Advertisement messages, providing devices with necessary configuration information, such as available prefixes, default gateway information, and DNS servers.

5. **Redirect:** This message is sent by a router to inform a device that it should send its traffic to a different router for a more optimal path to a destination.

## Key Points

- NDP operates through ICMPv6, which is a part of the IPv6 protocol suite.
- It allows devices to discover other devices on the network, maintain information about them, and automatically configure themselves to communicate effectively.
- NDP messages are encapsulated in IPv6 packets, meaning they utilize the same framework as other IPv6 traffic.