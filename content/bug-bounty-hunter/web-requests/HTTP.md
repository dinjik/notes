---
icon: TiNotes
---
HTTP is an application-layer protocol used for web communication. It operates on a client-server model where the client sends requests to a web server, which processes and responds with the requested resource. The default port for HTTP is 80.

## URL Structure

A URL (Uniform Resource Locator) consists of several components:

| Component    | Example           | Description                                    |
| ------------ | ----------------- | ---------------------------------------------- |
| Scheme       | http://, https:// | Identifies the protocol                        |
| User Info    | admin:password@   | Optional credentials for authentication        |
| Host         | inlanefreight.com | Domain or IP address                           |
| Port         | :80               | Port number (defaults: HTTP - 80, HTTPS - 443) |
| Path         | /dashboard.php    | Specifies the resource path                    |
| Query String | ?login=true       | Parameters (key-value pairs) for requests      |
| Fragment     | #status           | Client-side navigation within a resource       |

## HTTP Flow

1. The browser sends a DNS request to resolve a domain name to an IP address.
2. The browser sends an HTTP GET request to the web server on port 80.
3. The web server processes the request and responds with an index file (e.g., index.html).
4. The response contains a status code (e.g., 200 OK), and the browser renders the content.

## cURL

cURL is a command-line tool for making web requests. It supports various protocols, including HTTP.

### Basic Usage

```bash
curl inlanefreight.com
```

This retrieves and displays the raw HTML content of the webpage.

### Downloading a File

```bash
curl -O inlanefreight.com/index.html  # Saves file with remote filename
curl -o custom.html inlanefreight.com/index.html  # Saves with custom filename
```

### Silent Mode

```bash
curl -s -O inlanefreight.com/index.html  # Suppresses status output
```

### Helpful Flags

```bash
curl -h                # Displays help menu
curl -i                # Includes response headers
curl -s                # Silent mode (no progress output)
curl -u user:password  # Authenticated request
curl -A "User-Agent"   # Custom User-Agent header
curl -v                # Verbose mode
```