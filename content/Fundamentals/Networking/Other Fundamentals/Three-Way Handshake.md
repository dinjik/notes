The Three-Way Handshake is a fundamental process used in the Transmission Control Protocol (TCP) to establish a reliable connection between two devices (usually a client and a server) over a network. It is a crucial part of TCP’s connection-oriented communication model, which ensures that both the sender and receiver are ready to transmit data before actual data transfer begins. The Three-Way Handshake is essential for ensuring data integrity, synchronizing sequence numbers, and allowing both devices to confirm that they are ready for communication.

![[Pasted image 20250330224205.png]]

The handshake is called "three-way" because it involves three steps, or exchanges, of messages between the two devices. These steps are:

1. **SYN (Synchronize)**: The client sends a message to the server to initiate the connection request.

2. **SYN-ACK (Synchronize-Acknowledgment)**: The server responds to the client’s request, acknowledging it while also sending its own request to synchronize the connection.

3. **ACK (Acknowledgment)**: The client sends an acknowledgment back to the server to confirm that the connection has been successfully established.

### Step-by-Step Process

1. **SYN (Synchronization) - Client to Server**: The process begins when the client, wishing to establish a connection, sends a TCP segment with the SYN (synchronize) flag set to 1. This packet also includes an initial sequence number (ISN), which is a random number used to keep track of the data being sent. This segment acts as a request to initiate a connection to the server.

2. **SYN-ACK (Synchronize-Acknowledgment) - Server to Client**: When the server receives the SYN request, it acknowledges the client’s request by sending a segment with both the SYN and ACK (acknowledgment) flags set to 1. The server’s segment also includes its own ISN, which will be used in future communications with the client. The acknowledgment number is set to the client’s ISN plus one, indicating that the server has received the client’s request.

3. **ACK (Acknowledgment) - Client to Server**: Upon receiving the SYN-ACK response from the server, the client sends a final acknowledgment (ACK) segment to the server. This segment includes the server’s ISN plus one, indicating that the client has received the server’s response and that the connection is now fully established.

Once this process is complete, a reliable and synchronized communication channel is established between the client and server, and data can begin to flow between them.

### Purpose and Importance

- **Connection Establishment**: The Three-Way Handshake ensures that both the client and server are ready for communication before data is exchanged.

- **Synchronization of Sequence Numbers**: Sequence numbers are critical in TCP to ensure that data is sent and received in the correct order. The Three-Way Handshake helps synchronize these numbers between the client and server.

- **Reliability**: This process ensures that both parties agree on the initial state of the connection, minimizing the chances of data loss or miscommunication during transmission.