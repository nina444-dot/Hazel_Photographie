# 📸 Hazel Photographie

Bienvenue sur le dépôt du projet Hazel Photographie. Cette application permet de gérer les prestations et la galerie d'un studio photo de manière dynamique.

## Architecture du projet
Le projet est séparé en deux parties principales :
- **/backend** : API construite avec Node.js et Express, utilisant une architecture **MVC**.
- **/frontend** : Interface utilisateur développée avec React et Tailwind CSS v4.

## 🛠 Technologies
- **Base de données** : MariaDB / MySQL avec un **Pool de connexions** pour la performance.
- **Serveur** : Node.js (Express, Dotenv, Cors, Mysql2).
- **Client** : React (Hooks useState/useEffect pour les appels API).

## ⚙️ Installation
1. Clonez le projet.
2. Créez un fichier `.env` dans `/backend` avec vos accès BDD.
3. Lancez `npm install` dans les deux dossiers.