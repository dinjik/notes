IPsec is a suite of protocols designed to provide secure communication over IP networks. It ensures data confidentiality, integrity, and authentication, making it essential for Virtual Private Networks (VPNs) and secure data transmission across untrusted networks like the internet.

### **Core Functions of IPsec**

IPsec provides three primary security services to protect data:

- **Confidentiality**: Encrypts data to prevent unauthorized access.
- **Integrity**: Ensures data has not been altered during transmission.
- **Authentication**: Verifies the identity of communicating parties.

### **IPsec Components**

- **Security Associations (SA)**: Defines the encryption and authentication parameters for communication between two devices.

- **Authentication Header (AH)**: Provides integrity and authentication but does not encrypt the data.

- **Encapsulating Security Payload (ESP)**: Encrypts data, provides integrity, and authenticates the source.

- **Key Management (IKE - Internet Key Exchange)**: Handles the secure exchange of cryptographic keys and the establishment of SAs.

### **IPsec Modes**

- **Transport Mode**: Encrypts only the payload of the IP packet, leaving the header intact. Used in end-to-end communications within a network.

- **Tunnel Mode**: Encrypts the entire IP packet, including the header, and encapsulates it inside a new IP packet. Commonly used in VPNs.

### **How IPsec Works**

IPsec establishes a secure connection in two phases:

- **Phase 1**: Uses IKE to authenticate peers and create a secure channel.
- **Phase 2**: Negotiates and establishes Security Associations for encrypted data transfer.

### **Protocols and Algorithms Used**

- **Encryption**: AES, 3DES
- **Integrity Verification**: SHA-2, MD5
- **Key Exchange**: Diffie-Hellman, IKEv1, IKEv2
- **Authentication**: Pre-shared keys, digital certificates, RSA