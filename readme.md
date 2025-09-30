## Architecture du Projet
* /backend : Ce répertoire contient l'API RESTful. Elle gère la logique métier, les opérations CRUD et la connexion à la base de données.
* /frontend : Ce répertoire contient l'application client. Développée avec React, elle est responsable de l'affichage de l'interface utilisateur et des interactions

## Gestionnaire de Tâches (To-Do List)
- Concept : L'application web la plus classique pour débuter.
- Données : Tâche (id, texte, isCompleted).
- Opérations CRUD :
        'CREATE' : Ajouter une nouvelle tache.
        'READ' : Afficher toutes les taches.
        'UPDATE' : Marquer une tache comme "complétée".
        'DELETE' : Supprimer une tache.

## Technologies Utilisées 
- COMPOSANT         --   TECHNOLOGIE    --   ROLE
- Front-end         --   React          --   Création de l'interface utilisateur dynamique.
- Back-End/Api      --   Node.js        --   Serveur de l'API RESTful pour la gestion des données.
- Base Données      --   Mongo.db       --   Stockage des tâches.
- Gestion paquets   --   npm            --   Installation et gestion des dépendances côté client et serveur.


##  Installation et Lancement en Local
Prérequis : 
- Node.js
- MongoDB 

1. Clonez le dépot GitHub :
- git clone https://github.com/Jjj872/30-09-deploy-exo-avec-todo

2. Configuration et Lancement du Back-end :
- Naviguez vers le dossier backend : `cd backend`
- Installez les dépendances : `npm install`
- Créez un fichier .env à la racine de ce dossier avec votre chaîne de connexion MongoDB et le port exemple : 
        ```MONGO_URI="mongodb://localhost:27017/nomdeladb
        PORT=3001```
- Lancez le serveur : `nodemon app.js`        

 3. Configuration et Lancement du Front-end : 
 - Retournez au dossier racine et naviguez vers le front-end : `cd frontend`
 - Installez les dépendances : `npm install`
 - Lancez l'application : `npm run dev`


## Les endpoints
- GET     /todo       -- Pour récupérer tous les élements de liste
- GET     /todo/:id   -- Récuperer un élements de liste en particulier
- POST    /todo       -- Créer un élément de liste  
- PATCH   /todo/:id   -- Modifier un élément de liste pour le passer à !isCompleted
- DELETE  /todo/:id   -- Supprimer un élément de 


## Schema de données 
- ID : Identifiant unique de l'élement de liste (String)
- title : Contenu textuel de l'élement de liste (String, require)
- isCompleted : Est-ce-que l'élement de liste est complété ? (Boolean, require)
- creationDate : Quand l'élement de liste à été créée (Date, require)
- completedDate : Quand l'élément à été marquer comme validé (Date)
