In subnetting, we manipulate the **host bits** to create additional networks while ensuring each subnet has enough addresses for its required hosts.

![[Pasted image 20250328215402.png]]
## **Analyzing the Problem**

### **Given Information**

- **Network Address:** `172.20.0.0/16` (Class B network)
- **Requirement:** Each subnet must support at least **100 hosts**
- **Key Objective:** Determine the necessary subnet mask by calculating the number of host bits needed to satisfy the requirement

## Step 1: Finding the Required Host Bits

Each subnet reserves two addresses:

1. **Network Address** (first IP)
2. **Broadcast Address** (last IP)

This means the **usable hosts per subnet** follow the formula:

```
Usable Hosts = 2^h - 2
```

where **h** is the number of bits left for hosts.

We need at least **100 hosts**, so we find the smallest **h** where:

```
2^h - 2 ≥ 100
```

So, we need **7 host bits** to fit at least 100 hosts.

## Step 2: Finding the New Subnet Mask

An **IPv4 address** has **32 bits** in total. The original `/16` network uses **16 bits for the network**, leaving **16 bits for hosts**.

Since we need **7 bits for hosts**, the remaining bits will be used for subnetting:

```
New Subnet Prefix = 32 - 7 = /25
```

### New Subnet Details:

- **Subnet Mask:** `255.255.255.128` (`/25`)
- **Usable Hosts:** `126` per subnet
- **Subnet Bits Available:** `9` (`25 - 16 = 9`)
- **Total Subnets Possible:** `2^9 = 512`

## Step 3: Understanding the New Subnets

By subnetting `172.20.0.0/16` into **/25 subnets**, we create multiple subnets, each supporting **126 usable hosts**—more than the required 100.

Subnetting **optimizes IP address allocation** by preventing waste and making the network more efficient. With `/25`, we now have **512 subnets**, each handling **126 devices**, ensuring **scalability and flexibility**.