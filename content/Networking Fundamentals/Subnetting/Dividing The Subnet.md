## Analyze the Problem

- **Given Network:** 172.20.0.0/16.
- **Requirement:** Divide the network into 47 subnets while keeping the maximum possible hosts per subnet.
- **Key Objective:** Find the number of borrowed bits to create the required subnets.

![[Pasted image 20250328215139.png]]

Since 2 ^ 6 is 64, and this covers 47 subnets, we would choose this one.