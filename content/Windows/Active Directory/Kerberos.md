---
icon: TiArticle
---
![[word-image-1-3199374741.jpeg]]


When Kerberos is used for authentication, the following process happens:

1. **Initial Login**: You log into your device by entering your credentials (e.g., username and password).

![[d36f5a024c20fb480cdae8cd09ddc09f.png]]

2. **Authentication Request**: Your device sends these credentials to the **Authentication Server (AS)**, which is a part of the **Key Distribution Center (KDC)**.
3. **Ticket Granting Ticket (TGT)**: If the credentials are valid, the **AS** generates and sends you a **Ticket Granting Ticket (TGT)**. This ticket is encrypted and proves your identity for future requests, so you don't need to transmit your password again.

![[84504666e78373c613d3e05d176282dc.png]]

4. **Requesting Service Tickets**: When you want to access a specific resource (e.g., a file server), your device sends the **TGT** to the **Ticket Granting Server (TGS)**, which is another component of the **KDC**. You also include a request for access to that resource.

![[8fbf08d03459c1b792f3b6efa4d7f285.png]]

5. **Service Ticket Issued**: The **TGS** verifies your TGT and issues a **service ticket**. This ticket is specific to the resource you want to access and ensures secure communication.
6. **Resource Access**: Your device presents the **service ticket** to the resource (e.g., file server). If the ticket is valid, the resource grants you access.