The **TCP (Transmission Control Protocol) header** is a crucial part of the TCP segment, providing necessary information for establishing, managing, and ensuring reliable data transmission between devices. It consists of multiple fields that help in sequencing, acknowledgment, error detection, and flow control.

![[Pasted image 20250329110523.png]]
### **TCP Header Fields (Fixed 20 Bytes + Optional Fields)**

#### **1. Source Port (16 bits)**

Identifies the port number of the sending application on the source device. This allows multiple applications to run on the same device using different ports.

#### **2. Destination Port (16 bits)**

Specifies the port number of the receiving application on the destination device. This ensures the data reaches the correct application.

#### **3. Sequence Number (32 bits)**

Used for ordering data packets in a session. It represents the position of the first byte of data in the segment, helping to reassemble data correctly at the receiver's end.

#### **4. Acknowledgment Number (32 bits)**

Confirms the successful receipt of data. It contains the next expected byte from the sender, ensuring that the receiver has received all previous bytes correctly.

#### **5. Data Offset (Header Length) (4 bits)**

Indicates the size of the TCP header in 32-bit words (minimum 5 words = 20 bytes). This tells the receiver where the actual data payload begins.

#### **6. Reserved (3 bits)**

Reserved for future use and set to 0.

#### **7. Control Flags (9 bits)**

These flags control connection establishment, termination, and data flow:

- **URG (Urgent Pointer set)** – Indicates urgent data that should be processed immediately.
- **ACK (Acknowledgment)** – Confirms receipt of data.
- **PSH (Push Function)** – Requests immediate data delivery to the application layer.
- **RST (Reset)** – Forces a connection reset if an error occurs.
- **SYN (Synchronize)** – Used to establish a connection.
- **FIN (Finish)** – Initiates connection termination.

#### **8. Window Size (16 bits)**

Determines how much data the receiver can accept before requiring an acknowledgment. This is crucial for **flow control**, allowing the sender to adjust data transmission based on the receiver’s capacity.

#### **9. Checksum (16 bits)**

Used for error detection. It verifies the integrity of the TCP segment by calculating a checksum at the sender and validating it at the receiver.

#### **10. Urgent Pointer (16 bits)**

Only used when the **URG flag** is set. It specifies the offset of urgent data that should be processed immediately.

#### **11. Options (Variable Length)**

Optional field used for additional functionalities like:

- **Maximum Segment Size (MSS)** – Defines the largest segment a device can receive.
- **Window Scale** – Extends the window size for high-speed networks.
- **Timestamps** – Used for improved round-trip time (RTT) estimation.

#### **12. Padding (Variable Length)**

Added to ensure the header length is a multiple of 32 bits.