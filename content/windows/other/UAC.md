---
icon: TiArticle
---
Many home users log into Windows with local administrator accounts, which allow them to make system changes. However, running with elevated privileges increases the risk of malware infection. To address this, Microsoft introduced User Account Control (UAC) in Windows Vista, which limits system changes by prompting for permission before performing actions requiring elevated privileges. UAC doesn't apply to the built-in local administrator account by default. When installing a program, UAC will prompt for approval, asking for the administrator password. If no password is entered, the installation will not proceed. This feature helps reduce the likelihood of malware compromising the system.

![[win-uac.png]]

**Key Points:**

- Most home users log in as local administrators.
- Elevated privileges are unnecessary for tasks like browsing or document editing.
- UAC, introduced in Windows Vista, reduces the risk of malware by limiting elevated privileges.
- **Note:** UAC doesn't apply to the built-in administrator account by default.
- UAC prompts users for permission before performing actions requiring elevated privileges.
- Programs that need installation show a shield icon and prompt for an administrator password.
- If no password is entered, the installation is canceled.
- UAC helps protect against malware by limiting unauthorized system changes.