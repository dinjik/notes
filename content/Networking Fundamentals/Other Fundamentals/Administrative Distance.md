In networking, Administrative Distance (AD) is a metric used by routers to choose the best path when there are multiple routes to the same destination from different routing protocols. It essentially measures the trustworthiness or reliability of a route source, helping routers prioritize one routing protocol over another when making routing decisions.

### What is AD Measuring?

Each routing protocol (e.g., RIP, OSPF, EIGRP, BGP) assigns routes to different networks, but not all routing protocols are equally reliable. Administrative Distance assigns a number (the AD value) to each protocol’s routes, indicating how "trustworthy" or preferred it is. Lower AD values mean higher trust, while higher AD values mean lower trust.

![[Pasted image 20250329150402.png]]

**How AD Works in Routing Decisions:**

- If a router receives multiple paths to the same destination from different protocols, it will use the path from the protocol with the lowest AD. This process ensures efficient and optimal path selection based on protocol reliability.

**Manual Adjustment:**

- Network administrators can manually adjust AD values to influence route selection if they want to prioritize specific protocols over others in custom network setups.