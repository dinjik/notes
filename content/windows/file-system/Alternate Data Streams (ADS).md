---
icon: TiArticle
---
### **What are Alternate Data Streams (ADS)?**

- ADS is a feature of the NTFS file system that allows files to contain more than one data stream.
- Every file in NTFS has at least one primary data stream (called `$DATA`), but ADS enables additional data to be stored in separate streams.
- These additional data streams are not visible in Windows Explorer.

### **How Do ADS Work?**

- Files in NTFS can have multiple data streams: one for the primary content and others for additional data.
- For example, a file called `example.txt` might contain the main content in the primary data stream and other data, such as metadata, in an alternate data stream.

### **Visibility of ADS**

- Windows Explorer does not show alternate data streams, so they are not visible by default.
- You can use Powershell or third-party tools to view and access the data in ADS.

### **Examples of ADS Usage**

- **Malicious Use**: Malware creators have used ADS to hide malicious code, making it harder to detect since it's not visible in normal file browsing.
- **Legitimate Use**: ADS can be used for non-malicious purposes, such as marking files downloaded from the internet. Windows stores information in ADS (e.g., `Zone.Identifier`) to indicate that a file came from an external source, which can trigger security checks.
### **How to View ADS**

- You can view ADS using cmd with the following command:

```
dir <file_path> -Stream *
```

