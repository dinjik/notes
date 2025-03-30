The **interesting octet** is the octet where the subnet mask first introduces a change from 255 (or 11111111 in binary) to a smaller value. This is the octet where subnetting begins and where you need to consider dividing the network.

**How to determine the interesting octet**:

1. Convert the subnet mask from CIDR notation to the full dotted decimal format.
2. Find the octet where the first value is smaller than 255, as this is the interesting octet.

#### Example: /18 → Subnet Mask: 255.255.192.0

- In binary, the subnet mask for /18 is:

```
11111111.11111111.11000000.00000000
```

The first two octets are `255`, and the third octet is `192` (which is 11000000 in binary). Therefore, the interesting octet is the **3rd octet**.

### Calculate the Block Size

The **block size** is the number of IP addresses in each subnet. It is calculated based on the position of the interesting octet and its corresponding subnet mask.

**How to calculate block size**:

1. Subtract the subnet mask's value in the interesting octet from 256 to get the block size.

#### Example Calculation:

For the subnet mask `255.255.192.0` (i.e., /18), the interesting octet is the 3rd octet, which is `192`. So, the block size is:

```
Block Size = 256 - 192 = 64
```

### Determine the Subnet Ranges

To determine the subnet ranges, you can now calculate the network, broadcast, and usable IP ranges within each subnet.

**How to find subnet ranges**:

1. The network address is the starting address of the subnet.
2. The broadcast address is the last address in the subnet, which is the network address plus the block size minus 1.
3. The usable IP addresses are the ones between the network address and the broadcast address, excluding both.