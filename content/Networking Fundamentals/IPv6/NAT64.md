DNS64 is a DNS server feature used in IPv6-only networks. It allows IPv6-only devices to resolve IPv4-only hostnames by synthesizing an IPv6 address from an IPv4 address.

![[Pasted image 20250328215934.png]]

**Here's the step-by-step process:**

1. An IPv6-only client queries a DNS64 server for a hostname (e.g., example.com).
2. The DNS64 server looks up the IPv4 A record for the hostname.
3. If the server finds an IPv4 address (e.g., 192.0.2.1), it converts it into an IPv6 address by adding a predefined prefix (e.g., 64:ff9b::/96).
4. The synthesized IPv6 address (e.g., 64:ff9b::192.0.2.1) is returned to the client.

Finally, the IPv6-only client can use the synthesized IPv6 address to reach the IPv4 server.