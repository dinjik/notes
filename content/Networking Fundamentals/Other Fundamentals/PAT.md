PAT is a specialized form of NAT that assigns a unique port number to each internal connection, allowing multiple devices to share a single public IP while keeping their sessions separate. 

![[PAT.jpg]]
#### **How It Works**

1. A device (e.g., 192.168.1.10) sends data to the internet through a source port (e.g., 12345).
2. The NAT router replaces the source IP with its public IP (203.0.113.1) and assigns a unique port (e.g., 54321).
3. When a response arrives at 203.0.113.1:54321, the router maps it back to the original internal device at 192.168.1.10:12345.

