---
icon: TiArticle
---
We will create a new GPO, call it `Auto Lock Screen`, and edit it. The policy to achieve what we want is located in the following route:

![[44c0cde18837cb6333c78749356ac0ee.png]]

**Note:** You might notice that if our GPO is applied to the root domain, it will also be inherited by other OUs like `Sales` or `Marketing`. Since these OUs contain users only, any Computer Configuration in our GPO will be ignored by them.

![[fcfc77d126991ffee8c927202b4dde37.png]]