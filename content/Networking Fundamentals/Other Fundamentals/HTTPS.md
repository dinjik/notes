HTTPS (Hypertext Transfer Protocol Secure) is the secure version of HTTP, designed to encrypt the communication between a client (e.g., web browser) and a server. It ensures that the data exchanged remains confidential and is protected against eavesdropping, tampering, and forgery. HTTPS uses SSL/TLS protocols to establish a secure, encrypted link between the client and server.

![[182565306-224f199a-da88-4a68-be81-707636cc1069-1.png]]

### Example Scenario

- A user enters a secure URL (e.g., [https://example.com](https://example.com)) in their browser.
- The browser connects to the server using port 443 and requests the server’s SSL/TLS certificate.
- The server responds with its certificate, and the browser verifies its authenticity using a trusted Certificate Authority (CA).
- The client and server establish a secure connection by exchanging cryptographic keys.
- The user’s data (e.g., credit card details or login credentials) is transmitted securely over the encrypted connection.
- Once the session is complete, the secure connection is terminated.

### Key Features of HTTPS

- **Encryption**: HTTPS encrypts the data transmitted between the client and server, ensuring that sensitive information (like passwords or credit card numbers) is protected from third-party interception.

- **Authentication**: HTTPS helps authenticate the identity of the server, ensuring the client is communicating with the correct server and preventing man-in-the-middle attacks.

- **Data Integrity**: HTTPS ensures that the data sent between the client and server cannot be altered during transmission, providing integrity and trust in the data being exchanged.

- **Port 443**: While HTTP uses port 80, HTTPS uses port 443 for communication.

- **SSL/TLS Protocols**: HTTPS relies on SSL (Secure Sockets Layer) or TLS (Transport Layer Security) to provide encryption and secure the communication between the client and server.

### Advantages of HTTPS

- **Privacy**: HTTPS prevents third parties from intercepting and reading the data exchanged between the client and server.

- **Security**: HTTPS guards against various types of attacks, including man-in-the-middle and data tampering attacks.

- **Trust and Credibility**: Websites that use HTTPS display a padlock symbol in the browser's address bar, signaling to users that their connection is secure and enhancing trust.

