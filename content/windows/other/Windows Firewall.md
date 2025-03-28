---
icon: TiArticle
---
Traffic flows into and out of devices via what we call ports. A firewall is what controls what is - and more importantly isn't - allowed to pass through those ports.

<mark style="background: #FFB86CA6;">Command to open the Windows Defender Firewall is `WF.msc`</mark>

![[windows-firewall.png]]

Windows Firewall offers three firewall profiles: domain, private and public.

- **Domain** - _The domain profile applies to networks where the host system can authenticate to a domain controller._ 
- **Private** - _The private profile is a user-assigned profile and is used to designate private or home networks._
- **Public** - _The default profile is the public profile, used to designate public networks such as Wi-Fi hotspots at coffee shops, airports, and other locations._

If you click on any firewall profile, another screen will appear with two options: **turn the firewall on/off** and **block all incoming connections**.