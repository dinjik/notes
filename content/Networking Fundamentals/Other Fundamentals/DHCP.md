DHCP (Dynamic Host Configuration Protocol) is a network protocol used to automatically assign IP addresses to devices on a network. Rather than manually configuring each device with a static IP address, DHCP allows devices to request an IP address from a server, which then assigns one from a predefined range. This simplifies network management, especially in large environments, and ensures that IP addresses are distributed efficiently.

### DORA

The DHCP process, commonly referred to as **DORA**, stands for **Discover**, **Offer**, **Request**, and **Acknowledge**. These are the four main steps that a device (client) goes through to obtain an IP address from a DHCP server.

![[Client.png]]

**Discover**  
The client sends a DHCP Discover message to the network to locate a DHCP server. This message is broadcasted because the client does not yet have an IP address and does not know the address of any DHCP server.

**Offer**  
The DHCP server receives the Discover message and responds with a DHCP Offer message. This message includes an available IP address, subnet mask, default gateway, and other relevant network configuration details. The server may offer several different IP addresses based on the DHCP configuration.

**Request**  
The client receives the Offer message(s) and selects one of the offers. It then sends a DHCP Request message back to the DHCP server, confirming the selected IP address and requesting it for assignment.

**Acknowledge**  
The DHCP server receives the Request message and responds with a DHCP Acknowledge message. This final message confirms that the client has been assigned the requested IP address, and the lease time is set. The client can now use the assigned IP address.

### Steps to Configure DHCP:

**Determine the DHCP Pool**  
Define the range of IP addresses that the DHCP server can assign. The pool should be within the usable IP range of your subnet, excluding the network address, broadcast address, and statically assigned IP addresses.

**Configure the DHCP Server**  
Set up the DHCP server by specifying the IP address pool, lease duration, default gateway, and DNS servers.

**Enable DHCP on Devices**  
Ensure that the devices on the network are set to automatically obtain an IP address (via DHCP). This typically means setting the device to "Obtain an IP address automatically" in its network settings.

**Test the Configuration**  
Once the DHCP server is configured and devices are set to use DHCP, test by connecting a client device to the network. The device should automatically receive an IP address from the DHCP pool.