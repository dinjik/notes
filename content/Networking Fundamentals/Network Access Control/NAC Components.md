**Port Security:** Port security is a feature on network switches that limits access to specific devices based on their MAC addresses. It ensures that only authorized devices can connect to a given switch port by associating specific MAC addresses with those ports. Unauthorized devices attempting to connect will be blocked.

![[1_13x1Fp4pDsCpnIh-0iq08w.png]]

**802.1X (Port-Based Network Access Control):** 802.1X is a protocol that enforces authentication before a device is granted access to a network. It involves three key components: the **Supplicant** (the device requesting access, such as a laptop or smartphone), the **Authenticator** (the switch or access point that controls access and forwards authentication requests to the RADIUS server), and the **Authentication Server** (the RADIUS server that verifies the device’s credentials and grants or denies access).

![[Graphic-4-1.jpg]]

**MAC Filtering:** MAC filtering is a method used to allow or deny network access based on the device’s MAC address. It can be configured to either allow only devices with specified MAC addresses (Allow List or Whitelist) or block devices with certain MAC addresses (Block List or Blacklist). MAC addresses can be added either manually (static) or dynamically (using monitoring tools).

![[5b449dc9-952a-434b-9be0-d2fc4c0325a2.png]]