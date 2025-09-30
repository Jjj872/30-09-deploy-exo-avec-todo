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


## Déploiement en Ligne
### Déployer le back-end
Nous allons utiliser **Render**, une plateforme gratuite et simple pour héberger un serveur.

- Connexion à Render
1. Rendez-vous sur : [https://dashboard.render.com/](https://dashboard.render.com/login)
2. Cliquez sur **Sign Up** (si vous n’avez pas de compte) ou **Log In** (si vous en avez déjà un)
3. Une fois connecté, cliquez sur **“Skip”** 

- Créer un nouveau service
1. Cliquez sur **“+ Add New”**
2. Sélectionnez **“Web Service”**
3. Connectez Render à votre compte **GitHub**
4. Choisissez le dépôt du projet que vous voulez déployer
    - Dans mon cas : **to-do-list-api**

#### Configuration du service
1. **Nom** : donnez un nom à votre service (exemple : `todo-list-backend`)
2. **Branche** : sélectionnez la branche principale du projet (généralement `main`)
3. **Build Command** : `npm run build`
4. **Start Command** : `npm start`
5. **Instance Type** : choisissez l’offre gratuite (Free).

#### Lancer le déploiement
- Cliquez sur **“Create Web Service”** → Render va automatiquement :
1. Installer vos dépendances (`npm install`)
2. Lancer votre commande de build
3. Démarrer le serveur

### Déployer le front-end
Nous allons utiliser Vercel, une plateforme gratuite et simple pour la mise en ligne.

- Connexion à Vercel
1. Rendez-vous sur : `https://vercel.com/`
2. Cliquez sur **Sign Up** (si vous n’avez pas de compte) ou **Log In** (si vous en avez déjà un)
3. Connectez-vous avec **GitHub** pour importer directement vos projets

- Importer votre projet
1. Cliquez sur **“Add New Project”**
2. Choisissez le dépôt GitHub qui contient votre **front-end** (par ex. `to-do-list-front`)
3. Vérifiez que Vercel a bien détecté votre technologie :
    - **React** → Vercel reconnaît automatiquement
    - **HTML/CSS/JS classique** → choisissez **“Other”**

#### Configuration du projet
1. **Nom du projet** : ex. `todo-list-frontend`
2. **Framework Preset** : choisissez celui qui correspond (React, Vue, etc.)
3. **Build Command** (si besoin, pour React par ex.) :

-  Lancer le déploiement :
Cliquez sur Deploy.
Après quelques secondes, Vercel vous fournit une URL publique du type :
`https://todo-list-frontend.vercel.app`

#### front et back

1. Back-end : hébergé sur Render → `https://todo-list-backend-pbj6.onrender.com`
2. Front-end : hébergé sur Vercel → `https://30-09-deploy-exo-avec-todo.vercel.app/`

- Connecter front et back :

1. 
```javascript
fetch("https://todo-list-api.onrender.com/tasks")
  .then(res => res.json())
  .then(data => console.log(data));
``` 

- Vérifier le front : 
1. Ouvrez l’application [`https://todo-list-frontend.vercel.app`](https://todo-list-frontend.vercel.app)  
2. Testez l’application :
    - Ajouter un tache.
    - Supprimer une tache.


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
