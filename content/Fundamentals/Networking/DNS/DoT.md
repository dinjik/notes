DNS-over-TLS (DoT) is a protocol that secures Domain Name System (DNS) queries by encrypting them using Transport Layer Security (TLS). Traditional DNS queries are sent in plaintext over UDP or TCP, making them susceptible to interception, eavesdropping, and manipulation. DoT addresses these vulnerabilities by encapsulating DNS requests within TLS, which ensures that DNS traffic is encrypted and protected from third parties, such as ISPs, attackers, or government entities.

DoT operates over TCP port 853 and establishes a secure, encrypted connection between the client (e.g., a device or DNS resolver) and the DNS server. This encryption ensures that DNS queries and responses are kept private, preventing unauthorized access and protecting users' privacy from surveillance and malicious tampering. Unlike DNS-over-HTTPS (DoH), which uses HTTPS, DoT uses TLS directly for securing the communication, offering a more specialized approach to DNS privacy.

## **Key Characteristics**

- **Encrypts DNS Traffic**: Secures DNS queries and responses using TLS, ensuring that all data transmitted between the client and server is encrypted.

- **Operates Over TCP Port 853**: DoT specifically uses port 853 for encrypted DNS queries, distinguishing it from traditional DNS traffic on port 53.

- **Privacy and Security**: Prevents DNS eavesdropping, spoofing, and tampering by encrypting DNS traffic, protecting user privacy from third-party surveillance.

- **Simpler Protocol**: Unlike DNS-over-HTTPS, which operates over the more general HTTPS protocol, DoT is specifically designed for encrypting DNS traffic, making it more straightforward and optimized for this purpose.

- **Ideal for Network Security**: Provides a means for securing DNS queries within enterprise environments or situations requiring specific DNS protection without necessarily encapsulating other web traffic.
 
## **How DNS-over-TLS Works**

When a client needs to resolve a domain name, it sends a DNS query to a DNS server over a secure TLS connection established on port 853. This process begins with a TLS handshake to verify the identity of the server and establish encryption parameters. Once the secure connection is established, DNS requests are sent as encrypted data packets, ensuring that the content is protected from eavesdropping. The server processes the DNS request and returns the response over the same encrypted channel. The entire exchange ensures confidentiality and integrity of the DNS communication.

## **Advantages**

- **Prevents DNS Eavesdropping**: Encrypts DNS queries to prevent attackers, ISPs, or any unauthorized parties from intercepting or viewing the content of DNS queries and responses.

- **Bypasses DNS-based Censorship**: Helps avoid DNS filtering and blocking mechanisms imposed by network administrators, ISPs, or government entities.

- **Maintains DNS Integrity**: Ensures that DNS queries are not altered or tampered with during transmission, reducing the risk of DNS spoofing and man-in-the-middle (MITM) attacks.

- **Improved Privacy**: Helps protect user data by encrypting DNS requests, ensuring that personal browsing behavior cannot easily be tracked by third parties.

- **Compatibility with Existing Infrastructure**: Since DoT operates over TCP, it is relatively easier to integrate into existing systems and is widely supported by modern DNS resolvers and clients.

## **Limitations**

- **May Bypass Enterprise DNS Security**: Organizations that use DNS-based security solutions (e.g., DNS filtering or monitoring) may face challenges in managing or monitoring DoT traffic unless it is explicitly configured.

- **Increased Latency**: Establishing a secure TLS connection and encrypting DNS traffic introduces overhead that can increase the overall latency of DNS resolution compared to unencrypted DNS.

- **Requires TLS Support**: Both the client and the DNS resolver need to support and configure TLS for DoT to function, which may not be supported on all systems by default.

- **Limited Use Beyond DNS**: While DNS-over-HTTPS also provides encryption, DoT is focused solely on securing DNS traffic and does not secure other types of web traffic.