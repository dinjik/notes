
1. **Initial Connection**: The client initiates a connection to the server by specifying the server’s IP address and port (default is port 22). The client then requests the server’s public key to establish a secure communication channel.

2. **Key Exchange**: The client and server exchange cryptographic keys to agree on an encryption method. This ensures that all data transmitted is encrypted and secure.

3. **Authentication**: The server authenticates the client by checking the client's credentials. The client either enters a password or uses a private key to authenticate, depending on the configured authentication method.

4. **Session Establishment**: Once authenticated, the SSH session is established, and the client gains access to the remote server’s command line interface.

5. **Data Exchange**: The client and server can now securely exchange data. Commands can be executed remotely, files can be transferred, and other network resources can be accessed.

### Example of SSH in Practice

Consider a scenario where a system administrator needs to manage a remote server. The administrator uses SSH to access the server's command line interface from their local machine:

-  The administrator runs an SSH client, such as `ssh` in a terminal.
-  The administrator types the following command to initiate the connection:

```
ssh user@192.168.1.10
```

- The client sends a request to the server at IP address `192.168.1.10` on port 22.

- The server sends its public key to the client for verification.

- The client checks the server's key against the list of known keys. If it’s the first time connecting to the server, the client asks the user whether to trust the server's key.

- The user authenticates either with a password or with a private key. If using a private key, the client decrypts the private key and sends it to the server for authentication.

- Once authenticated, the administrator gains access to the server and can start running commands like:

```
ls /var/log
```

- The administrator can also transfer files securely using SFTP:

```
sftp user@192.168.1.10
```