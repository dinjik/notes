Administrative Distance (AD) is a metric used in routing to determine the trustworthiness of a route source. It is a value assigned to each routing protocol that helps routers decide which route to choose when there are multiple paths to a destination from different routing protocols. AD is crucial for determining the most reliable and preferred route when multiple routing protocols provide different routes for the same destination.

When a router learns about a destination through multiple routing protocols, it compares their Administrative Distances. The route with the lowest AD value is preferred, as it is considered the most trustworthy. If multiple protocols provide the same route to a destination, the protocol with the lowest AD is selected.

## **Key Aspects of Administrative Distance**

AD is a numeric value, typically ranging from 0 to 255, with lower values indicating more preferred routes. Each routing protocol has a default AD value, and the AD for each protocol can be adjusted to influence routing decisions.

### **Common Routing Protocols and Their Default AD Values**

|**Routing Protocol**|**Default AD Value**|**Description**|
|---|---|---|
|**Directly connected routes**|0|Highest priority, considered the most reliable.|
|**Static routes**|1|Manually configured routes with very high priority.|
|**EIGRP (Enhanced Interior Gateway Routing Protocol)**|90|A widely used protocol that offers a balance between speed and reliability.|
|**OSPF (Open Shortest Path First)**|110|Link-state protocol, commonly used for larger networks.|
|**RIP (Routing Information Protocol)**|120|A distance-vector protocol with slower convergence and scalability.|
|**BGP (Border Gateway Protocol)**|20 (external routes), 200 (internal routes)|Path vector protocol primarily used for inter-domain routing.|
|**IS-IS (Intermediate System to Intermediate System)**|115|Another link-state protocol similar to OSPF.|
|**Unknown or invalid routes**|255|Indicates no route available or invalid route.|

### **Function of Administrative Distance**

The primary role of Administrative Distance is to resolve conflicts between multiple routing protocols that may have learned different routes to the same destination. If a router receives multiple routes for the same destination, it will compare their AD values and select the one with the lowest AD.

For example:

- If a router receives a route to a destination via OSPF (AD = 110) and another via RIP (AD = 120), the router will prefer the OSPF route since 110 is lower than 120.

- If a static route (AD = 1) is configured for the same destination, the router will select the static route over both OSPF and RIP routes, as 1 is the lowest AD.

### **AD and Routing Table Decision**

When a router has learned routes from different protocols, it must decide which one to add to its routing table. The router uses AD as a filter:

- **Lower AD**: Routes with lower AD are considered more reliable, so they are preferred and added to the routing table.

- **Higher AD**: Routes with higher AD values are considered less reliable and are discarded or ignored if a lower AD route is available.

### **Adjusting Administrative Distance**

In some cases, network administrators may adjust the AD values of routing protocols to influence routing decisions. This can be useful in scenarios where a specific protocol should be favored over others, even if it has a higher default AD.

For example, an administrator might change the AD of RIP to 110 so that OSPF routes, which have an AD of 110, are always preferred over RIP routes. This can be done on the router to manipulate the route preference.