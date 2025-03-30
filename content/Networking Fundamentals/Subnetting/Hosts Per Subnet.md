### How Block Size Relates to Hosts

The **block size** determines the number of available host addresses in each subnet. Since two addresses are reserved (network and broadcast addresses), the number of usable host addresses per subnet is calculated as:

```
Hosts Per Subnet = Block Size × 256 - 2
```

**How to calculate hosts per subnet**:

1. Subtract 2 from the block size to account for the network and broadcast addresses.

#### Example Calculation:

Given a block size of 64:

```
Hosts Per Subnet = 64 × 256 - 2 = 16,382
```

Thus, there are 16, 382 usable IP addresses per subnet**.