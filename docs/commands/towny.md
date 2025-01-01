---
sidebar_position: 3
---

# 🏡 Les villes et nations

- Towny est un plugin de protection de zone et de simulation de ville et de nation qui vous permet de créer, protéger et de gérer votre ville, de posséder des terres ainsi que de former des nations et des alliances.

*Beaucoup de possibilité sont disponible dans ce plugin, vous retrouverez donc ici une courte liste des commandes les plus importantes.*

## Gestion d'une Ville et d'une Nation

- Pour commencer, il existe trois catégorie de commande :

`/towny` : Généralité et info sur l'ensemble du plugin.

`/town` : Spécialiser pour les commandes de ville. `/t`

`/nation` : Spécialiser pour les commandes de nation. `/n`

**Rejoindre une ville**

**1-** Demander à une ville de vous inviter avec `/t add <pseudo>` et accepter avec `/accept [Nom de la ville]`

**2-** Regarder les villes ouvertes avec `/t list` et rejoingnez là avec `/t join [Nom de la ville]`

**Créer une ville**

`/town new [Nom de la ville]` : **Créée une nouvelle ville** au nom indiqué dont vous serez le maire.

**Créer une nation**

`/nation new [Nom de la nation]` : **Créez une nouvelle nation** au nom indiqué. La ville dont vous êtes le maire sera la capitale de cette nation.


:::info

- Une ville ou une nation a besoin d'entretien, et celui-ci coûte 5U par jour et par claim. Si vous n'avez pas déposé suffisamment d'argent dans votre banque, votre ville ou votre nation sera supprimée.
- Les commandes entre `/town` et `/nation` sont sensiblement les mêmes.

:::

**Commande utiles**

`/towny prices` : Affiche les prix de la création d'une ville ou d'une nation et le coût d'entretien. 

`/towny map (hug/big)` :  Vous permet d'afficher une carte (dans le chat) où y figure les différentes parcelles, ville et nation par chunk (big: map plus grande; hug: affiche une mimimap dynamique)

`/town toggle neutral (on/off)` : Active ou désactive la neutralité d'une ville ou d'une nation. Si elle est activée, vous ne pouvez pas entrer en guerre. Cependant, vous devrez payer un coût journalier supplémentaire de 500U pour les villes et de 2.000U pour les nations

`/town toggle` : Possibilité d'activer ou de désactiver certain paramètre dans votre ville (pvp, public, explosion, feu, mobs, taxes, libre d'accès).

`/town (deposit/withdraw) [montant]` : Déposer ou retirer de l'argent dans la ville.

**Les Grades de ville**

| Permissions | Maire | Vice Maire | Assistant | Donateur | Vip | Shérif |
|:-----------:|:-----:|:----------:|:---------:|:--------:|:---:|:------:|
| Ajouter un membre |✅|✅|❌|❌|❌|❌|
| Afficher la liste des membres |✅|✅|✅|✅|❌|❌|
| Ajouter un joueur de confiance |✅|❌|❌|❌|❌|❌|
| Liste des alliés |✅|✅|❌|❌|❌|❌|
| Liste des ennemies |✅|✅|❌|❌|❌|❌|
| Historique de la banque |✅|✅|❌|❌|❌|❌|
| Déposer de l'argent |✅|✅|✅|✅|✅|✅|
| Retirer de l'argent |✅|✅|❌|❌|❌|❌|
| Réclamer un chunk |✅|✅|❌|❌|❌|❌|
| Retirer un claim |✅|✅|❌|❌|❌|❌|
| Mettre en vente un claim |✅|❌|❌|❌|❌|❌|
| Retirer de la vente un claim |✅|❌|❌|❌|❌|❌|
| Mettre un membre en prison |✅|✅|✅|❌|❌|✅|
| Libérer un prisonnier |✅|✅|✅|❌|❌|✅|
| Ban un joueur de votre ville |✅|❌|❌|❌|❌|❌|
| Définir un hors la loi |✅|✅|❌|❌|❌|✅|
| Virer un membre |✅|❌|❌|❌|❌|❌|
| Fusionner deux villes |✅|❌|❌|❌|❌|❌|
| Changer les paramètre de la ville |✅|✅|❌|❌|❌|❌|
| Changer les paramètre d'un claim |✅|✅|❌|❌|❌|❌|
| Donner un rôle à un membre |✅|✅|✅|❌|❌|❌|
| Racheter une ville |✅|❌|❌|❌|❌|❌|
