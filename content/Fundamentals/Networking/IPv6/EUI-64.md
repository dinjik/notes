EUI-64 (Extended Unique Identifier - 64-bit) is a method for creating unique 64-bit identifiers used in networking, particularly for generating IPv6 interface identifiers. The method is primarily based on the MAC address of a device, which is typically a 48-bit address, and then extending it to a 64-bit address. The goal of EUI-64 is to ensure that devices have globally unique identifiers that can be used in an IPv6 network, particularly for stateless address autoconfiguration (SLAAC).

## **How EUI-64 Works**

The process of converting a MAC address to an EUI-64 address involves several steps:

1. **Start with the MAC Address**: A MAC address is 48 bits long and typically appears in hexadecimal format, such as `00:1A:2B:3C:4D:5E`.

2. **Split the MAC Address**: Divide the MAC address into two 24-bit halves.
    
    - Example: For `00:1A:2B:3C:4D:5E`, the first half is `00:1A:2B`, and the second half is `3C:4D:5E`.
        
3. **Insert FFFE in the Middle**: Inserting `FFFE` in between the two halves of the MAC address creates a 64-bit address. This is done to increase the size of the address from 48 bits to 64 bits.
    
    - Example: `00:1A:2B:FF:FE:3C:4D:5E`.
        
4. **Modify the Universal/Local (U/L) Bit**: The U/L bit is the 7th bit of the first byte in the MAC address. This bit indicates whether the address is globally unique or locally administered. In the process of EUI-64 conversion, the 7th bit is flipped to change the address from a globally unique address to a locally unique address (or vice versa).
    
    - Example: The first byte of the MAC address `00` in binary is `00000000`. Flipping the 7th bit changes it to `00000010`, which is `02` in hexadecimal.
        

As a result, the final EUI-64 address is created:

- Example: `02:1A:2B:FF:FE:3C:4D:5E`.

## **Advantages of EUI-64**

EUI-64 has several advantages when used for creating IPv6 interface identifiers:

- **Global Uniqueness**: The use of the MAC address ensures that the identifier is globally unique, as MAC addresses are assigned by manufacturers and are unlikely to repeat.

- **Stateless Address Autoconfiguration (SLAAC)**: EUI-64 allows for automatic and secure configuration of IPv6 addresses without requiring a central server or manual configuration, making it useful in dynamic and large-scale networks.

- **Consistency**: Since the EUI-64 identifier is based on the MAC address, the identifier remains consistent across different network segments, reducing the likelihood of address duplication.

## **How EUI-64 is Used in IPv6**

When generating an IPv6 address, EUI-64 is used as the interface identifier (the last 64 bits) in combination with a 64-bit network prefix. The resulting IPv6 address follows the format:

```
<64-bit Network Prefix>:<64-bit Interface Identifier>
```

For example, if the network prefix is `2001:0db8:85a3::/64` and the EUI-64 identifier is `02:1A:2B:FF:FE:3C:4D:5E`, the full IPv6 address will be:

```
2001:0db8:85a3::021a:2bff:fe3c:4d5e
```

This address can be used by the device for communication within an IPv6 network.

## **Considerations for Using EUI-64**

- **Privacy Concerns**: The use of a device's MAC address in creating IPv6 addresses raises privacy concerns because it makes devices identifiable across networks. To mitigate this, privacy extensions such as _Temporary Interface Identifiers_ (RFC 4941) can be used, which generate random addresses for devices, making it difficult to track devices by their MAC address.

- **Local vs. Global Addresses**: The EUI-64 method can generate both locally administered addresses (LAA) and globally unique addresses (GUA) depending on the modification of the U/L bit. This flexibility is useful in different network scenarios.

- **Compatibility with SLAAC**: EUI-64 is inherently compatible with Stateless Address Autoconfiguration (SLAAC), which is a feature of IPv6. SLAAC uses EUI-64 to automatically configure an interface identifier without requiring DHCP.

## **Use Cases for EUI-64**

- **IPv6 Stateless Address Autoconfiguration**: EUI-64 is commonly used in IPv6 networks to generate unique interface identifiers for devices without requiring manual configuration or the use of a DHCP server.

- **Network Interface Identification**: EUI-64 can be used in environments where devices require globally unique identifiers for communication, such as in large-scale networks or IoT deployments.

- **Efficient Address Management**: In networks that prioritize automated configuration and management, using EUI-64 allows devices to automatically generate IPv6 addresses that can be routed globally.
