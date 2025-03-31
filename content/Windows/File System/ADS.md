**Alternate Data Streams (ADS)** are a hidden feature of **NTFS** that allows additional data to be stored within a file without changing its size or normal contents. Originally designed for compatibility with macOS, ADS is often used by attackers to hide malicious files.

### Key Features

- **Hidden Storage** – Data stored in an ADS does not appear in file properties.
- **No Size Change** – The main file size remains unchanged, making detection difficult.
- **Executable Storage** – Malicious code can be hidden inside legitimate files.
- **Limited Detection** – Standard file explorers do not show ADS.

### ADS Structure

Files with ADS use a **colon (:) separator** to store additional data.

**Example Format:**

```plaintext
file.txt:stream_name
```

The main file (`file.txt`) remains unchanged, while `stream_name` holds hidden data.

### ADS Usage & Commands

#### Create an ADS

This command hides secret content inside a file.

```cmd
echo "Hidden message" > file.txt:hidden
```

#### View ADS

NTFS does not list ADS by default, but `dir /r` can reveal them.

```cmd
dir /r
```

#### Read ADS Content

To retrieve hidden data, use:

```cmd
more < file.txt:hidden
```

#### Delete ADS

To remove ADS, copy the main file to a new location.

```cmd
copy file.txt newfile.txt
del file.txt
rename newfile.txt file.txt
```

### ADS Threats

|**Risk**|**Description**|
|---|---|
|**Malware Hiding**|Attackers store malicious scripts inside ADS.|
|**Data Exfiltration**|Sensitive data can be secretly stored and transferred.|
|**Detection Challenges**|Standard antivirus software may not detect ADS-based malware.|

### ADS Detection & Prevention

- **Use Forensic Tools** – Tools like `streams.exe` from Sysinternals can detect ADS.
- **Restrict NTFS Permissions** – Prevent unauthorized ADS creation by managing file system security.
- **Monitor Suspicious Activity** – Regularly check files with `dir /r` and forensic analysis tools.

### ADS Workflow Diagram

```plaintext
+------------+       +----------------+       +--------------+
| User File  | ----> | ADS Created    | ----> | Hidden Data  |
+------------+       +----------------+       +--------------+
         \                     |
          \                    v
           \---------> Malware Execution (If Exploited)
```