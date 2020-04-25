# TO DO
- Passer le bouton "ajouter une dépense" en pastille en bas à droite de l'écran sur mobile
- Trouver un meilleur système de navigation

# Ca decount

Application de partage de dépenses entre amis, codée en `javascript` (orienté "objet")

## Fonctionnalités

- enregistrer des personnes (créer, éditer, supprimer)

  - entrer le `pseudo` (**unique**)
  - _email_
  - _phone_

- enregistrer une dépense (créer, éditer, supprimer)

  - entrer le montant de la dépense
  - associer la dépense à **une** personne
  - _label de la dépense_
  - _date de la dépense_

- rembourser des amis (_version 1_)

  - calculer la difference de depnse entre chaque personnes
  - afficher l'argent que X a avancer
  - afficher l'argent que Y devra rembourser
  - afficher le nombre de parts

- Afficher des infos utiles :

  - la liste des personnes
  - le nombre de personnes
  - le nombre de dépenses
  - le montant total des dépenses
  - afficher la liste des dépenses d'une personne en particulier

## Idées de fonctionnalités supplémentaires

- enregistrer un remboursement

- **répartition inégale**: le fait que chaque personne ne va pas forcément payer la meme chose donc que la répartition ne soit pas forcément égale. (X ne boit pas d'alcool donc il ne participe pas a la cagnotte alcool etc..)

- gerer des categories de depenses / gerer differents budgets par categorie
- rappel sur les échéances de paiement / envoyer automatiquement des mise en demeure à partir de X temps xD
- permettre de prendre des photos
- gestion des connexion / mdp
- créer une relation entre plusieurs personnes
- differencer l'especes et CB
- gestion des devises

### Entités, concepts clés

- **Dépense**
- **Personne**
- Remboursement
- Somme d'argent (montant)
- Utilisateur (Personne qui utilise l'appli)
