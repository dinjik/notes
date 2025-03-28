---
icon: TiArticle
---
The core of any Windows Domain is the **Active Directory Domain Service (AD DS)**. This service acts as a catalogue that holds the information of all of the "objects" that exist on your network. <mark style="background: #FFF3A3A6;">Amongst the many objects supported by AD, we have users, groups, machines, printers, shares and many others. </mark>
## Users
Users are one of the objects known as **security principals**, meaning that they can be authenticated by the domain and can be assigned privileges over **resources** like files or printers. You could say that <mark style="background: #ABF7F7A6;">a security principal is an object that can act upon resources in the network</mark>.

**Users can be used to represent two types of entities:**

- **People:** users will generally represent persons in your organization that need to access the network, like employees.
- **Services:** you can also define users to be used by services like IIS or MSSQL. Every single service requires a user to run, but service users are different from regular users as they will only have the privileges needed to run their specific service.
## Machines
Machines are another type of object within Active Directory;<mark style="background: #FFB86CA6;"> for every computer that joins the Active Directory domain, a machine object will be created.</mark> <mark style="background: #ABF7F7A6;">Machines are also considered "security principals" and are assigned an account just as any regular user. </mark>This account has somewhat limited rights within the domain itself.

<mark style="background: #FF5582A6;">The machine accounts themselves are local administrators on the assigned computer, they are generally not supposed to be accessed by anyone except the computer itself</mark>, but as with any other account, if you have the password, you can use it to log in.

<mark style="background: #D2B3FFA6;">Identifying machine accounts is relatively easy. They follow a specific naming scheme. The machine account name is the computer's name followed by a dollar sign. For example, a machine named `DC01` will have a machine account called `DC01$`.</mark>
## Security Groups

Several groups are created by default in a domain that can be used to grant specific privileges to users. As an example, here are some of the most important groups in a domain:

| **Security Group** | **Description**                                                                                                                                           |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Domain Admins      | Users of this group have administrative privileges over the entire domain. By default, they can administer any computer on the domain, including the DCs. |
| Server Operators   | Users in this group can administer Domain Controllers. They cannot change any administrative group memberships.                                           |
| Backup Operators   | Users in this group are allowed to access any file, ignoring their permissions. They are used to perform backups of data on computers.                    |
| Account Operators  | Users in this group can create or modify other accounts in the domain.                                                                                    |
| Domain Users       | Includes all existing user accounts in the domain.                                                                                                        |
| Domain Computers   | Includes all existing computers in the domain.                                                                                                            |
| Domain Controllers | Includes all existing DCs on the domain.                                                                                                                  |
## Active Directory Users and Computers
To configure users, groups or machines in Active Directory, we need to log in to the Domain Controller and run "Active Directory Users and Computers" from the start menu:

![[11d01963392078c1450300d2881f9160.png]]

If you open any OUs, you can see the users they contain and perform simple tasks like creating, deleting or modifying them as needed. <mark style="background: #FFB86CA6;">You can also reset passwords if needed (pretty useful for the helpdesk)</mark>:

![[76e01efece5a00cc91f7099226130c5c.png]]

<mark style="background: #FFF3A3A6;">You probably noticed already that there are other default containers apart from the THM OU. These containers are created by Windows automatically and contain the following:</mark>

- **Builtin:** Contains default groups available to any Windows host.
- **Computers:** Any machine joining the network will be put here by default. You can move them if needed.
- **Domain Controllers:** Default OU that contains the DCs in your network.
- **Users:** Default users and groups that apply to a domain-wide context.
- **Managed Service Accounts:** Holds accounts used by services in your Windows domain.