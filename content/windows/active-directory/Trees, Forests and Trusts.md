---
icon: TiArticle
---
### Trees

- A tree is a structure that integrates multiple domains sharing the same namespace.
- For example, a root domain like `thm.local` can have subdomains such as `uk.thm.local` and `us.thm.local`.
- <mark style="background: #ABF7F7A6;">Trees allow independent control for each domain</mark> and localized IT teams to manage their respective domains.
- <mark style="background: #D2B3FFA6;">Each component in trees are called 'domains'</mark>
- Policies can be customized for each domain, and the Enterprise Admins group is introduced for enterprise-wide domain control.
- Domain Admins group retains control over individual domains within the tree.

![[abea24b7979676a1dcc0c568054544c8.png]]
### Forests

- A forest is the union of multiple domain trees with different namespaces.
- For instance, merging two companies with separate domains like `thm.local` and `mht.local` creates a forest.
- Each tree is managed independently, preserving namespace-specific controls.

![[03448c2faf976db890118d835000bab7.png]]

![[9ad6a5a237ae9a0afecbb75cb9884f25.png]]
### Trust Relationships

- Trust relationships enable cross-domain authorization for users to access resources.
- <mark style="background: #FFB86CA6;">One-way trusts allow users from one domain to access resources in another, with access opposite to the direction of trust.</mark>
- <mark style="background: #FF5582A6;">Two-way trusts provide mutual authorization between domains and are automatically established in trees and forests.</mark>
- Trust relationships only provide the capability for authorization; specific access must still be explicitly granted.

![[af95eb1a4b6c672491d8989f79c00200.png]]