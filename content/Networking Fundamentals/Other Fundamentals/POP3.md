POP3 (Post Office Protocol version 3) is an email protocol used by email clients to retrieve messages from a mail server. It operates on a client-server model, where the email client downloads messages from the server and stores them locally on the client device. POP3 is used for retrieving and managing email, typically in scenarios where users need offline access to their messages. Default port for POP3 communication. It is used for unencrypted communication.

### Key Features of POP3

- **Download and Delete**: POP3 typically downloads email from the server and deletes the email from the server, although some configurations allow for leaving a copy of the email on the server.

- **Offline Access**: Once emails are downloaded to the client, they can be accessed offline without needing an active internet connection.

- **Simple Protocol**: POP3 is a relatively simple and lightweight protocol, making it ideal for situations where the user does not need to keep emails synchronized across multiple devices.

### POP3 Operations

- **User Authentication**: The email client connects to the mail server and authenticates using a username and password.

- **Message Retrieval**: The email client sends a request to the server to retrieve email messages. POP3 downloads the emails from the server to the client’s local system.

- **Message Deletion**: By default, after downloading, POP3 deletes the emails from the server, leaving them only on the client machine. However, users can configure their email clients to leave messages on the server for a certain period.

### POP3 Command Set

- **USER**: Sends the username to the server for authentication.
- **PASS**: Sends the password to the server.
- **STAT**: Retrieves the number of messages and their total size.
- **LIST**: Lists all messages, including message numbers and sizes.
- **RETR**: Retrieves a specific message from the server.
- **DELE**: Marks a message for deletion from the server after it has been downloaded.
- **QUIT**: Ends the session with the server.