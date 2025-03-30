### SSH Authentication Methods

- **Password Authentication**: The user enters their username and password to authenticate. While simple, this method is less secure compared to key-based authentication.

- **Public Key Authentication**: The user generates a public-private key pair. The public key is placed on the server, while the private key remains with the user. The server authenticates the user by verifying the public key against the private key.

- **Two-Factor Authentication**: SSH can also be configured to require two-factor authentication, adding an extra layer of security. This typically involves something the user knows (password) and something the user has (a hardware token or an app-generated code).