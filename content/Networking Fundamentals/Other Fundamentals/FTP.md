FTP (File Transfer Protocol) is a standard network protocol used to transfer files between a client and a server over a TCP/IP network. FTP operates on a client-server model, where the client requests files from a server or sends files to the server. FTP allows for efficient file management, offering a range of commands for uploading, downloading, deleting, and modifying files.

By default:

- **Port 21** is always used for control communication in both active and passive modes.
- **Port 20** is typically used for the data connection in Active Mode, but in Passive Mode, the data connection port is chosen by the server and informed to the client via the control channel.

![[b50a7b0e-4b81-4a19-8817-00deb57e648f_ftp-server-control-and-data-channels-graphic.avif]]
### Key Features of FTP

- **Two Channels**: FTP uses two separate channels for communication: a control channel for sending commands and a data channel for transferring files.

- **Authentication**: FTP typically requires users to authenticate with a username and password. Anonymous FTP allows public access without requiring authentication.

- **File Operations**: FTP supports various file operations, such as uploading, downloading, renaming, deleting, and managing directories.

- **Active and Passive Modes**: FTP can operate in active or passive mode, determining how the data connection is established. In active mode, the client opens a random port, and the server connects to it. In passive mode, the server opens a port for the client to connect to.

### FTP Command Set

- **USER**: Sends the username to the server.
- **PASS**: Sends the password to the server.
- **LIST**: Lists files and directories in the current directory.
- **RETR**: Retrieves a file from the server (download).
- **STOR**: Stores a file on the server (upload).
- **DELE**: Deletes a file on the server.
- **MKD**: Creates a directory on the server.
- **RMD**: Removes a directory on the server.
### FTP Data Types

- **ASCII Mode**: Transfers text files, converting line endings between different operating systems (e.g., Unix to Windows).
- **Binary Mode**: Transfers binary files (e.g., images, executables) without modification, ensuring the file’s integrity.

### FTP Security Considerations

- **Clear Text Transmission**: FTP transmits data, including usernames, passwords, and file contents, in clear text, making it vulnerable to interception and eavesdropping.

- **FTPS**: FTPS (FTP Secure) adds an SSL/TLS layer to FTP, providing encrypted communication and enhancing security.

- **SFTP**: SFTP (SSH File Transfer Protocol) is a secure alternative to FTP, using SSH for encrypted communication.