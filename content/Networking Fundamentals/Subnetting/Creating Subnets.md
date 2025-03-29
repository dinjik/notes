## Analyze the Problem

- **Given Network:** 172.20.0.0/16.
- **Requirement:** Each subnet must accommodate at least 100 hosts.
- **Key Objective:** Find the minimum number of host bits required to support 100 hosts, then calculate the new subnet mask.

We are using power of 2s to calculate the available hosts - 2 (broadcast/network).

![[Pasted image 20250328215402.png]]

We utilize power 2s table for calculating the hosts, and then based on the bits required for that many hosts, we can then calculate our subnet mask.