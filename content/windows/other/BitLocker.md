---
icon: TiArticle
---
BitLocker provides the most protection when used with a Trusted Platform Module (TPM) version 1.2 or later. The TPM works with BitLocker to ensure that a device hasn't been tampered with while the system is offline.

![[preboot-startup-key.png]]

In _addition_ to the TPM, <mark style="background: #ABF7F7A6;">BitLocker can lock the normal startup process until the user supplies a personal identification number (PIN) or inserts a removable device that contains a startup key. </mark>These security measures provide multifactor authentication and assurance that the device can't start or resume from hibernation until the correct PIN or startup key is presented.

On devices that don't have a TPM, BitLocker can still be used to encrypt the operating system drive. This implementation requires the user to either:

- <mark style="background: #BBFABBA6;">use a startup key</mark>, which is a file stored on a removable drive that is used to start the device, or when resuming from hibernation
- <mark style="background: #FF5582A6;">use a password/PIN</mark>. This option isn't secure since it's subject to brute force attacks as there isn't a password lockout logic. As such, the password option is discouraged and disabled by default

![[preboot-pin.png]]