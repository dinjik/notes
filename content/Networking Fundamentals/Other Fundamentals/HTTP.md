HTTP (Hypertext Transfer Protocol) is a protocol used for transmitting hypertext requests and information between clients and servers on the World Wide Web. It works as a client-server communication model where clients (e.g., web browsers) send requests, and servers provide responses.

![[ImageOfHTTPRequestResponse-1024x580-660.webp]]
### Example Scenario

- A user enters a URL in their browser.
- The browser sends a GET request to the server to retrieve the resource.
- The server processes the request and returns a 200 OK status, along with the HTML content.
- The browser renders the HTML and displays the webpage to the user.
### Key Features of HTTP

- **Stateless Protocol**: Each HTTP request is independent of others, and the server does not retain any information between requests.

- **Request-Response Model**: HTTP operates on a client-server model where the client sends a request, and the server sends a response.

- **Standard Methods**: HTTP uses a set of standard methods (verbs) for the client to specify the desired action on the server. These methods include GET, POST, PUT, DELETE, and HEAD.

- **Port 80**: HTTP typically uses port 80, while HTTPS (the secure version of HTTP) uses port 443.

- **Text-Based Protocol**: HTTP requests and responses are sent in plain text, making them easy to read and debug.

- **Headers**: HTTP headers provide additional information about the request or response, such as content type, user agent, and cookies.

### HTTP Methods

- **GET**: Requests data from the server (e.g., fetching a webpage).
- **POST**: Sends data to the server to create or update a resource (e.g., form submission).
- **PUT**: Sends data to update an existing resource on the server.
- **DELETE**: Requests the deletion of a specified resource on the server.
- **HEAD**: Similar to GET but retrieves only the headers, not the body.
- **OPTIONS**: Requests information about the communication options available for the target resource.
