Subnetting is not just about managing hosts—sometimes, we need to **split a network into a specific number of subnets** while keeping the **largest possible number of hosts** per subnet.
## **Analyzing the Problem**

### **Given Information**

- **Network:** `172.20.0.0/16`
- **Requirement:** Divide it into **47 subnets**
- **Objective:** Find the **minimum subnet bits** required while maximizing hosts

## Step 1: Finding the Required Subnet Bits

Subnetting is done by **borrowing bits from the host portion** of the address. The number of subnets follows the formula:

```
Total Subnets = 2^s
```

where **s** is the number of borrowed bits.

We need **at least 47 subnets**, so we find the smallest **s** where:

```
2^s ≥ 47
```

Thus, we need to **borrow 6 bits** from the host portion.

## Step 2: Finding the New Subnet Mask

The original `/16` network uses **16 bits for the network**, leaving **16 bits for hosts**.

Since we **borrow 6 bits**, the new subnet mask becomes:

```
New Subnet Prefix = /16 + 6 = /22
```

### New Subnet Details:

- **Subnet Mask:** `255.255.252.0` (`/22`)
- **Usable Hosts Per Subnet:** `2^(16 - 6) - 2 = 1022`
- **Total Subnets Possible:** `2^6 = 64`

## Step 3: Understanding the New Subnets

By subnetting `172.20.0.0/16` into **/22 subnets**, we achieve the following:

- We **meet the requirement** of at least 47 subnets.
- Each subnet can **hold up to 1022 usable hosts**, maximizing space.
- There are **64 total subnets**, meaning some extra space is available if needed.