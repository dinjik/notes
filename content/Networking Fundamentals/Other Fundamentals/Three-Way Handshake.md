The TCP three-way handshake is a fundamental process used to establish a reliable connection between a client and a server before data transmission begins. It ensures both parties are synchronized and ready for communication, allowing for a controlled, error-free exchange of data.

![[Pasted image 20250329011223.png]]

**Step 1: SYN (Synchronize)**

- The process starts when the client sends a SYN packet to the server. This packet contains a randomly generated sequence number that serves as the starting point for the data packets the client will send.

**Step 2: SYN-ACK (Synchronize-Acknowledge)**

- Upon receiving the SYN packet, the server responds with a SYN-ACK packet. This serves two purposes: it acknowledges the client’s SYN by incrementing the client’s sequence number and includes the server’s own sequence number, which the client will need to acknowledge.

**Step 3: ACK (Acknowledge)**

- Finally, the client sends an ACK packet to the server, acknowledging the server’s sequence number. At this point, both the client and server have exchanged sequence numbers, and a reliable connection is established.

### **How Window Size Works in the Three-Way Handshake**

Window size is a key concept in TCP that determines how much data can be sent before an acknowledgment is required from the receiver. This mechanism plays a critical role in controlling the flow of data and ensuring efficient communication between the client and server.

**Window Size in SYN and SYN-ACK Packets**

- During the three-way handshake, both the client and server advertise their initial window sizes in the SYN and SYN-ACK packets. The window size indicates how much data the receiving party can handle at once without needing to send an acknowledgment.

**Data Transmission Based on Window Size**

- Once the handshake is completed and data transmission begins, the sender can transmit data up to the size of the window advertised by the receiver. For example, if the receiver’s window size is 10 KB, the sender can send 10 KB of data before waiting for an acknowledgment.

**Dynamic Adjustment**

- The window size is not fixed and can be dynamically adjusted during data transmission. If the receiver’s buffer starts filling up and processing becomes slower, the receiver may reduce the window size in subsequent ACKs to signal the sender to slow down. Conversely, if the buffer clears and more space becomes available, the receiver can increase the window size, allowing the sender to transmit more data at once. This dynamic adjustment ensures smooth data flow and efficient use of the network.