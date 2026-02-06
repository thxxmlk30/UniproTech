# UNIPRO TECH CLUB - Backend API

## ⚠️ RÉPARTITION DES TÂCHES - À FAIRE PAR LES DÉVELOPPEURS

### Structure des fichiers (vide - à implémenter)

```
backend/src/
├── controllers/     # Logique métier
│   ├── authController.js       → Momo
│   ├── projectController.js     → Dioxane
│   ├── serviceController.js    → MLK
│   └── contactController.js   → Momo
├── models/         # Schémas MongoDB
│   ├── User.js                  → MLK
│   ├── Project.js               → MLK
│   ├── Service.js               → MLK
│   ├── Message.js              → MLK
│   └── Quote.js                → MLK
├── routes/         # Définition routes API
│   ├── authRoutes.js           → Momo
│   ├── projectRoutes.js       → Dioxane
│   ├── serviceRoutes.js       → DMLK
│   └── contactRoutes.js       → Momo
├── middlewares/    # Fonctions middleware
│   ├── authMiddleware.js       → Momo
│   ├── errorMiddleware.js      → TOUS
│   └── uploadMiddleware.js     → Dioxane
├── config/
│   └── database.js             → Dioxane
├── utils/
│   └── generateToken.js        → DMomo
├── services/
│   └── emailService.js         → Momo
└── server.js                   → Dioxane
```

---

## 📋 TÂCHES PAR DÉVELOPPEUR

### Dioxane - Setup + Projects + Server
| Fichier | Description |
|---------|-------------|
| `config/database.js` | Connexion MongoDB avec Mongoose |
| `server.js` | Point d'entrée Express |
| `routes/projectRoutes.js` | Routes CRUD projects |
| `controllers/projectController.js` | Logique CRUD projects + upload |
| `middlewares/uploadMiddleware.js` | Configuration Multer |

### MLK - Modèles + Services
| Fichier | Description |
|---------|-------------|
| `models/User.js` | Schéma utilisateur admin |
| `models/Project.js` | Schéma projets |
| `models/Service.js` | Schéma services |
| `models/Message.js` | Schéma messages contact |
| `models/Quote.js` | Schéma demandes devis |
| `routes/serviceRoutes.js` | Routes services |
| `controllers/serviceController.js` | Logique CRUD services |

### Momo - Auth + Contact + Emails
| Fichier | Description |
|---------|-------------|
| `controllers/authController.js` | Login/Register/Logout JWT |
| `routes/authRoutes.js` | Routes authentication |
| `middlewares/authMiddleware.js` | Vérification JWT |
| `utils/generateToken.js` | Génération tokens JWT |
| `routes/contactRoutes.js` | Routes contact |
| `controllers/contactController.js` | Logique messages + devis |
| `services/emailService.js` | Envoi emails Nodemailer |

### TOUS
| Fichier | Description |
|---------|-------------|
| `middlewares/errorMiddleware.js` | Gestion erreurs centralisée |

---

## 🚀 Installation

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

---

## 🔗 Endpoints API

### Authentification
| Méthode | Route | Description |
|---------|-------|-------------|
| POST | `/api/auth/login` | Connexion admin |
| POST | `/api/auth/register` | Créer admin (protégé) |
| POST | `/api/auth/logout` | Déconnexion |
| GET | `/api/auth/me` | Profil actuel |

### Projets
| Méthode | Route | Description |
|---------|-------|-------------|
| GET | `/api/projects` | Lister tous |
| GET | `/api/projects/:id` | Détails projet |
| POST | `/api/projects` | Créer (admin, image) |
| PUT | `/api/projects/:id` | Modifier (admin) |
| DELETE | `/api/projects/:id` | Supprimer (admin) |

### Services
| Méthode | Route | Description |
|---------|-------|-------------|
| GET | `/api/services` | Lister services |
| POST | `/api/services` | Créer (admin) |
| PUT | `/api/services/:id` | Modifier (admin) |
| DELETE | `/api/services/:id` | Supprimer (admin) |

### Contact
| Méthode | Route | Description |
|---------|-------|-------------|
| POST | `/api/contact/message` | Envoyer message |
| POST | `/api/contact/quote` | Demander devis |
| GET | `/api/contact/messages` | Lister messages (admin) |
| PATCH | `/api/contact/quotes/:id` | Statut devis (admin) |

---

## ✅ Checklist par développeur

**DEV 1:**
- [ ] Installer MongoDB
- [ ] Configurer connection DB
- [ ] Créer server.js
- [ ] Implémenter CRUD Projects
- [ ] Configurer upload images

**DEV 2:**
- [ ] Créer tous les modèles Mongoose
- [ ] Implémenter CRUD Services

**DEV 3:**
- [ ] Implémenter auth JWT
- [ ] Créer middleware auth
- [ ] Implémenter contact/quotes
- [ ] Configurer Nodemailer
