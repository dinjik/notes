BitLocker is a **disk encryption feature** built into Windows that protects data by encrypting entire drives. It helps prevent unauthorized access in case of theft or loss. It requires **TPM (Trusted Platform Module)** or a startup key for authentication.

## How BitLocker Works

BitLocker encrypts data on the drive using **AES (Advanced Encryption Standard)** and decryption keys stored in a secure location. When the system starts, it verifies the integrity of the hardware and unlocks the drive if authentication succeeds.

- Uses **AES-128** or **AES-256** encryption
- Stores encryption keys in TPM, USB, or a password
- Protects system and data drives

## BitLocker Authentication Methods

BitLocker provides different ways to unlock the drive at startup.

|Method|Description|
|---|---|
|TPM Only|Automatically unlocks the drive if system integrity is verified|
|TPM + PIN|Requires a user-entered PIN for extra security|
|TPM + USB Key|Needs a USB drive with a startup key|
|Password|A user-set password to unlock the drive|
|Recovery Key|A 48-digit key used for recovery if authentication fails|

## Enabling BitLocker

BitLocker can be enabled through **Windows Settings**, **Control Panel**, or **Command Prompt**.

### Using GUI

1. Open **Control Panel > BitLocker Drive Encryption**
2. Select the drive and click **Turn on BitLocker**
3. Choose an authentication method
4. Save the **recovery key**
5. Encrypt the drive

### Using Command Line

```powershell
manage-bde -on C: -tpmpin -pin 123456
```

This enables BitLocker on drive **C:** with a **TPM + PIN** setup.

## BitLocker Recovery

If authentication fails, BitLocker requires a **recovery key** to unlock the drive. The key can be stored in:

- **Microsoft Account** (if enabled)
- **USB Drive**
- **Printed Copy**
- **Active Directory (AD)** (for enterprise users)

## BitLocker vs. Other Encryption Tools

|Feature|BitLocker|VeraCrypt|FileVault (Mac)|
|---|---|---|---|
|OS Integration|✅ Built into Windows|❌ Requires installation|✅ Built into macOS|
|Hardware Support|✅ Uses TPM|❌ No TPM support|❌ No TPM support|
|Encryption Strength|✅ AES-128/256|✅ AES-256|✅ AES-XTS|
|Open Source|❌ Closed-source|✅ Open-source|❌ Closed-source|
