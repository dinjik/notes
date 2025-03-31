NTFS is the primary file system used by Windows for managing files on storage devices. It provides advanced features like security permissions, compression, and journaling to ensure data integrity.

### Key Features

- **Security** – Supports file-level permissions with Access Control Lists (ACLs).
- **Journaling** – Uses a log to track changes, reducing the risk of data corruption.
- **Compression** – Allows files and folders to be stored in a compressed format to save space.
- **Encryption** – Supports file encryption with Encrypting File System (EFS).
- **Large File Support** – Can handle files larger than 4GB, unlike FAT32.
- **Disk Quotas** – Limits how much disk space users can use.


### NTFS vs. FAT32

|Feature|NTFS|FAT32|
|---|---|---|
|**Max File Size**|16 TB (theoretical)|4 GB|
|**Security**|ACL-based permissions|None|
|**Journaling**|Yes|No|
|**Compression**|Yes|No|
|**Encryption**|Yes (EFS)|No|

### NTFS File Structure

NTFS organizes files using the **Master File Table (MFT)**, which keeps records of all files, their metadata, and locations on the disk.

**Key Components of MFT:**

- **File Records** – Contains file attributes and location data.
- **Attribute List** – Stores metadata like file names, sizes, and security settings.
- **Data Runs** – Defines where file data is physically stored on disk.

### NTFS Permissions

Permissions control who can access files and folders. They are assigned through ACLs, which include:

- **Full Control** – All actions, including deleting and modifying permissions.
- **Modify** – Allows editing but not changing security settings.
- **Read & Execute** – Can open files and run applications.
- **Read** – Only allows viewing files.
- **Write** – Enables creating and modifying files without deleting them.

### NTFS Workflow Diagram

```plaintext
+------------------+
|   File Request   |
+------------------+
        |
        v
+------------------+
|  NTFS Check ACL  |
+------------------+
        |
  Access Granted?  
    /     \
   Yes     No
   |        |
   v        v
Read/Write  Denied
```

### NTFS Commands

To manage NTFS permissions and features, use these common Windows commands:

```cmd
# Check disk for errors
chkdsk /f /r

# Change file permissions
icacls "C:\path\to\file" /grant User:F

# Enable file compression
compact /c "C:\path\to\file"

# View NTFS permissions
icacls "C:\path\to\file"
```