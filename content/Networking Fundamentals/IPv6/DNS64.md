NAT64 is a network translation mechanism that allows IPv6-only devices to communicate with IPv4-only servers. It translates IPv6 packets into IPv4 packets and vice versa.

![[Pasted image 20250328220102.png]]

**Here’s how it works:**

1. The IPv6-only device sends a packet to the synthesized IPv6 address (e.g., 64:ff9b::192.0.2.1).
2. The NAT64 gateway receives the packet, removes the 64:ff9b::/96 prefix, and sends the packet to the corresponding IPv4 address (192.0.2.1).
3. The IPv4 server responds, and the NAT64 gateway translates the IPv4 packet back into an IPv6 packet.
4. The translated IPv6 packet is sent back to the IPv6-only client.