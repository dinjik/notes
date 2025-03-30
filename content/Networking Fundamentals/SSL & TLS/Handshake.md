The SSL/TLS handshake is the process by which a client and server establish a secure connection before data is transmitted. 

![[tls1.2.png]]

### Example Scenario

- A user visits a website using HTTPS (e.g., [https://example.com](https://example.com)).
- The client's browser initiates the SSL/TLS handshake by sending a "Client Hello" message.
- The server responds with its certificate and chosen cryptographic settings.
- The client validates the server’s certificate and generates a session key, which is sent to the server after encryption.
- The server decrypts the session key and the secure connection is established.
- Data is transmitted between the client and server securely, using the session key to encrypt and decrypt messages.