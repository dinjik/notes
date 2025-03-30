The TCP/IP model is a practical framework that defines how data is transmitted across networks, including the internet. It consists of four layers, each handling specific networking tasks. Unlike the OSI model, which has seven layers, the TCP/IP model is more streamlined and closely aligns with real-world networking.

![[tcp-ip-model-layers-and-their-functions-1.png]]
### **Layer 1: Network Access Layer (Link Layer)**

This layer is responsible for transmitting data over the physical network medium and ensuring proper addressing within the local network.

- Manages hardware addressing (MAC addresses) and data framing.
- Includes Ethernet (wired networks) and Wi-Fi (wireless networks).
- Responsible for handling error detection and correction within a local network.
- Network devices operating at this layer include **network interface cards (NICs), switches, and access points**.
- Equivalent to the **Physical** and **Data Link** layers in the OSI model.

### **Layer 2: Internet Layer**

This layer handles the logical addressing of devices and the routing of data across different networks. It ensures that data reaches its intended destination.

- Uses **IP addresses** to identify devices and determine routing paths.
- **Routers** operate at this layer to forward packets between different networks.
- Supports key protocols like IPv4, IPv6, ICMP, and ARP.
- Equivalent to the **Network** layer in the OSI model.

### **Layer 3: Transport Layer**

This layer ensures reliable or fast communication between devices, depending on the protocol used. It manages data flow, error handling, and session management.

- **TCP (Transmission Control Protocol):** Provides **connection-oriented** communication, ensuring data is delivered in order and without errors (used for web browsing, emails, file transfers).
- **UDP (User Datagram Protocol):** Provides **connectionless** communication with minimal overhead, prioritizing speed over reliability (used for real-time applications like VoIP, gaming, and video streaming).
- Implements flow control to prevent congestion and optimize network performance.
- Equivalent to the **Transport** layer in the OSI model.

### **Layer 4: Application Layer**

This layer provides network services directly to end-users and applications, enabling communication between software over a network.

- Handles protocols for web browsing, email, file transfer, and other network services.
- Key protocols include HTTPS, HTTP, FTP, SMTP, DNS, and DHCP
- Equivalent to the **Session, Presentation, and Application** layers in the OSI model.