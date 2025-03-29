Cisco Discovery Protocol (CDP) is a proprietary network protocol used by Cisco devices to share information about each other on a local area network (LAN). CDP operates at the data link layer (Layer 2) and allows Cisco devices to automatically discover and identify one another. It is used primarily to gather information about neighboring Cisco devices, such as device type, IP address, and capabilities.

![[what-is-cdp.svg]]

**Characteristics**

CDP works by sending out periodic advertisements (called "hello" packets) on all of a device's interfaces, which other Cisco devices can listen to. These advertisements contain information about the device, including:

- Device ID
- Device type
- IP address
- Port and interface information
- Capabilities (such as whether a port is a trunk or an access port)

CDP does not require configuration on devices, as it is enabled by default on most Cisco devices. It operates in a "trust but verify" mode, meaning it relies on receiving information from neighboring devices to form a network map. One important thing to note is that CDP is specific to Cisco devices and does not work with non-Cisco equipment.