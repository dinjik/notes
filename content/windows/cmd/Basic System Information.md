---
icon: TiArticle
---
Before issuing commands, we should note that we can only issue the commands within the Windows Path. You can issue the command `set` to check your path from the command line.

```shell-session
C:\>set
ALLUSERSPROFILE=C:\ProgramData
[...]
LOGNAME=strategos
NUMBER_OF_PROCESSORS=2
```
## ver
Let’s use the `ver` command to determine the operating system (OS) version. The terminal below shows an example output.

```shell-session
C:\>ver                                                                                                                                              
Microsoft Windows [Version 10.0.17763.1821]
```
## systeminfo
To discover more in-depth information about the system, we can run the `systeminfo` command to list various information about the system such as OS information, system details, processor and memory. The terminal below shows a snippet of the displayed output.

```shell-session
C:\>systeminfo

Host Name:                 WIN-SRV-2019
OS Name:                   Microsoft Windows Server 2019 Datacenter
OS Version:                10.0.17763 N/A Build 17763
OS Manufacturer:           Microsoft Corporation
OS Configuration:          Standalone Server
OS Build Type:             Multiprocessor Free
[...]
```

## hostname
This command prints the name of the current host.

```shell-session
C:\>hostname
WINSRV2022-CORE
```

