Decapsulation is the reverse process of encapsulation. It occurs as data travels upward through the layers of the OSI or TCP/IP model on the receiving device. In decapsulation, each layer removes the corresponding header (and sometimes trailer) that was added during encapsulation, passing the remaining data to the next layer above until it reaches the application layer.

### Process of Decapsulation

**Physical Layer**:

- The physical layer receives the incoming bits and converts them into a frame of data.

- It removes the physical signaling and passes the frame to the Data Link layer.

2. **Data Link Layer**:

- The data link layer receives the frame and strips off the data link layer header (e.g., Ethernet header) and trailer (e.g., Frame Check Sequence).

- It checks for any errors in the frame using the error-checking information (e.g., CRC) and ensures the frame is valid.

- After removing the header and trailer, it passes the remaining packet to the Network layer.

**Network Layer**:

- The network layer receives the packet and removes the IP header.

- It checks for routing information, such as the destination IP address, and ensures that the packet has reached the correct destination.

- Once the IP header is removed, it forwards the remaining segment to the Transport layer.

**Transport Layer**:

- The transport layer receives the segment, strips off the transport layer header (e.g., TCP or UDP header), and ensures that the data is intact and correctly ordered (if necessary).

- It verifies things like the source and destination ports, sequence numbers, and flow control.

- After removing the header, it passes the remaining data to the Application layer.

**Application Layer**:

- The application layer receives the data and makes it available to the application (e.g., email client, web browser).

- The data is now in its original form, ready for the application to process and use.