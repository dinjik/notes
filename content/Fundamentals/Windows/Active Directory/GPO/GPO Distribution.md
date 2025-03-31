Group Policy Objects (GPOs) are vital components in managing network-wide settings and configurations in an Active Directory (AD) environment. The distribution and replication of GPOs across domain controllers are facilitated by SYSVOL, a shared folder on domain controllers. This folder holds the files necessary for the application and replication of GPOs across the domain.

## GPO Storage in SYSVOL

When a GPO is created or modified, it is stored in the SYSVOL directory located on all domain controllers. This directory ensures that GPOs are consistent across the network and are available for application by all machines within the domain. The GPO files are stored in two main components:

- **Group Policy Container (GPC):** This stores the metadata of the GPO, such as its unique identifier and version information.

- **Group Policy Template (GPT):** This holds the actual policy settings, including registry settings, scripts, security settings, and more.

The GPOs are placed under the `\\domaincontroller\SYSVOL\domain\Policies` folder on the domain controllers.

## Replication of GPOs

Once a GPO is created or modified, it needs to be replicated across all domain controllers in the Active Directory domain. This ensures that all controllers have the same GPO data to apply the policies consistently across the network. The two primary mechanisms for replication are:

- **File Replication Service (FRS):** Older versions of Windows Server use FRS for replicating SYSVOL contents, including GPOs, across domain controllers.

- **Distributed File System Replication (DFSR):** Newer versions of Windows Server use DFSR, which is more efficient and provides better management for large-scale environments.

Replication ensures that when a GPO is updated, all domain controllers receive the new version, keeping the policies synchronized throughout the domain.

## Application of GPOs to Client Machines

When a client machine, whether a user or computer, starts up or logs in, it queries the nearest domain controller for the latest GPOs. The client machine does the following:

1. **Queries the Domain Controller:** The client checks with the closest domain controller for the list of applicable GPOs.

2. **Receives GPOs:** The domain controller sends the relevant GPOs from its local SYSVOL share.

3. **Applies GPOs:** The client applies the received GPO settings based on its type (computer or user) and other factors like site and organizational unit (OU) membership.

This process ensures that the correct policies are applied to the machine, ensuring consistent configuration across the network.