**What is SAML?**

Security Assertion Markup Language (SAML) is an open standard used for Single Sign-On (SSO) implementations. SAML enables users to authenticate once and gain access to multiple applications without needing to log in separately to each one. It uses XML-based tokens to securely exchange authentication and authorization data between different parties, typically between an identity provider (IdP) and a service provider (SP). SAML is widely used in enterprise environments to simplify authentication processes while enhancing security.

**What is SSO?**

Single Sign-On (SSO) is an authentication process that allows a user to log in once and gain access to multiple systems or services without needing to re-enter credentials for each one. SSO improves user experience by reducing the need for remembering multiple usernames and passwords while enhancing security by centralizing authentication.

**SAML vs. SSO**

**SAML is a protocol that facilitates the SSO process. While SSO is the overall concept of logging in once to access multiple systems**, SAML is one of the technologies used to implement SSO. In essence, SSO is the goal, and SAML is one method of achieving it.

**Key Terms in SAML**

- **Identity Provider (IdP)**: The IdP is responsible for authenticating the user and providing their identity. It verifies that the user is legitimate before passing the information to the service provider. An example of an IdP would be Google, which authenticates a user when logging into a third-party app.
- **Service Provider (SP)**: The SP is the application or service that a user wants to access. It relies on the IdP to authenticate the user before granting access. An example of an SP would be Dropbox, which uses Google as the IdP to authenticate users.
- **Assertion**: An assertion is a piece of data formatted in XML that is passed from the IdP to the SP to confirm the user's identity. It contains the authentication and authorization information required by the SP to grant access.

**How SAML Works**

1. **User Initiates Access**: The user tries to log in to a service provider (e.g., Dropbox).
2. **Redirect to IdP**: The service provider redirects the user to the IdP (e.g., Google).
3. **Authentication**: The IdP authenticates the user, typically through a login process.
4. **Token Issued**: Upon successful authentication, the IdP sends a SAML assertion (token) to the SP.
5. **Access Granted**: The service provider verifies the token and grants the user access to the requested service.

**Here is the visualization of the SAML process:**

![[0_SRjtpog5gZpYbUAa-1.png]]