PowerShell provides a set of powerful cmdlets that allow users and administrators to gather essential system data, manage local user accounts, and inspect network configurations. These cmdlets help simplify system monitoring, troubleshooting, and maintenance.

## Get-Process

The `Get-Process` cmdlet provides a detailed view of all running processes, displaying key information like CPU and memory usage, process ID, and more. This cmdlet is valuable for monitoring system performance and troubleshooting process-related issues.

### Example:

```powershell
PS C:\Users\dinjik> Get-Process
```

### Sample Output:

```
Handles  NPM(K)    PM(K)      WS(K)     CPU(s)     Id  SI ProcessName 
-------  ------    -----      -----     ------     --  -- -----------
     67       5      872        500       0.06   2340   0 AggregatorHost
```

## Get-Service

`Get-Service` allows the retrieval of information about the status of services on the machine, such as which services are running, stopped, or paused. This is helpful for managing services and ensuring essential services are active.

### Example:

```powershell
PS C:\Users\dinjik> Get-Service
```

### Sample Output:

```
Status   Name               DisplayName                           
------   ----               -----------
Stopped  Amazon EC2Launch   Amazon EC2Launch
Running  AmazonSSMAgent     Amazon SSM Agent
Stopped  AppIDSvc           Application Identity
```

## Get-NetTCPConnection

`Get-NetTCPConnection` displays current TCP connections, providing insights into both local and remote endpoints. This is similar to `netstat` and is useful for troubleshooting network issues and monitoring active connections.

### Example:

```powershell
PS C:\Users\dinjik> Get-NetTCPConnection
```

### Sample Output:

```
LocalAddress        LocalPort RemoteAddress       RemotePort State       AppliedSetting OwningProcess 
------------        --------- -------------       ---------- -----       -------------- -------------
[...]
::                  22        ::                  0          Listen                     1444          
10.10.178.209       49695     199.232.26.172      80         TimeWait                   0
0.0.0.0             49668     0.0.0.0             0          Listen                     424
0.0.0.0             49667     0.0.0.0             0          Listen    
```

## Get-FileHash

`Get-FileHash` generates hashes of files, useful for verifying file integrity and detecting tampering. This is especially important in security-related tasks like malware analysis.

### Example:

```powershell
PS C:\Users\dinjik\Documents\dinjik> Get-FileHash -Path .\ship-flag.txt
```

### Sample Output:

```
Algorithm       Hash                      Path 
---------       ----                      ----
SHA256          32D2FB3C22A23F[...]       C:\Users\dinjik\Documents\dinjik\flag.txt
```

## Get-ComputerInfo

The `Get-ComputerInfo` cmdlet provides a comprehensive overview of the system, including details about the operating system, hardware, and BIOS information. It’s especially useful for system administrators needing detailed machine stats.

### Example:

```powershell
PS C:\Users\dinjik> Get-ComputerInfo
```

### Sample Output:

```
WindowsBuildLabEx                                       : 20348.859.amd64fre.fe_release_svc_prod2.220707-1832
WindowsCurrentVersion                                   : 6.3
WindowsEditionId                                        : ServerDatacenter
WindowsInstallationType                                 : Server Core
```

## Get-LocalUser

`Get-LocalUser` lists all local user accounts on the system, showing whether they are enabled or disabled. This is useful for user account management.

### Example:

```powershell
PS C:\Users\dinjik> Get-LocalUser
```

### Sample Output:

```
Name               Enabled Description 
----               ------- -----------
Administrator      True    Built-in account for administering the computer/domain
dinjik            True    The beloved dinjik of this pirate ship.
DefaultAccount     False   A user account managed by the system.
```

## Get-NetIPConfiguration

`Get-NetIPConfiguration` provides detailed information about network interfaces, including IP addresses, DNS servers, and gateway configurations. It’s useful for diagnosing network configuration issues.

### Example:

```powershell
PS C:\Users\dinjik> Get-NetIPConfiguration
```

### Sample Output:

```
InterfaceAlias       : Ethernet
InterfaceIndex       : 5
InterfaceDescription : Amazon Elastic Network Adapter
NetProfile.Name      : Network 3
IPv4Address          : 10.10.178.209
```

## Get-NetIPAddress

`Get-NetIPAddress` displays detailed information about all IP addresses configured on the system, including those that may not be active. It’s useful for examining IP configurations across different interfaces.

### Example:

```powershell
PS C:\Users\dinjik> Get-NetIPAddress
```

### Sample Output:

```
IPAddress         : fe80::3fef:360c:304:64e%5
InterfaceIndex    : 5
InterfaceAlias    : Ethernet
AddressFamily     : IPv6
Type              : Unicast
PrefixLength      : 64
PrefixOrigin      : WellKnown
SuffixOrigin      : Link
AddressState      : Preferred
ValidLifetime     : Infinite ([TimeSpan]::MaxValue)
PreferredLifetime : Infinite ([TimeSpan]::MaxValue)
SkipAsSource      : False
PolicyStore       : ActiveStore
```