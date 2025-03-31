Active Directory (AD) is a directory service used for managing users, computers, and resources in a network. Understanding common AD terms helps in configuring and troubleshooting AD environments.

### **Schema**

The **Active Directory Schema** defines the structure of objects stored in AD, including users, computers, groups, and attributes. It acts as a blueprint for how data is organized.

- Contains **classes (object types)** and **attributes (properties of objects)**.
- Enforced by **Schema Master FSMO role**, which controls updates.
- Changes to the schema are **permanent and affect the entire forest**.

```bash
# View AD Schema using PowerShell
Get-ADObject -SearchBase (Get-ADRootDSE).schemaNamingContext -Filter *
```

Example of a **User Object Schema**:

| Object Class | Attributes                                                |
| ------------ | --------------------------------------------------------- |
| **User**     | `sAMAccountName`, `mail`, `userPrincipalName`, `memberOf` |
| **Computer** | `operatingSystem`, `dnsHostName`, `lastLogonTimestamp`    |
| **Group**    | `groupType`, `member`, `description`                      |

The schema ensures **consistency** across all AD objects and prevents **unauthorized modifications**.
### **Domain**

A **domain** is a logical grouping of network objects (users, computers, and devices) under a single administrative structure.

- Identified by a **DNS name** (e.g., `example.com`).
- Managed by a **Domain Controller (DC)**.
- Users within a domain share authentication and security policies.

### **Domain Controller (DC)**

A **Domain Controller (DC)** is a server that stores and manages AD data. It authenticates users and enforces security policies.

- Hosts the **Active Directory Database (NTDS.dit)**.
- Handles **user authentication** and **authorization**.
- Replicates directory data to other DCs in the domain.

```bash
# Check available domain controllers
nltest /dclist:example.com
```

### **Organizational Unit (OU)**

An **Organizational Unit (OU)** is a container within a domain used to organize users, groups, and computers.

- Allows **delegation of administrative tasks**.
- Helps apply **Group Policies (GPOs)**.
- Provides a structured hierarchy for managing objects.

### **Forest**

A **forest** is the highest level of the AD structure that contains one or more domains.

- The first domain in a forest is the **forest root domain**.
- All domains in a forest share a **common schema** and **global catalog**.
- Supports **trust relationships** between domains.

### **Tree**

A **tree** is a group of domains within a forest that share a common namespace.

- Each domain in a tree **inherits the namespace** from its parent.
- Uses **two-way transitive trusts** for authentication across domains.

```plaintext
Forest: example.com  
  ├── sub.example.com (Tree domain)  
  ├── dev.example.com (Tree domain)  
```

### **Group Policy Object (GPO)**

A **Group Policy Object (GPO)** is a set of rules applied to users and computers to control settings and security policies.

- Configures **password policies, software installation, and security settings**.
- Linked to **domains, OUs, or sites** for targeted application.
- Applied in the order: **Local → Site → Domain → OU (LSDOU)**.

```bash
# View applied GPOs on a system
gpresult /R
```

### **Global Catalog (GC)**

A **Global Catalog (GC)** is a **read-only** database that contains a subset of AD objects from all domains in a forest.

- Speeds up **search queries across multiple domains**.
- Helps in **universal group membership lookups**.
- Hosted on **Domain Controllers (DCs)** marked as **Global Catalog Servers**.

```bash
# Find the Global Catalog server
nltest /dsgetdc:example.com /GC
```

### **Security Groups vs. Distribution Groups**

|Group Type|Purpose|Example Use Case|
|---|---|---|
|**Security Group**|Used for **permissions and access control**|Grant access to shared folders|
|**Distribution Group**|Used for **email distribution lists**|Create a mailing list in Exchange|

### **Trust Relationships**

Trusts allow authentication and resource sharing between domains or forests.

- **Parent-child trust**: Automatically created between domains in the same forest.
- **External trust**: Used to connect to a domain in a different forest.
- **Forest trust**: Provides trust between two separate forests.

```plaintext
DomainA.example.com ↔ DomainB.example.com (Two-way trust)
```

### **FSMO Roles (Flexible Single Master Operations)**

FSMO roles are **specialized tasks** assigned to Domain Controllers to prevent conflicts in AD.

|FSMO Role|Function|
|---|---|
|**Schema Master**|Controls schema modifications for the forest.|
|**Domain Naming Master**|Manages domain additions and removals.|
|**RID Master**|Allocates unique security identifiers (SIDs).|
|**PDC Emulator**|Handles password changes and time synchronization.|
|**Infrastructure Master**|Updates group memberships across domains.|

```bash
# Check FSMO role holders
netdom query fsmo
```
