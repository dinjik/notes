The `netstat` command displays network connections, routing tables, and various network statistics. It can show active connections, listening ports, network interface statistics, and more. This tool is invaluable for troubleshooting network problems, detecting unauthorized connections, and analyzing network traffic.

## Common `netstat` Command Syntax and Options

To run the `netstat` command, simply type `netstat` in the CMD window and press Enter. Below are some commonly used switches that modify the behavior of the command:

### 1. `netstat -an`

The `-an` option shows all active connections and listening ports in numeric form (without attempting to resolve domain names or service names).

```cmd
netstat -an
```

This is helpful for seeing the exact IP addresses and port numbers without DNS resolution delays.

### 2. `netstat -b`

The `-b` option displays the executable involved in creating each connection or listening port. This allows you to identify which applications are responsible for network connections.

```cmd
netstat -b
```

Note that you may need to run the command with administrator privileges to see the associated executable.

### 3. `netstat -o`

The `-o` option shows the Process ID (PID) associated with each active connection. This is useful for identifying which processes are using specific ports.

```cmd
netstat -o
```

You can cross-reference the PID with the Task Manager to find the corresponding process.

### 4. `netstat -r`

The `-r` option displays the routing table for the system, showing how network traffic is routed through different network interfaces and gateways.

```cmd
netstat -r
```

This is helpful for understanding the routing configuration and how data is directed across the network.

### 5. `netstat -s`

The `-s` option shows detailed statistics for each protocol (TCP, UDP, ICMP, etc.), including information such as the number of packets sent/received, errors, and more.

```cmd
netstat -s
```

This is useful for diagnosing issues related to specific network protocols.

### 6. `netstat -a`

The `-a` option lists all active connections and listening ports.

```cmd
netstat -a
```

This option shows both TCP and UDP connections that are actively listening for incoming traffic.

### 7. `netstat -p`

The `-p` option shows connections for a specific protocol, such as TCP or UDP.

```cmd
netstat -p tcp
```

This will display only TCP connections, making it easier to analyze specific types of network traffic.

### 8. `netstat -e`

The `-e` option shows Ethernet statistics, including the number of bytes sent and received, along with errors.

```cmd
netstat -e
```

This option is useful for monitoring network performance and identifying issues related to network interfaces.