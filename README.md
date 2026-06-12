# 📸 Captat Hazel - Photographie Professionnelle

**Captat Hazel** est un site web fullstack moderne conçu pour une photographe professionnelle. Elle permet de présenter un portfolio immersif, de consulter les tarifs des prestations en temps réel et offre une interface d'administration sécurisée pour la gestion autonome des contenus.

---

## 🚀 Fonctionnalités

### Côté Client (Public)
- **Portfolio Immersif** : Galeries d'images optimisées.
- **Tarification Dynamique** : Consultation des séances et formules à jour.
- **Réservation & Contact** : Formulaire sécurisé avec validation Turnstile (Cloudflare).
- **Design Responsive** : Expérience fluide sur mobile, tablette et desktop.

### Côté Admin (Dashboard)
- **Gestion du Catalogue** : CRUD complet (Créer, Lire, Mettre à jour, Supprimer) des séances et formules.
- **Authentification Sécurisée** : Accès protégé par JWT (JSON Web Token) et hachage Bcrypt.
- **Autonomie Totale** : Mise à jour des tarifs et descriptions sans toucher au code.

---

## 🛠 Stack Technique

### Frontend
- **React 19** : Interface utilisateur réactive et performante.
- **Tailwind CSS** : Stylisation rapide et responsive.
- **Vite** : Outil de build nouvelle génération.
- **Axios** : Communication avec l'API Backend.
- **React Router** : Navigation fluide entre les pages.

### Backend
- **Node.js & Express** : Serveur d'API rapide et modulaire.
- **MySQL** : Base de données relationnelle robuste.
- **JWT** : Sécurisation des routes d'administration.
- **Bcrypt** : Protection des identifiants admin.
- **Helmet & Rate Limit** : Sécurité accrue contre les attaques courantes.

---

## ⚙️ Installation & Configuration

### 1. Clonage du projet
```bash
git clone https://github.com/nina444-dot/Hazel_Photographie.git
cd Hazel_Photographie
```

### 2. Configuration Backend
```bash
cd backend
npm install
```
Créez un fichier `.env` dans le dossier `backend` :
```env
PORT=5000
DB_HOST=localhost
DB_PORT=3306
DB_USER=votre_user
DB_PASSWORD=votre_password
DB_NAME=hazel_photographie
JWT_SECRET=votre_cle_secrete
SECRET_KEY=votre_cle_cloudflare_turnstile
FRONTEND_URL=http://localhost:5173
```

### 3. Configuration Frontend
```bash
cd ../frontend
npm install
```
Créez un fichier `.env` dans le dossier `frontend` :
```env
VITE_API_URL=http://localhost:5000/api
VITE_TURNSTILE_SITE_KEY=votre_cle_publique_cloudflare
```

### 4. Base de Données
J'ai créé et exporté la structure de la base de données dans le fichier Conception/database.sql. Il suffit de l'importer dans un serveur MySQL via PhpMyAdmin ou en ligne de commande pour initialiser le projet.

---

## 🏃 Lancement

### Mode Développement
- **Serveur Backend** : `cd backend && npm run dev`
- **Client Frontend** : `cd frontend && npm run dev`

L'application sera accessible sur `http://localhost:5173`.

---

## 📁 Structure du Projet
```text
├── backend/            # API Node.js/Express (Architecture MVC)
│   ├── config/         # Configuration (BDD, etc.)
│   ├── controllers/    # Logique métier
│   ├── models/         # Requêtes SQL
│   ├── routes/         # Définition des points d'entrée
│   └── middlewares/    # Sécurité et validation
├── frontend/           # Interface React
│   ├── src/
│   │   ├── components/ # Composants réutilisables
│   │   ├── context/    # Gestion d'état global (Auth)
│   │   └── pages/      # Vues principales
└── Conception/         # Ressources SQL et MCD
```
