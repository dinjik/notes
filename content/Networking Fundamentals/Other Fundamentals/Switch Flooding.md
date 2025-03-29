Switch flooding occurs when a network switch receives a frame with a destination MAC address it does not recognize or has not yet learned. Since the switch does not know which port the destination device is connected to, it forwards (floods) the frame out of all ports except the one it was received on. This ensures the frame reaches the intended recipient.

![[Pasted image 20250329001625.png]]

#### **How Switch Flooding Works**

1. **Unknown Destination** – When a switch receives a frame with a MAC address not listed in its MAC address table, it considers the destination unknown.
2. **Flooding the Frame** – The switch sends the frame to all ports except the incoming one, ensuring the intended recipient gets it.
3. **Learning Process** – If the destination device responds, the switch records its MAC address and the associated port in its MAC table, allowing future frames to be sent directly.

Switch flooding is a normal part of the learning process for switches but can be exploited in attacks like MAC flooding, which overloads the switch’s MAC table and forces it to flood all traffic.