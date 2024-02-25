---
sidebar_position: 5
---

# ⚔️ Batailles

Cette section est en cours de rédaction.
Merci de revenir plus tard.

# Comment fonctionne les guerres sur AtlasNation ?

Le plugin de guerre que nous utilisons se nomme Eventwar. Il est très facile à utiliser puisqu’il ne comporte que quelques commandes, mais sont fonctionnement semble plus complexe à première vue. Pas de panique, ça va bien se passer !

:::danger
DISCLAMER : Ce wiki ne concerne que le serveur AtlasNation. La configuration du plugin étant très personnalisable, il se peut que son fonctionnement ne vous soit pas familier si vous l’avez déjà rencontré. C’est parti !
:::

# Les différents types de guerres

Il existe 7 types de guerres sur AtlasNation.


| Type de guerre                    | Descriptions                                                                                                                                                                                                     |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RIOT *émeute*                     | insurrection au sein d’une seule ville opposant ses membres entre le camps des rebelles et le camps du gouvernement de la ville                                                                                  |
| CIVIL WAR *guerre civile*         | ville occupée vs nation occupante (guerre dans laquelle une ville conquise combat sa propre nation pour (re)gagner son indépendance).                                                                            |
| TOWN WAR guerre de villes         | ville vs ville (guerre entre deux villes)                                                                                                                                                                        |
| NATION WAR guerre de nations      | nation vs nation (guerre entre deux nation)                                                                                                                                                                      |
| ALLIANCE WAR *guerre d’alliances* | alliance vs alliance (guerre entre plusieurs nation de deux alliances différentes)                                                                                                                               |
| WORLD WAR *guerre mondiale*       | nation vs toute les nations définit en ennemis (toutes les nations du serveur rentrent en guerre contre les nations qu’elles ont définit comme “ennemis” via la commande /n enemy add/remove [nom de la nation]) |

# Déclarer une guerre

## Obtenir un _Declaration of War Book_

Pour déclarer une guerre, vous aurez besoin d’un livre de Déclaration de Guerre (”_Declaration of War book_”) du type de guerre que vous souhaitez lancer. Vous pouvez vous procurer ces livres auprès d’autres joueurs ou bien en l’achetant via la commande `/t redeem token [type de guerre]` à l’aide de _tokens_.

---

Chaque ville génère **10 tokens par jours** si elle remplit les conditions suivantes :

- la ville et sa nation ne sont pas en guerre.
- la ville n’est pas pacifique (_peaceful_), un statut qui protège des déclaration de guerre en contrepartie d’un coût d’entretient de la ville supplémentaire de **+25U**, configurable via la commande `/t toggle peaceful [on/off]`
- la ville n’est pas dans une nation pacifique (_peaceful_), un statut qui protège des déclaration de guerre en contrepartie d’un coût d’entretient de la ville supplémentaire de **+100U**, configurable via la commande `/n toggle peaceful [on/off]`

---

:::tip
 Plus votre nation aura de villes, plus vous produirez de tokens ! Attention néanmoins, les livres peuvent être échangés, mais pas les tokens, qui sont propres à chaque ville !
:::

Chaque type de guerre a un prix différent (prix unitaire d’un livre de chaque type en tokens) :


| Type de guerre   | prix unitaire | commandes                         | prérequis          |
| ---------------- | ------------- | --------------------------------- | ------------------ |
| TOWN WAR         | 90            | `/t redeem token townwar`         | ville              |
| NATION WAR       | 55            | `/t redeem token nationwar`       | ville dans un pays |
| ALLIANCE WAR     | 70            | `/t redeem token alliancewar`     | ville dans un pays |
| WORLD WAR        | 350           | `/t redeem token worldwar`        | ville dans un pays |
| RIOT             | 145           | `/t redeem token riot`            | ville              |
| CIVIL WAR        | 125           | `/t redeem token civilwar`        | ville              |
| INDEPENDANCE WAR | 45            | `/t redeem token independancewar` | ville dans un pays | 

## Lancer une guerre

Une fois votre livre obtenu, gardez le dans votre main principale et déclarer une guerre via la commande `/declare war token [type de guerre] [nom de la ville/nation que vous attaquez]`. Bien entendu, le type de guerre mentionné dans la commande doit être le même que le type de guerre du livre que vous tenez en main.

Une fois la guerre déclarée, vous bénéficierez de 3 minutes de préparations, tout types de guerres confondus. A vos armes… prêt ? Tirez !

:::info
Spécificités des révoltes (RIOT, CIVIL WAR, INDEPENDANCE WAR)
> Durant le temps de préparation (3 minutes), les joueurs concernés par le conflit devront choisir un camp, auquel cas il ne pourront pas participer au conflit. Pour choisir un camp, exécutez l’une des deux commandes suivantes :
> `/declare government`
> `/declare rebel`
:::

:::info
Spécificités des guerres d’alliance (ALLIANCE WAR)
> Les nation alliées à la vote par la commande `/n ally` recevront une notification s’ils sont en ligne, les invitants à rejoindre ou non la guerre à vos côtés. Si vos alliés n’ont pas reçu de demande, vous pouvez l’inviter manuellement via la commande `/nation alliancewar request [nom de la nation]`
:::

## Permissions des villes et des nations en période de guerre

Lorsque vous êtes en guerre, certaines fonctionnalités sont bloqués, car seulement disponible en période de paix. Voici les principales :

---

Dans les claims des villes en guerre :

- activation des explosions (les construction détruites sont automatiquement réparés)
- activation de la propagation du feu
- octroie de certaines permissions aux joueurs participant aux guerres
    - ITEMUSE (utilisation d’items comme les potions, arc…)
    - SWITCH (possibilité d’interagir avec les blocs comme les coffres, portes, redstone…)

Permissions

- Les villes en guerre ne peuvent plus accueillir de nouveaux membres durant le conflit
- Les nations en guerre ne peuvent plus accueillir de nouveaux membres durant le conflit
- Les résident ne peuvent plus quitter leur ville tant qu’elle est en guerre
- Les membres ne peuvent plus quitter leur nation tant qu’elle est en guerre

---

# Gagner une guerre

## Les conditions de victoire selon le type de guerre

Chaque guerre dispose de conditions de victoires différentes :


| Type de guerre   | Participants                                        | Durée               | Conditions de victoires                                                                          |
| ---------------- | --------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------ |
| RIOT             | rebelles vs gouvernement de la ville                | 96 heures (4 jours) | • victoire par domination • victoire par capitulation                                            |
| TOWN WAR         | 2 villes                                            | 72 heures (3 jours) | • victoire à point • victoire par conquête • victoire par domination • victoire par capitulation |
| CIVIL WAR        | rebelles vs gouvernement de la nation               | Illimité            | • victoire par conquête • victoire par domination • victoire par capitulation                    |
| INDEPENDANCE WAR | ville occupée vs nation occupante                   | Illimité            | • victoire par conquête • victoire par domination • victoire par capitulation                    |
| NATION WAR       | 2 nation composées de plusieurs villes              | Illimité            | • victoire par conquête • victoire par domination • victoire par capitulation                    |
| ALLIANCE WAR     | 2 alliances composées de plusieurs nation           | Illimité            | • victoire par conquête • victoire par domination • victoire par capitulation                    |
| WORLD WAR        | Toutes les nations contre celles définit en ennemis | Illimité            | • victoire par conquête • victoire par domination • victoire par capitulation                    | 

## Les conditions de victoire

Voici les différentes conditions de victoires, et les moyens d’y parvenir.

### Victoire par capitulation (_/surrender_)

Cette condition de victoire n’est obtenable que si le camp adversaire capitule. Lorsque vous vous rendez via la commande `/surrender`, cette demande de capitulation est proposé aux adversaires, qui peuvent l’accepter ou la refuser.

:::tip
Utilisez divers stratégies pour contraindre votre adversaire à capituler. Même si vous êtes libre de refuser une demande de capitulation, nous vous encourageons à justifier ce refus de manière RP.
:::

Vous pouvez capituler de plusieurs manières


| Commandes                                                | Descriptions                                                                              |
| -------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `/surrender whitepeace`                                  | Paix blanche, le plugin n’effectuera aucun transfert de butin ou de territoire            |
| `/surrender money {nombre}`                              | Vous vous rendez en offrant une certaine somme d’argent à l’adversaire                    |
| `/surrender town {ville1 ville 2 ville3}`                | Vous vous rendez en offrant une ou plusieurs villes aux adversaires, qui seront conquises |
| `/surrender money {nombre} town {ville1 ville 2 ville3}` | Vous vous rendez en offrant à la fois de l’argent mais aussi une ou plusieurs villes      |

:::tip
Vous êtes libre de négocier avec votre adversaire avant de proposer une paix blanche, et d’échanger entre vous ce que le plugin ne permet pas de faire (discuter des frontières, des alliances…)
:::

### Victoire à point (durée limitée seulement)

> Type de guerre : TOWN WAR

**Cette condition de victoire s’applique spécifiquement aux conflits qui dispose d’une durée limitée.**

Cette condition n’est obtenable que si aucune autre condition de victoire n’est remplie avant la fin du temps imparti. Le camp disposant alors du plus de points remporte la guerre.

Rappel du calcul des points :

| Pour chaque élimination de joueurs (kill) | 10 pts  |
| ----------------------------------------- | ------- |
| Pour chaque capture de claims de villes   | 1 pts   |
| Pour chaque conquêtes de ville            | 50 pts  |
| Pour chaque élimination de nation         | 100 pts |

:::tip 
Même s’il sont inutilisable, vous pouvez quand même compter les points dans tous les types de guerres, comme mesure indicative (compter le nombre de morts, de claims capturés…).
:::
 
### Victoire par conquête territoriale (capture des claims de villes)

> Types de guerre : toutes sauf RIOT

Cette condition de victoire consiste à conquérir territorialement toutes les villes ennemis, en capturant leurs claims.

Les villes conquises territorialement ne peuvent plus participer à la guerre, et leurs membres également.

Si toutes les villes du camps adverses sont conquises, la guerre prend fin et l’adversaire perd le conflit.

#### Conquérir une ville en capturant son _homeblock_

Pour conquérir territorialement une ville, vous devez prendre possession de son _homeblock_, c’est-à-dire du claims dans lequel se trouve le home de la ville, qui permet à ses membres de se téléporter via la commande `/t spawn`.

Pour capturer le _homeblock_ d’une ville ennemie et ainsi l’exclure des combats, vous devez d’abord commencer par conquérir les claims en bordure de la ville.

N’espérez pas directement capturer le _homeblock_ en vous introduisant dans la ville. Vous ne pouvez pas capturer un claim d’une ville s’il est entourer d’autres claims non-conquis. Attaquez d’abord les claims en bordure de la ville, en contact avec la _wilderness_ (la zone non-claim), puis frayez vous un passage jusqu’au _homeblock_ en veillant à ce que chaque claims conquit soient connectés entre eux.

#### Capturer les claims

Chaque claims possède une barre de vie. Pour conquérir un claim, vous devez faire baisser cette barre de vie en restant à l’intérieur.

Un claim normal dispose de **36 points de vie** et un homeblock **120 points de vie**. Chaque joueur ennemis présent dans ce claim retire **un point de vie toutes les 5 secondes.** Vous devez vous trouver au dessus de la couche 5 pour infliger des dégâts aux claims.
  
Pour défendre vos propres claims, vous devrez donc empêcher les ennemis de pénétrer au sein de votre territoires. Les défenseurs et leurs alliés disposent d’un effet de régénération dans leurs claims.

Une fois que la vie du claim atteint 0, vous pouvez passer au suivant jusqu’à atteindre l’homeblock et neutraliser la ville.

:::note
Les joueurs invisibles n’infligent aucun dommage aux claims. Les propriétaires des claims sont informés de leur attaque.
:::

### Victoire par domination militaire (élimination des joueurs adverses)

> Type de guerre : toutes

Cette condition de victoire est remplie lorsque tous les joueurs du camp adverses ont épuisé leur vie, c’est-à-dire qu’ils sont mort trop de fois et ne peuvent donc plus participer à la guerre.

En effet, vous disposez d’un certains nombres de vie durant les conflits. Vous avez individuellement droit à un certain nombre de morts. Si un joueur dépasse ce nombre, il ne pourra ni capturer ni combattre les joueurs dans les claims des villes en guerre, à l’instar des joueurs non-participant aux conflits.


| Type de guerre   | Nombre de vie pour les participants | Nombre de vie pour les maires / dirigeants |
| ---------------- | ----------------------------------- | ------------------------------------------ |
| RIOT             | 5                                   | 8                                          |
| TOWN WAR         | 10                                  | 10                                         |
| CIVIL WAR        | 5                                   | 5                                          |
| INDEPENDANCE WAR | 10                                  | 10                                         |
| NATION WAR       | 10                                  | 10                                         |
| ALLIANCE WAR     | 10                                  | 10                                         | 
| WORLD WAR        | 5                                   | 5                                          |

# Annexion de villes

Certaines guerres peuvent conduire à l’annexion de villes par des nations. Ces villes sont donc occupées par la nation conquérante, elles et leurs résidents sont soumise aux règles du pays occupants, à ses taxes, etc…

Les villes occupées peuvent retrouver leur liberté de deux manières : soit si l’occupant accorde l’indépendance à la ville, soit si elle déclare et remporte une guerre d’indépendance. Les villes annexées resteront occupés jusqu’à leur libération.

## Nos règles

Bien que que nous soyons opposé à l’ingérence de notre équipe dans le jeu, nous nous réservons le droit d’intervenir en cas de conflit dépassant ce cadre.

Nous ne tolérons pas la toxicité. Les guerres ne doivent pas être motivés par l’envie de déranger “pour le fun”, ou à l’inverse de combattre sans réelles motivations autre que le plaisir de tuer les autres, sauf si l’arrangement est définit consensuellement entre les participants. De même, nous ne tolérons pas le grief gratuit et irraisonné.

Nous rappelons que les règles de respects et de savoir-vivre s’appliquent aussi durant les guerres. Si ces événements ont tendance à provoquer chez vous de la frustration, je vous conseille personnellement de fermer votre session et de vous poser en ouvrant un livre (sans rire ça fait du bien). N’oubliez pas que vous jouez un jeu, et que vous êtes là pour vous amusez.

A l’inverse, les guerres font partie du jeu. Vous pouvez être amené à combattre, et nous (le staff) ne feront rien contre. Entouré vous d’alliés ou demander la protection des plus puissants.