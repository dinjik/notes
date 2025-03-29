Link Layer Discovery Protocol (LLDP) is an open, industry-standard protocol defined by IEEE 802.1AB, used to allow devices on a network to advertise their identity and capabilities to neighboring devices. LLDP operates similarly to CDP, but it is not vendor-specific, meaning it works across devices from different manufacturers, unlike CDP, which is Cisco-specific.

![[What-is-LLDP-Protocol-Diagram.jpg]]

**Characteristics**

LLDP works by sending periodic advertisements (LLDPDU – Link Layer Discovery Protocol Data Units) to neighboring devices. These advertisements contain information such as:

- Device ID (system name)
- Device type
- Port name and number
- VLAN IDs
- Management IP address
- Capabilities (such as whether the device supports PoE, trunking, or access ports)

LLDP operates on Layer 2 of the OSI model and is designed to be used in heterogeneous networking environments where equipment from different vendors may coexist. It can be configured on any device that supports LLDP, allowing them to discover neighboring devices across vendor boundaries.