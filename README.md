# TalentFlow GPEC - Backend (NestJS)

Bienvenue sur le backend de **TalentFlow GPEC**, l'API robuste et sécurisée propulsant l'application de Gestion Prévisionnelle des Emplois et des Compétences.

## 🚀 Description

Ce backend expose une API RESTful complète permettant de gérer l'ensemble des données de l'application TalentFlow :
- Gestion des Utilisateurs et Authentification (avec JWT).
- Gestion du référentiel GPEC : Domaines (Départements), Postes (Jobs), et Compétences (Skills).
- Gestion des Collaborateurs et de leurs niveaux d'expertise.
- Gestion des Formations.

## 🛠️ Stack Technique

- **Framework :** NestJS (Node.js)
- **Base de données :** PostgreSQL
- **ORM :** TypeORM
- **Authentification :** Passport (JWT) & Bcrypt pour le hachage des mots de passe.
- **Langage :** TypeScript

## ⚙️ Prérequis

- **Node.js** (v18.x ou supérieure)
- **NPM** (ou Yarn)
- **PostgreSQL** installé et en cours d'exécution sur votre machine.

## 💻 Installation

1. **Installer les dépendances :**
   ```bash
   npm install
   ```

2. **Configuration de la Base de Données :**
   Assurez-vous que PostgreSQL est en marche. Le backend est configuré par défaut pour se connecter avec les informations suivantes (visibles dans `seed.ts` et dans votre configuration `app.module.ts`) :
   - Hôte : `localhost`
   - Port : `5432`
   - Utilisateur : `postgres`
   - Mot de passe : `admin`
   - Base de données : `TalentFlow-GPEC` (sera créée ou synchronisée automatiquement par TypeORM).

   *(Vous pouvez adapter ces paramètres dans le code ou via un fichier `.env` si configuré).*

## 🌿 Remplissage de la base de données (Seeding)

Pour tester l'application avec un jeu de données complet (Domaines, Postes, Compétences, Formations et 20 Employés/Utilisateurs fictifs), exécutez le script de seeding :

```bash
npx ts-node seed.ts
```
*(Attention : Cette commande efface la structure actuelle et recrée une base propre à chaque exécution).*

**Identifiant Administrateur par défaut généré par le seed :**
- **Email :** `mohamed.elghazoui@copag.ma`
- **Mot de passe :** `password`

## 🏃 Démarrage de l'API

1. **Démarrer en mode développement (avec rechargement automatique) :**
   ```bash
   npm run start:dev
   ```

2. **Démarrer en production :**
   ```bash
   npm run build
   npm run start:prod
   ```

L'API sera accessible par défaut sur `http://localhost:3000/api`.

## 📁 Structure du projet

- `src/auth/` : Stratégies JWT et logique d'authentification.
- `src/users/` : Gestion des comptes utilisateurs.
- `src/employees/` : Gestion des collaborateurs et de leurs profils.
- `src/departments/` : Gestion de l'architecture de l'entreprise (Domaines).
- `src/jobs/` : Fiches de poste et compétences requises.
- `src/skills/` : Dictionnaire des compétences.
- `src/trainings/` : Catalogue de formations.
