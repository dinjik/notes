SMTP (Simple Mail Transfer Protocol) is a protocol used for sending email messages between servers and from email clients to email servers. It is an application layer protocol that defines how email is routed across the internet and how email servers communicate with each other to deliver messages. SMTP is used for sending emails, while other protocols like IMAP and POP3 are used for retrieving and managing emails once they are received by the server.

### Key Features of SMTP

- **Push Protocol**: SMTP is a push protocol, meaning it is responsible for sending (pushing) emails to the destination server, not for retrieving them. It works by transferring the email from the sender’s mail server to the recipient’s mail server.

- **Text-Based Communication**: SMTP uses a text-based command and response format to exchange information between email clients and servers, and between mail servers themselves.

- **Stateless**: SMTP is a stateless protocol, meaning that each message is treated independently and there is no continuous connection between the sender and the recipient.

- **Relay Capability**: SMTP allows for email relaying, where an email server can forward a message to another server if the recipient is hosted on a different server.

### SMTP Process

1. **Client Connection**: The email client or sending server connects to the recipient's mail server on port 25 (default SMTP port) or port 587 (for submission with encryption).

2. **Server Authentication**: In many cases, authentication is required to send emails. This helps prevent abuse of the mail server for spamming purposes.

3. **Message Transmission**: The email client sends a series of SMTP commands to the server, which includes the sender's email address, recipient’s email address, subject, body, and any attachments.

4. **Mail Server Relay**: If the destination email server is not directly accessible, SMTP allows for mail relaying, where the mail server forwards the message to other intermediate mail servers until it reaches the final recipient's server.

5. **Delivery Confirmation**: Once the email reaches the recipient's server, it is delivered to the inbox. The sender’s server may receive a success or failure status in response.

### SMTP Commands

- **HELO**: This command is used to initiate communication with the server. It identifies the sender’s domain or the server initiating the communication.
- **MAIL FROM**: Specifies the sender's email address.
- **RCPT TO**: Specifies the recipient’s email address.
- **DATA**: Begins the email content section. It is followed by the body of the email, including the subject and message body.
- **QUIT**: Terminates the SMTP session.
- **VRFY**: Verifies if a particular email address exists on the server.
- **EHLO**: Extended HELO command, used by modern mail servers for extended features, like encryption.