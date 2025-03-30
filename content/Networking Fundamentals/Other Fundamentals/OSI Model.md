The OSI model is a conceptual framework that standardizes network communication by dividing it into seven layers. Each layer has specific functions and interacts with adjacent layers to ensure reliable data transfer across a network.

![[OSI-Model-Layers-1.jpg]]

### **Layer 1: Physical Layer**

This layer deals with the actual transmission of raw data bits over a physical medium. It defines hardware components, electrical signals, and transmission media.

- Responsible for bit transmission through cables, fiber optics, or wireless signals.
- Includes network devices like hubs, repeaters, and network cables.
- Defines data encoding, voltage levels, and signal timing.

### **Layer 2: Data Link Layer**

This layer provides reliable data transfer between directly connected devices and manages error detection and correction. It consists of two sublayers:

- **Logical Link Control (LLC)** handles error detection and flow control.
- **Media Access Control (MAC)** controls how devices access the network and defines unique MAC addresses.
- Uses protocols like Ethernet (IEEE 802.3) and Wi-Fi (IEEE 802.11).
- Devices operating at this layer include switches and network interface cards (NICs).

### **Layer 3: Network Layer**

This layer handles logical addressing, routing, and forwarding of data between different networks. It determines the best path for data to travel.

- Uses IP addresses for device identification and routing.
- Routers operate at this layer to direct data packets based on IP addresses.
- Supports protocols like IP (IPv4, IPv6), ICMP (for error reporting), and OSPF/BGP (for routing).

### **Layer 4: Transport Layer**

This layer ensures reliable communication between devices and manages data flow control and error recovery.

- Uses **Transmission Control Protocol (TCP)** for reliable, connection-oriented communication and **User Datagram Protocol (UDP)** for faster, connectionless communication.
- Handles segmentation and reassembly of data.
- Provides flow control to prevent network congestion.

### **Layer 5: Session Layer**

This layer establishes, maintains, and terminates communication sessions between applications.

- Manages session synchronization and recovery.
- Commonly used in applications requiring continuous communication, such as video calls and remote desktop connections.
- Protocols include NetBIOS, RPC (Remote Procedure Call), and SMB (Server Message Block).

### **Layer 6: Presentation Layer**

This layer translates, encrypts, and compresses data to ensure it is readable by the receiving system.

- Converts data formats between applications (e.g., encoding formats like ASCII, JPEG, MP3).
- Encrypts data for secure transmission using protocols like TLS/SSL.
- Compresses data to optimize transmission efficiency.

### **Layer 7: Application Layer**

This is the closest layer to the user and provides interfaces for applications to communicate over the network.

- Supports protocols like HTTP (web browsing), FTP (file transfer), SMTP (email), and DNS (domain name resolution).
- Handles direct user interactions with network services through software applications.