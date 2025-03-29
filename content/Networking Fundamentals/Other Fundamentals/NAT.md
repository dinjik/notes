NAT translates private IP addresses within a local network into a public IP address used on the internet and vice versa. This allows multiple devices in a private network to share a single public IP address.

![[What-are-the-NAT-Types-Diagram.jpg]]

#### **How It Works:**

1. A device with a private IP (e.g., 192.168.1.10) sends data to the internet. The NAT router replaces the private IP with its public IP (e.g., 203.0.113.1).
2. When a response returns, the router translates the public IP back to the original private IP, ensuring the correct device receives the data.