## Stateless Address Autoconfiguration (SLAAC)

In SLAAC, devices configure their own IPv6 addresses without relying on a server to assign them. Instead, they use information advertised by routers in the network.

**How SLAAC Works:**

1. **Router Advertisement (RA):** Routers send periodic Router Advertisement (RA) messages to all devices in the network.
2. **Prefix Information:** The RA messages include network prefix information (e.g., the first 64 bits of the IPv6 address).
3. **Interface Identifier:** Devices use their own EUI-64 address to complete the remaining 64 bits of the IPv6 address.
4. **Self-Configuration:** The device combines the prefix and the interface identifier to create a full IPv6 address and configures itself.

## Stateful DHCPv6

In stateful DHCPv6, the server maintains a record of which IPv6 addresses have been assigned to which devices. The server is responsible for managing and tracking these addresses.

**Key Features:**

- The server assigns full IPv6 addresses to devices.
- The server keeps a database of assigned addresses and leases, similar to IPv4 DHCP.
- Provides additional information like DNS server addresses, domain search lists, and more.

## Stateless DHCPv6

SLAAC doesn’t provide all the details a device might need, such as DNS server addresses. In such cases, stateless DHCPv6 is used alongside SLAAC to provide additional configuration information. However, the DHCP server doesn’t assign addresses in this mode—it only provides supplemental details.

**Key Features:**

- Devices still use SLAAC for their IP address.
- DHCPv6 is only used to supply settings like DNS server addresses, domain names, etc.