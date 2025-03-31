**Resource Monitor** (Resmon) is a built-in Windows utility that allows users to monitor system performance in real-time. It provides a detailed view of how system resources such as CPU, memory, disk, and network are being used. Resmon is an advanced tool that offers more granular control and information compared to the Task Manager, helping users diagnose performance issues, monitor resource consumption, and identify potential system bottlenecks.

![[Pasted image 20250331004750.png]]

Resource Monitor breaks down system resource usage into several categories, allowing users to track and analyze the activity of different components. It provides detailed insights into processes, services, and hardware utilization. This tool is particularly useful for troubleshooting performance issues, system optimizations, and monitoring critical resources during heavy system loads.

### Key Features of Resmon:

- **CPU Usage Monitoring**: Displays real-time CPU usage and shows which processes or services are using the most CPU resources.

- **Memory Usage**: Allows users to monitor physical memory usage, including which processes are consuming the most memory.

- **Disk Activity**: Provides detailed information on disk activity, including read and write operations and the processes involved.

- **Network Activity**: Displays real-time network usage, helping users identify which applications are sending or receiving data over the network.

- **System Summary**: Offers an overview of current system performance metrics, including CPU, memory, disk, and network usage.

## Accessing Resmon

You can access Resmon through several methods:

1. **Using the Run Dialog**: Press `Win + R`, type `resmon`, and press Enter.

2. **Using the Start Menu**: Type `resmon` in the search box (for Windows 10 or earlier) and select **Resource Monitor** from the results.

3. **Through Task Manager**: Open Task Manager by pressing `Ctrl + Shift + Esc`, click on the **Performance** tab, and then click on **Open Resource Monitor** at the bottom.

Once opened, Resmon displays a clean, detailed interface with multiple tabs that allow users to monitor various system resources.

## Key Tabs in Resmon

### 1. Overview Tab

The **Overview** tab provides a high-level summary of the system’s performance. It gives you an overview of CPU, memory, disk, and network usage.

- **CPU**: Shows the current processor usage, including the percentage of CPU usage, and a breakdown of active processes using the CPU.

- **Memory**: Displays the amount of physical memory used, including the total, available, and in-use memory.

- **Disk**: Provides the disk usage statistics, including read and write operations and the number of active processes on the disk.

- **Network**: Lists the processes that are sending or receiving data over the network, as well as the amount of data transferred.
### 2. CPU Tab

The **CPU** tab provides more detailed information about CPU usage.

- **Processes**: Lists all the running processes, their CPU usage percentage, and associated threads.

- **Services**: Displays the services running under each process and their CPU usage.

- **Associated Handles**: Shows all handles associated with the processes and the files they are using.

- **CPU Usage**: Provides a graphical representation of CPU load and performance.

### 3. Memory Tab

The **Memory** tab focuses on tracking physical memory (RAM) usage.

- **Processes**: Displays processes consuming memory resources.
- **Physical Memory**: Shows total, used, and available physical memory.
- **Commit Charge**: Displays the amount of virtual memory being used by the system.
- **Hard Faults**: Tracks memory page faults that occur when the system has to retrieve data from disk instead of RAM.

### 4. Disk Tab

The **Disk** tab provides real-time disk activity monitoring.

- **Processes with Disk Activity**: Lists all processes that are actively reading from or writing to the disk.
- **Disk Activity**: Displays the amount of data being read from and written to the disk in real-time.
- **Disk Usage**: Shows active processes and their disk I/O (input/output) statistics.
- **Total Disk Activity**: Displays the overall disk throughput, which can be used to identify high disk activity that might be slowing down the system.

### 5. Network Tab

The **Network** tab shows detailed information about network activity.

- **Processes with Network Activity**: Displays the processes that are sending or receiving data over the network, including their local and remote addresses.
- **TCP Connections**: Provides information about active TCP connections, including the local address, remote address, and the current status of each connection.
- **Network Utilization**: Shows the current data transfer rate for network interfaces, including the number of packets sent and received.

## Key Features of Resmon

### Real-Time Resource Monitoring

Resmon provides real-time monitoring of system resources. This allows users to view up-to-date information on CPU usage, memory consumption, disk activity, and network traffic.

### Performance Troubleshooting

Resmon helps identify performance bottlenecks by showing which processes are consuming the most resources. This can be crucial for troubleshooting issues such as high CPU usage, memory leaks, or excessive disk I/O.

### Detailed Process Information

Unlike Task Manager, which provides a basic view of system resource usage, Resmon offers more detailed insights. It allows users to view not only CPU and memory usage but also associated handles, services, and network activity related to each process.

### Disk and Network Monitoring

The ability to monitor disk I/O and network activity makes Resmon especially useful for troubleshooting issues related to disk performance or network congestion. It allows users to track specific processes that may be causing slow performance or high disk/network utilization.

### Resource Overview and Summary

The **Overview** tab provides a useful summary of system health by showing the current state of CPU, memory, disk, and network usage in one place. This helps users quickly assess overall system performance.