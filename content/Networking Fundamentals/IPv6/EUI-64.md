EUI-64 stands for Extended Unique Identifier, 64-bit, and it is a method used to generate a unique identifier for network interfaces. It is often used in IPv6 addressing to create a unique interface identifier from a 48-bit MAC address.

In the context of IPv6, the EUI-64 format allows a device to automatically generate a 64-bit interface identifier from its MAC address. This is important because IPv6 addresses consist of two parts:

1. A network prefix (the first 64 bits, assigned by a network).
2. A host identifier (the last 64 bits, unique to each device on the network).

EUI-64 ensures that the host identifier is globally unique if the MAC address is unique.

## How Is EUI-64 Generated?

**Start with the MAC Address:**

A MAC address is a 48-bit number, typically written in hexadecimal as six octets (e.g., 00:1A:2B:3C:4D:5E). Each octet is 8 bits, and the total size is 48 bits.

**Split the MAC Address into Two Halves:**

- **First 24 bits:** Organizationally Unique Identifier (OUI), which identifies the manufacturer.
- **Last 24 bits:** Network Interface Controller (NIC)-specific bits, which identify the specific device.

**Insert the "FF:FE" in the Middle:**

The EUI-64 format requires adding the hexadecimal sequence FF:FE between the OUI and the NIC-specific part. This transforms the 48-bit MAC address into a 64-bit identifier.

![[Pasted image 20250328220549.png]]

**For example:**

- **Original MAC:** 00:1A:2B:3C:4D:5E
- **After inserting FF:FE:** 00:1A:2B:FF:FE:3C:4D:5E

**Flip the Universal/Local (U/L) Bit:**

The seventh bit of the MAC address (part of the OUI) is called the Universal/Local (U/L) bit. In EUI-64, this bit must be inverted:

- If it is 0, change it to 1 (indicating locally administered).

**For example:**

- **First byte of MAC:** 00 = 00000000 in binary.
- **Flip the seventh bit:** 00000010 = 02 in hexadecimal.

**Resulting EUI-64 Identifier:**

After performing the above steps, the original 48-bit MAC address is transformed into a 64-bit EUI-64 address:

- **Original MAC:** 00:1A:2B:3C:4D:5E
- **EUI-64:** 02:1A:2B:FF:FE:3C:4D:5E