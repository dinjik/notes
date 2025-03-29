DNSSEC ensures that DNS responses are authentic and haven't been tampered with, protecting users from DNS spoofing and cache poisoning attacks. However, it does not encrypt DNS queries or responses.

#### **Key Features**

• **Integrity** – Confirms that DNS records remain unchanged.  
• **Authentication** – Verifies that DNS data comes from a legitimate source.  
• **Chain of Trust** – Establishes a hierarchical trust model from the root DNS zone to individual domains.

#### **How It Works**

DNS records are signed using a private key, and resolvers validate the signatures using public keys (DNSKEY records). The RRSIG record provides a digital signature for authentication, while the DS record links parent and child zones to maintain the chain of trust.

#### **Limitations**

DNSSEC does not encrypt DNS queries or responses, meaning it does not prevent eavesdropping.