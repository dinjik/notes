DNS is like the phonebook of the internet. It translates human-readable domain names (e.g., [www.example.com](http://www.example.com)) into machine-readable IP addresses (e.g., 192.168.1.1 for IPv4 or 2001:db8::ff00:42:8329 for IPv6), enabling devices to find and connect to each other.

![[what_is_a_dns_server_dns_lookup.png]]

## How DNS Works

When you type [www.example.com](http://www.example.com) in your browser, your computer queries a DNS server.

**Query Process:**

- First, your query goes to a recursive resolver, which handles finding the IP for you.
- If the resolver doesn’t know the IP, it asks a root server, which points it to the right Top-Level Domain (TLD) server (e.g., .com or .org).
- The TLD server directs the resolver to the Authoritative DNS Server for the domain.
- This server contains the actual records for example.com and provides the IP.

**Response to Your Browser:**

- Once the resolver gets the IP address, it passes it to your browser, which connects to the server hosting example.com.

## Common Types of DNS Records

**A Record (Address Record):**

- Maps a domain name to an IPv4 address.
- Example: [www.example.com](http://www.example.com) → 192.0.2.1
- Analogy: "Alice" is at 123 Main St.

**AAAA Record (IPv6 Address Record):**

- Maps a domain name to an IPv6 address.
- Example: [www.example.com](http://www.example.com) → 2001:db8::1
- Analogy: "Alice" is at her new high-tech address.

**CNAME Record (Canonical Name Record):**

- Points one domain name to another.
- Example: blog.example.com → [www.example.com](http://www.example.com)
- Analogy: A forwarding address in a postal system.

**MX Record (Mail Exchange Record):**

- Directs emails to the correct mail server for a domain.
- Example: example.com → mail.example.com (priority: 10)
- Analogy: Sorting mail based on the destination post office.

**TXT Record:**

- Stores text data for purposes like verification or security.
- Example: example.com → "v=spf1 include:_spf.google.com ~all"
- Use Case: Used in SPF (Sender Policy Framework) to verify email senders or for domain ownership validation.
- Analogy: A sticky note with extra information.

**NS Record (Name Server Record):**

- Specifies the authoritative name servers for a domain.
- Example: example.com → ns1.dnsprovider.com
- Analogy: The manager of a department responsible for information.

**PTR Record (Pointer Record):**

- Maps an IP address to a domain name (reverse DNS lookup).
- Example: 192.0.2.1 → [www.example.com](http://www.example.com)
- Analogy: Looking up who lives at an address.

**SRV Record (Service Record):**

- Specifies information about available services.
- Example: _sip._tcp.example.com → server.example.com (port 5060)
- Analogy: A directory of services offered by a company.

**SOA Record (Start of Authority):**

- Contains administrative information about a domain, such as the primary name server and contact email.
- Example: example.com → ns1.dnsprovider.com (admin@example.com)
- Analogy: The title page of a book with the author and publisher details.

**CAA Record (Certification Authority Authorization):**

- Specifies which certificate authorities can issue SSL certificates for the domain.
- Example: example.com → letsencrypt.org
- Use Case: Improves security by limiting certificate issuance.