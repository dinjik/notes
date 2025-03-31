FTP (File Transfer Protocol) is a standard network protocol used for transferring files between a client and a server over a TCP/IP-based network, such as the internet. It operates on a client-server model and is commonly used for sharing and managing files on remote servers. FTP was developed in the early 1970s and has been widely used since then for transferring large amounts of data.

### **How FTP Works**

FTP operates using two separate channels: the command channel and the data channel. The command channel is used for communication between the client and the server, while the data channel is used to transfer the actual files. FTP uses two main modes for data transmission: active mode and passive mode.

1. **Active Mode**: The client opens a random port for data transfer and the server connects to that port. This mode is more commonly used, but it can be problematic in cases where firewalls or NAT (Network Address Translation) are present.

2. **Passive Mode**: The client opens both the command and data channels, and the server opens a random port for data transmission. This mode is preferred when firewalls or NAT are involved, as it does not require the server to initiate a connection to the client.

FTP communicates through TCP, using port 21 for control messages and port 20 for data transfer in active mode. In passive mode, the data channel is assigned a random port by the server.

### **FTP Commands and Responses**

FTP commands are issued by the client to the server, and responses are returned from the server to the client. The commands are used to navigate directories, upload and download files, and manage file permissions.

- **Common FTP Commands**:
    
    - `USER`: Provides the username for login.
    - `PASS`: Provides the password for login.
    - `LIST`: Lists files in the current directory.
    - `RETR`: Retrieves (downloads) a file from the server.
    - `STOR`: Uploads a file to the server.
    - `QUIT`: Terminates the FTP session.
    - `CWD`: Changes the current working directory.
    - `MKD`: Creates a new directory.
    
- **FTP Responses**:
    
    - `200 OK`: Command was successful.
    - `331 Username OK, need password`: The server is waiting for a password.
    - `550 Permission denied`: Access to the requested file or directory is not allowed.

### **Use Cases for FTP**

- **File Sharing**: FTP is commonly used for sharing files between servers and clients, especially in scenarios where large files need to be transferred.

- **Web Hosting**: Web developers and administrators use FTP to upload files to web servers, such as HTML, CSS, and image files.

- **Backup and File Storage**: FTP is also used for backing up data from one server to another, as well as for file storage in a remote location.

### **Example of an FTP Session**

1. **Client Initiates Connection**: The client connects to the FTP server using the server's IP address and port 21.

2. **Authentication**: The client sends the `USER` command with the username and the `PASS` command with the password to authenticate.

3. **File Transfer**: The client can then issue commands like `LIST` to list files or `RETR` to download files from the server.

4. **Session Termination**: Once the file transfer is complete, the client sends the `QUIT` command to close the connection.