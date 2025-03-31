The **UDP (User Datagram Protocol) header** is a lightweight, fixed-size header used in connectionless communication. Unlike TCP, UDP does not provide reliability, sequencing, or flow control. It is used when **speed and low overhead** are prioritized over reliability, such as in streaming, VoIP, and DNS queries.

![[udp-header-ipv4.png]]
### **UDP Header Fields (Fixed 8 Bytes)**

#### **1. Source Port (16 bits)**

Identifies the sending application’s port number. Helps the receiver determine where to send the response.

#### **2. Destination Port (16 bits)**

Specifies the receiving application’s port number. Ensures the data reaches the correct service.

#### **3. Length (16 bits)**

Indicates the total size of the UDP packet, including the **header (8 bytes) and data payload**. The minimum value is 8 (header-only).

#### **4. Checksum (16 bits) (Optional in IPv4, Mandatory in IPv6)**

Used for **error detection** to verify data integrity. If set to 0 in IPv4, no checksum is performed. In IPv6, checksum validation is required.