A **jump box** (also known as a jump server or bastion host) is a secure gateway server used to manage and access systems in a more restricted network environment. It acts as an intermediary between an administrator and the target systems, providing an additional layer of security.

![[image-5.png]]
### **Key Characteristics of a Jump Box**

- **Single Point of Entry**: The jump box is the only access point into the restricted network. Administrators connect to the jump box first and use it to access other systems.

- **Secure Configuration**: The jump box is hardened and stripped of unnecessary services to minimize vulnerabilities. It typically has strong access controls, such as multifactor authentication (MFA).

- **Segmentation**: The jump box resides in a segmented network or DMZ, isolating it from both external and internal networks.

- **Logging and Auditing**: All actions taken through the jump box are logged, creating an audit trail for accountability and security monitoring.
