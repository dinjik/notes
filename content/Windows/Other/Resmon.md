**Resmon** (Resource Monitor) is a tool in Windows that provides real-time data about your system's performance. It shows detailed information on CPU, memory, disk, and network usage, helping diagnose performance issues.

## How Resmon Works

Resmon collects data about your system’s resources and organizes it into tabs. It helps monitor and manage system performance by showing which processes and services are using system resources.

- Monitors **CPU**, **memory**, **disk**, and **network** usage
- Helps identify performance **bottlenecks** or resource hogs
- Provides detailed process-level data for troubleshooting

## Key Sections in Resmon

Resmon organizes its information into several key tabs.

|Tab|Description|
|---|---|
|**Overview**|Displays a summary of resource usage (CPU, Memory, Disk, Network)|
|**CPU**|Shows detailed CPU usage by process, threads, and services|
|**Memory**|Displays memory usage, including processes using the most RAM|
|**Disk**|Provides information on disk activity and processes using disk resources|
|**Network**|Shows network activity, including data usage by processes|

---

## Using Resmon

### Accessing Resmon

To open Resmon:

1. Press **Windows + R**
2. Type `resmon` and hit **Enter**

### Common Tasks

- **Monitor CPU Usage**  
    The **CPU** tab shows real-time CPU usage and breaks it down by processes, services, and threads. You can identify which processes are consuming CPU resources.

    ```plaintext
    Example: Process "chrome.exe" using 20% CPU
    ```

- **Track Memory Usage**  
    The **Memory** tab displays how much RAM is being used by each process, making it easy to spot high memory usage.

    ```plaintext
    Example: "taskmgr.exe" using 1 GB of RAM
    ```

- **Check Disk Activity**  
    The **Disk** tab shows which processes are using your disk and how much data is being read or written. This helps identify disk-intensive tasks.

    ```plaintext
    Example: "msedge.exe" reading 300 MB from the disk
    ```

- **Monitor Network Activity**  
    The **Network** tab tracks network data usage and shows which processes are using the network, such as downloading or uploading files.