## WPS (Wi-Fi Protected Setup):

Introduced in 2006 to make connecting devices easier. Insecure and replaced by DPP - Device Provisioning Protocol (Wi-Fi Easy Connect) in WPA3.

![[Pasted image 20250328214107.png]]

**Methods:**

- **PIN:** Uses an 8-digit code but is vulnerable to brute force attacks.
- **Push Button:** More secure, but still risks unauthorized access.

## DPP (Device Provisioning Protocol)

DPP is a newer and more secure protocol that aims to replace WPS. It offers several methods for connecting devices to a Wi-Fi network, including:

**Methods:**

- Scanning a QR code with a smartphone or other device.
- **NFC (Near-Field Communication):** Tapping two NFC-enabled devices together.
- Entering a passphrase manually.

## WPA2 (Wi-Fi Protected Access 2)

Introduced in 2004. Uses AES (Advanced Encryption Standard) for robust encryption. CCMP (Counter Mode with Cipher Block Chaining Message Authentication Code Protocol) replaces TKIP.

**Offers two modes:**

- **Personal Mode (Pre-Shared Key, PSK):** For home networks.
- **Enterprise Mode (802.1X):** For enterprise-grade networks with a RADIUS server.

**Vulnerabilities:**

- WPA2-Personal is susceptible to brute-force attacks on weak passwords.
- **KRACK (Key Reinstallation Attack)** exposed vulnerabilities in WPA2.

## WPA3 (Wi-Fi Protected Access 3):

Introduced in 2018 for modern and robust security.

**Key features:**

- **SAE (Simultaneous Authentication of Equals):** Secure handshake, resists dictionary attacks, and offers forward secrecy.
- **Protected Management Frames (PMF):** Mandatory protection against deauthentication attacks.
- **DPP (Device Provisioning Protocol):** Simplifies secure setup for IoT devices without passwords.
- **Individualized Encryption:** Encrypts traffic separately for each device, even on open networks.