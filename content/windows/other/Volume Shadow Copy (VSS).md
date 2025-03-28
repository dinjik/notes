---
icon: TiArticle
---
The Volume Shadow Copy Service (VSS) is a Windows <mark style="background: #FFB86CA6;">feature that allows you to create snapshots, or "shadow copies," of files or entire volumes. These snapshots capture the state of your data at a specific point in time, even if the files are in use.</mark> This is particularly useful for backups, as it ensures data consistency without **interrupting** applications or requiring downtime.

<mark style="background: #ABF7F7A6;">Volume Shadow Copy Service (VSS) is primarily designed to work at the volume level, meaning it creates snapshots of entire drives or partitions rather than targeting individual files or folders. </mark>

Key components of VSS include:

- **VSS Requester**: The software that initiates the creation of shadow copies, such as backup applications.
- **VSS Writer**: Ensures data consistency by coordinating with applications like SQL Server or Exchange during the snapshot process.
- **VSS Provider**: Manages the storage of shadow copies, which can be handled by the operating system or third-party solutions.

<mark style="background: #FF5582A6;">VSS is commonly used for features like System Restore, Windows Server Backup, and Shadow Copies of Shared Folders.</mark> It’s a vital tool for data protection and recovery in Windows environments.