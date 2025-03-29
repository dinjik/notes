Virtual Router Redundancy Protocol is an open standard protocol designed to increase the availability of the default gateway by assigning the responsibility of the gateway IP address to a group of routers.

![[Networking_rutos_vrrp_configuration_scheme_1.png]]
### **How VRRP Works**

- VRRP creates a virtual router with a shared IP address that acts as the default gateway for devices.
- One router is elected as the Master Router, while others are in the Backup role.
- The Master Router handles all traffic for the virtual IP, while Backup Routers are on standby, ready to take over if the Master Router fails.
- The routers send periodic advertisements to maintain communication, and if the Master Router fails, a Backup Router automatically assumes the role of the Master Router.