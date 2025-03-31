DNS-over-HTTPS (DoH) is a protocol designed to enhance the privacy and security of Domain Name System (DNS) queries by encrypting them using HTTPS. Traditional DNS queries are sent in plaintext over UDP or TCP, making them vulnerable to interception, eavesdropping, and manipulation. DoH mitigates these risks by encapsulating DNS queries within HTTPS requests, preventing unauthorized parties from viewing or tampering with the queries.

DoH operates over port 443, the same port used for encrypted web traffic. This makes it harder for network administrators or attackers to distinguish DNS queries from normal HTTPS traffic. By encrypting DNS requests, DoH protects user privacy, prevents DNS-based censorship, and enhances security against attacks such as DNS spoofing and man-in-the-middle (MITM) attacks.

## **Key Characteristics**

- **Encrypts DNS Queries**: Uses HTTPS to secure DNS requests, preventing exposure to attackers or third parties.

- **Resolves Domain Names Over Port 443**: Unlike traditional DNS, which operates over port 53, DoH sends queries as HTTPS traffic, making them indistinguishable from regular web browsing.

- **Improves Privacy**: Protects user queries from ISPs, network administrators, and attackers attempting to track browsing activities.

- **Mitigates DNS-Based Attacks**: Helps defend against DNS spoofing, MITM attacks, and other DNS-related threats by ensuring query integrity.

- **Compatible with Web Browsers and Operating Systems**: Supported by major web browsers such as Chrome, Firefox, and Edge, as well as some operating systems and DNS providers.

- **Uses JSON or HTTP/2 for Queries**: DNS requests can be formatted as JSON objects or use HTTP/2 for efficient performance and multiplexing.

## **How DoH Works**

When a client (e.g., a web browser) needs to resolve a domain name, it sends an encrypted HTTPS request to a DoH-compatible DNS resolver instead of using traditional DNS. The resolver processes the request, queries the necessary DNS servers if needed, and returns the resolved IP address over an encrypted HTTPS response. This entire process is transparent to users but significantly enhances privacy and security.

## **Advantages**

- **Prevents Eavesdropping**: Encrypts DNS queries, making it difficult for ISPs or attackers to monitor web activity.

- **Bypasses Network-Level Censorship**: Makes it harder for governments or ISPs to block access to certain websites through DNS filtering.

- **Enhances Security**: Reduces exposure to DNS hijacking, spoofing, and MITM attacks.

- **Improves Performance in Some Cases**: Uses HTTP/2 features like multiplexing and connection reuse for faster DNS resolution.

## **Limitations**

- **May Bypass Enterprise Security Controls**: Organizations that rely on traditional DNS filtering for cybersecurity may find DoH bypassing these controls unless properly managed.

- **Not a Complete Privacy Solution**: Encrypting DNS queries alone does not fully anonymize internet activity, as IP addresses and other tracking mechanisms still reveal browsing patterns.

- **Can Increase Latency**: Encrypting and tunneling DNS requests over HTTPS can introduce slight delays compared to traditional DNS resolution.

- **Potential for Centralization**: Many DoH queries are handled by large public DNS providers (Google, Cloudflare, Mozilla), raising concerns about data control and centralization.