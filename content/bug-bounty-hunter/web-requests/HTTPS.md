---
icon: TiNotes
---
HTTPS is a secure version of HTTP that encrypts data transfer to prevent eavesdropping and Man-in-the-Middle (MiTM) attacks. It ensures data confidentiality and integrity, making it the standard for modern web communication. The default port for HTTPS is 443.

## HTTPS Flow

1. A browser initially sends an HTTP request to port 80.
2. The server redirects the client to HTTPS (port 443) using a 301 Moved Permanently response.
3. The browser and server perform an SSL/TLS handshake:
4. After the handshake, encrypted HTTP communication continues.

### Security Considerations

- **Encrypted DNS:** Prevents exposure of visited URLs (e.g., using 8.8.8.8 or 1.1.1.1).
- **HTTP Downgrade Attacks:** Some attackers attempt to downgrade HTTPS to HTTP to intercept data. Modern browsers and servers have mitigations against this.

## cURL for HTTPS

cURL automatically manages HTTPS encryption and certificate verification. However, if an SSL certificate is invalid, cURL will block the request:

```bash
curl https://inlanefreight.com

curl: (60) SSL certificate problem: Invalid certificate chain
```

To bypass SSL certificate checks (for testing purposes only), use the `-k` flag:

```bash
curl -k https://inlanefreight.com
```

This allows the request to proceed despite certificate issues, though it should not be used in production environments.