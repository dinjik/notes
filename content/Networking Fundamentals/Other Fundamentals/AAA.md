Authentication, Authorization, and Accounting (AAA) is a framework used in network security to control access to resources and track user activities. It is often used in conjunction with IAM systems to ensure that only authorized users can access network resources, and their actions are properly monitored. AAA plays a vital role in network security by ensuring secure access, regulating what users can do, and providing detailed logs of user actions for auditing and accountability.

![[aaa-authentication.webp]]

**Breakdown of AAA**

- **Authentication**: Authentication is the process of ensuring the identity of the user or system requesting access to the network or resource. This step verifies that the user is who they claim to be, typically through methods like usernames and passwords, digital certificates, or biometrics. An example would be entering a username and password to connect to a VPN.

- **Authorization**: After authentication, authorization determines what a user is allowed to do within the system. It controls access levels and permissions, ensuring that users can only perform actions or access resources they are permitted to. For example, a VPN user might be authorized to access only certain internal systems, while being restricted from accessing external resources.

- **Accounting**: Accounting involves tracking and logging user activities, including actions taken, the duration of sessions, and any changes made to systems. This step is crucial for auditing purposes and for ensuring accountability. For example, logging the time and actions taken during a VPN session allows administrators to track which users made specific changes and when.

**Use Case Example**

In network devices, such as Cisco routers, AAA might be implemented to authenticate administrators using RADIUS or TACACS+, authorize specific actions based on roles, and log all configuration changes for auditing. This helps ensure that only authorized users make changes to network configurations and that all activities are properly logged for security and compliance.