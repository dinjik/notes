Network Time Protocol is the most widely used protocol for time synchronization over a network, ensuring system clocks remain accurate within milliseconds. It operates over **UDP (port 123)** and makes gradual adjustments to avoid disruptions.

![[figure-2-howntpworks-0b7a2c8c91dce9e29b2a8197505017b8.png]]
#### **Key Features:**

• **Hierarchy (Stratum Levels)** – Time sources are structured hierarchically:  
Stratum 0 consists of high-precision sources like atomic clocks and GPS. Stratum 1 servers connect directly to Stratum 0, while Stratum 2 and higher synchronize from upstream servers. Lower stratum numbers indicate closer proximity to the primary source.  
• **Accuracy** – Typically provides millisecond-level precision.  
• **Clock Adjustment** – Uses small, incremental corrections to prevent system instability.  
• **NTP Algorithms** – Accounts for network delays and jitter while filtering and averaging multiple time sources for accuracy.

#### **How NTP Works**

1. **Client Request** – An NTP client sends a request to a server.
    
2. **Server Response** – The server replies with its current timestamp.
    
3. **Delay Calculation** – The client measures the round-trip delay and offset to adjust its clock accordingly.