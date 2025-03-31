The Windows Command Prompt (CMD) provides a variety of commands that can be used to gather essential system information. These commands are useful for administrators, IT professionals, or users who need quick access to details about their system’s configuration, hardware, software, and network settings.

## Key System Information Commands

### 1. `systeminfo`

The `systeminfo` command provides detailed information about the system's configuration, including the OS version, build number, memory details, network adapter, and more. To use it:

```cmd
systeminfo
```

This command will display information such as the OS version, RAM, network adapter details, and uptime.

### 2. `hostname`

The `hostname` command simply returns the computer's network name or hostname. This is useful for identifying the system in a network environment. To use it:

```cmd
hostname
```

It will output the name of the computer.

### 3. `wmic os get caption`

The `wmic os get caption` command provides the exact version of the operating system running on the machine, including its edition (e.g., Windows 10 Pro or Windows Server 2019). To use it:

```cmd
wmic os get caption
```

### 4. `ipconfig`

The `ipconfig` command is used to display the IP configuration of a computer’s network interfaces. It shows the system's IP address, subnet mask, default gateway, and DNS servers. To use it:

```cmd
ipconfig
```

For more detailed information, use:

```cmd
ipconfig /all
```

### 5. `tasklist`

The `tasklist` command provides a list of all currently running processes on the system, along with their Process IDs (PID), memory usage, and other details. To use it:

```cmd
tasklist
```

### 6. `chkdsk`

The `chkdsk` command checks the integrity of the file system and disk for errors. It can also attempt to fix any issues found with the disk’s structure. To use it:

```cmd
chkdsk C:
```

Replace `C:` with the desired disk drive letter.

### 7. `msinfo32`

The `msinfo32` command launches the System Information tool, which provides a comprehensive overview of the system's hardware resources, software environment, and configuration settings. To use it:

```cmd
msinfo32
```

This will open the System Information window.

### 8. `netstat`

The `netstat` command shows the current network connections, routing tables, and various network statistics. It is commonly used for diagnosing network issues or identifying open ports. To use it:

```cmd
netstat -an
```

This command will list all active connections and listening ports.

### 9. `driverquery`

The `driverquery` command lists all installed drivers on the system, along with their status, version, and the module they are associated with. To use it:

```cmd
driverquery
```

### 10. `set`

The `set` command displays all environment variables and their values for the current session. These variables include system information such as the PATH variable, user profile, and more. To use it:

```cmd
set
```