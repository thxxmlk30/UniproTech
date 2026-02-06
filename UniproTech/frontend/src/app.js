// App.js - JavaScript principal pour le site UNIPRO TECH CLUB

// ====================
// Gestion du dark mode
// ====================
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Charger le thème depuis localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    htmlElement.classList.add('dark');
} else {
    htmlElement.classList.remove('dark');
}

// Écouter le clic sur le bouton de thème
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        htmlElement.classList.toggle('dark');
        localStorage.setItem('theme', htmlElement.classList.contains('dark') ? 'dark' : 'light');
    });
}

// ====================
// Menu mobile
// ====================
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// ====================
// Navigation
// ====================
function router(page) {
    // Cacher toutes les sections
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // Afficher la section demandée
    const targetSection = document.getElementById(page);
    if (targetSection) {
        targetSection.classList.remove('hidden');
        targetSection.classList.add('fade-in');
    }

    // Fermer le menu mobile
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.classList.add('hidden');
    }

    // Gérer l'affichage des éléments du header
    const searchDiv = document.getElementById('global-search')?.closest('.relative');
    const themeToggle = document.getElementById('theme-toggle');
    const authBtn = document.getElementById('auth-btn');
    const menuToggle = document.getElementById('menuToggle');
    const backButton = document.getElementById('back-button');
    
    if (page === 'login' || page === 'admin') {
        // Cacher les éléments sur les pages login et admin
        searchDiv?.classList.add('hidden');
        themeToggle?.classList.add('hidden');
        authBtn?.classList.add('hidden');
        menuToggle?.classList.add('hidden');
    } else {
        // Afficher les éléments sur les autres pages
        searchDiv?.classList.remove('hidden');
        themeToggle?.classList.remove('hidden');
        authBtn?.classList.remove('hidden');
        menuToggle?.classList.remove('hidden');
    }

    // Afficher/cacher le bouton retour
    if (page === 'home') {
        backButton?.classList.add('hidden');
    } else {
        backButton?.classList.remove('hidden');
    }
}

// Fonction pour revenir à l'accueil
function goBack() {
    router('home');
}

// ====================
// Recherche globale
// ====================
const searchInput = document.getElementById('global-search');

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        // Cacher toutes les sections sauf celles qui correspondent à la recherche
        const sections = document.querySelectorAll('.page-section');
        sections.forEach(section => {
            // Afficher la section si elle contient le terme de recherche
            // ou si la recherche est vide (afficher Accueil par défaut)
            if (searchTerm === '') {
                if (section.id === 'home') {
                    section.classList.remove('hidden');
                } else {
                    section.classList.add('hidden');
                }
            } else {
                const sectionText = section.innerText.toLowerCase();
                if (sectionText.includes(searchTerm)) {
                    section.classList.remove('hidden');
                } else {
                    section.classList.add('hidden');
                }
            }
        });
    });
}

// ====================
// Authentification
// ====================
let isAdminLoggedIn = false;

const authBtn = document.getElementById('auth-btn');
const authBtnMobile = document.getElementById('auth-btn-mobile');

if (authBtn) {
    authBtn.addEventListener('click', handleAuthClick);
}

if (authBtnMobile) {
    authBtnMobile.addEventListener('click', handleAuthClick);
}

function handleAuthClick() {
    if (isAdminLoggedIn) {
        logout();
    } else {
        router('login');
    }
}

function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simulation de connexion (admin/admin)
    if (username === 'admin' && password === 'admin') {
        isAdminLoggedIn = true;
        
        // Mettre à jour les boutons d'authentification
        updateAuthButtons();
        
        // Rediriger vers le tableau de bord
        router('admin');
    } else {
        alert('Identifiant ou mot de passe incorrect');
    }
}

function updateAuthButtons() {
    if (authBtn && authBtnMobile) {
        if (isAdminLoggedIn) {
            authBtn.textContent = 'Déconnexion';
            authBtnMobile.textContent = 'Déconnexion';
        } else {
            authBtn.textContent = 'Espace Admin';
            authBtnMobile.textContent = 'Espace Admin';
        }
    }
}

function logout() {
    isAdminLoggedIn = false;
    
    // Mettre à jour les boutons d'authentification
    updateAuthButtons();
    
    // Rediriger vers la page d'accueil
    router('home');
}

// ====================
// Gestion des formulaires
// ====================
function handleContactSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Traitement du formulaire (simulation)
    alert('Message envoyé !');
    form.reset();
    
    // Cacher le formulaire de demande de devis si nécessaire
    if (form.id === 'quote-form') {
        switchContactTab('message');
    }
}

function switchContactTab(tab) {
    const messageForm = document.getElementById('contact-form');
    const quoteForm = document.getElementById('quote-form');
    const messageTab = document.getElementById('tab-message');
    const quoteTab = document.getElementById('tab-quote');
    
    if (tab === 'message') {
        // Afficher le formulaire de message
        messageForm.classList.remove('hidden');
        quoteForm.classList.add('hidden');
        
        // Mettre à jour les onglets
        messageTab.classList.add('border-brand-blue', 'text-brand-blue', 'dark:text-blue-400');
        messageTab.classList.remove('border-transparent', 'text-gray-500');
        quoteTab.classList.add('border-transparent', 'text-gray-500');
        quoteTab.classList.remove('border-brand-blue', 'text-brand-blue', 'dark:text-blue-400');
    } else if (tab === 'quote') {
        // Afficher le formulaire de demande de devis
        quoteForm.classList.remove('hidden');
        messageForm.classList.add('hidden');
        
        // Mettre à jour les onglets
        quoteTab.classList.add('border-brand-blue', 'text-brand-blue', 'dark:text-blue-400');
        quoteTab.classList.remove('border-transparent', 'text-gray-500');
        messageTab.classList.add('border-transparent', 'text-gray-500');
        messageTab.classList.remove('border-brand-blue', 'text-brand-blue', 'dark:text-blue-400');
    }
}

// ====================
// Gestion des projets
// ====================
let projects = [
    { id: 1, title: "Site web pour une association", category: "Web", description: "Site vitrine responsive pour une association locale", status: "Completed" },
    { id: 2, title: "Application mobile de gestion", category: "Mobile", description: "Application de gestion de tâches pour les entreprises", status: "In Progress" },
    { id: 3, title: "Assistant virtuel IA", category: "IA", description: "Assistant virtuel utilisant l'intelligence artificielle", status: "Completed" },
    { id: 4, title: "Plateforme e-commerce", category: "Web", description: "Plateforme de ventes en ligne avec panier d'achat", status: "Completed" },
    { id: 5, title: "Application de suivi de santé", category: "Mobile", description: "Application de suivi de l'état de santé des patients", status: "In Progress" },
    { id: 6, title: "Système de recommandation", category: "IA", description: "Système de recommandation de contenu pour les utilisateurs", status: "Completed" },
];

function filterProjects(category) {
    const filters = document.querySelectorAll('.filter-btn');
    const projectsGrid = document.getElementById('projects-grid');
    const noProjects = document.getElementById('no-projects');
    
    // Mettre à jour les filtres
    filters.forEach(filter => {
        filter.classList.remove('bg-brand-blue', 'text-white');
        filter.classList.add('bg-gray-200', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');
        
        if (filter.textContent === (category === 'all' ? 'Tous' : category)) {
            filter.classList.remove('bg-gray-200', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');
            filter.classList.add('bg-brand-blue', 'text-white');
        }
    });
    
    // Filtrer les projets
    const filteredProjects = category === 'all' ? projects : projects.filter(project => project.category === category);
    
    // Afficher les projets
    if (filteredProjects.length > 0) {
        projectsGrid.classList.remove('hidden');
        noProjects.classList.add('hidden');
        
        // Mettre à jour la grille
        projectsGrid.innerHTML = '';
        filteredProjects.forEach(project => {
            const projectCard = createProjectCard(project);
            projectsGrid.appendChild(projectCard);
        });
    } else {
        projectsGrid.classList.add('hidden');
        noProjects.classList.remove('hidden');
    }
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden';
    
    card.innerHTML = `
        <div class="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <i class="fas fa-laptop-code text-4xl text-gray-400"></i>
        </div>
        <div class="p-6">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-xl font-semibold">${project.title}</h3>
                <span class="px-2 py-1 rounded-full text-xs font-medium ${project.category === 'Web' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' : 
                                                                   project.category === 'Mobile' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 
                                                                   'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'}">${project.category}</span>
            </div>
            <p class="text-gray-600 dark:text-gray-300 mb-4">${project.description}</p>
            <div class="flex justify-between items-center">
                <span class="text-xs text-gray-500">${project.status}</span>
                <button class="text-brand-blue dark:text-blue-400 font-medium">Voir détails</button>
            </div>
        </div>
    `;
    
    return card;
}

// ====================
// Gestion des services
// ====================
let services = [
    { id: 1, title: "Développement web", description: "Création de sites web responsives et modernes" },
    { id: 2, title: "Développement mobile", description: "Applications mobiles pour iOS et Android" },
    { id: 3, title: "Intelligence artificielle", description: "Solutions basées sur l'intelligence artificielle" },
    { id: 4, title: "Conseil en informatique", description: "Consulting pour l'amélioration de vos systèmes" },
    { id: 5, title: "Maintenance de sites web", description: "Maintenance et mise à jour de vos sites web" },
    { id: 6, title: "Formations techniques", description: "Formations pour améliorer vos compétences" },
];

function initServices() {
    const servicesGrid = document.getElementById('services-grid');
    
    if (servicesGrid) {
        services.forEach(service => {
            const serviceCard = createServiceCard(service);
            servicesGrid.appendChild(serviceCard);
        });
    }
}

function createServiceCard(service) {
    const card = document.createElement('div');
    card.className = 'bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6';
    
    card.innerHTML = `
        <div class="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-brand-blue mb-4">
            <i class="fas fa-code text-xl"></i>
        </div>
        <h3 class="text-xl font-semibold mb-2">${service.title}</h3>
        <p class="text-gray-600 dark:text-gray-300">${service.description}</p>
    `;
    
    return card;
}

// ====================
// Gestion des statistiques
// ====================
let stats = {
    projects: 15,
    members: 42,
    years: 3,
    satisfaction: 100,
};

function initStats() {
    const statProjects = document.getElementById('stat-projects');
    const statMembers = document.getElementById('stat-members');
    const statYears = document.getElementById('stat-years');
    const statSatisfaction = document.getElementById('stat-satisfaction');
    
    if (statProjects) {
        countUp(statProjects, stats.projects);
    }
    
    if (statMembers) {
        countUp(statMembers, stats.members);
    }
    
    if (statYears) {
        countUp(statYears, stats.years);
    }
    
    if (statSatisfaction) {
        statSatisfaction.textContent = `${stats.satisfaction}%`;
    }
}

function countUp(element, target) {
    const duration = 2000; // Durée de l'animation en ms
    const step = target / (duration / 16); // Nombre d'étapes par frame (16ms = ~60fps)
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ====================
// Gestion du tableau de bord admin
// ====================
function switchAdminTab(tab) {
    const adminTabs = document.querySelectorAll('.admin-tab');
    const adminNavBtns = document.querySelectorAll('.admin-nav-btn');
    
    // Cacher toutes les onglets
    adminTabs.forEach(adminTab => {
        adminTab.classList.add('hidden');
    });
    
    // Afficher l'onglet sélectionné
    const targetTab = document.getElementById(`admin-${tab}`);
    if (targetTab) {
        targetTab.classList.remove('hidden');
    }
    
    // Mettre à jour la navigation
    adminNavBtns.forEach(btn => {
        btn.classList.remove('active');
    });
    
    const activeBtn = Array.from(adminNavBtns).find(btn => btn.textContent.includes(tab));
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
    
    // Initialiser les données pour chaque onglet
    if (tab === 'projects') {
        initAdminProjects();
    } else if (tab === 'services') {
        initAdminServices();
    } else if (tab === 'stats') {
        initAdminStats();
    }
}

function initAdminProjects() {
    const adminProjectsList = document.getElementById('admin-projects-list');
    
    if (adminProjectsList) {
        adminProjectsList.innerHTML = '';
        projects.forEach(project => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="p-4">${project.title}</td>
                <td class="p-4">${project.category}</td>
                <td class="p-4">${project.status}</td>
                <td class="p-4 text-right">
                    <button onclick="editProject(${project.id})" class="text-blue-500 hover:text-blue-700 mr-2">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button onclick="deleteProject(${project.id})" class="text-red-500 hover:text-red-700">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            `;
            adminProjectsList.appendChild(row);
        });
    }
}

function initAdminServices() {
    const adminServicesList = document.getElementById('admin-services-list');
    
    if (adminServicesList) {
        adminServicesList.innerHTML = '';
        services.forEach(service => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="p-4">${service.title}</td>
                <td class="p-4">${service.description}</td>
                <td class="p-4 text-right">
                    <button onclick="editService(${service.id})" class="text-blue-500 hover:text-blue-700 mr-2">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button onclick="deleteService(${service.id})" class="text-red-500 hover:text-red-700">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            `;
            adminServicesList.appendChild(row);
        });
    }
}

function initAdminStats() {
    const editStatProjects = document.getElementById('edit-stat-projects');
    const editStatMembers = document.getElementById('edit-stat-members');
    const editStatYears = document.getElementById('edit-stat-years');
    
    if (editStatProjects) {
        editStatProjects.value = stats.projects;
    }
    
    if (editStatMembers) {
        editStatMembers.value = stats.members;
    }
    
    if (editStatYears) {
        editStatYears.value = stats.years;
    }
}

function updateStats(event) {
    event.preventDefault();
    
    const editStatProjects = document.getElementById('edit-stat-projects');
    const editStatMembers = document.getElementById('edit-stat-members');
    const editStatYears = document.getElementById('edit-stat-years');
    
    if (editStatProjects) {
        stats.projects = parseInt(editStatProjects.value);
    }
    
    if (editStatMembers) {
        stats.members = parseInt(editStatMembers.value);
    }
    
    if (editStatYears) {
        stats.years = parseInt(editStatYears.value);
    }
    
    // Mettre à jour les statistiques sur la page d'accueil
    initStats();
    
    alert('Statistiques mises à jour !');
}

function openProjectModal() {
    alert('Modal pour ajouter un projet');
}

function openServiceModal() {
    alert('Modal pour ajouter un service');
}

function editProject(id) {
    const project = projects.find(p => p.id === id);
    alert(`Édition du projet : ${project.title}`);
}

function deleteProject(id) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce projet ?')) {
        projects = projects.filter(p => p.id !== id);
        initAdminProjects();
    }
}

function editService(id) {
    const service = services.find(s => s.id === id);
    alert(`Édition du service : ${service.title}`);
}

function deleteService(id) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce service ?')) {
        services = services.filter(s => s.id !== id);
        initAdminServices();
    }
}

// ====================
// Initialisation
// ====================
document.addEventListener('DOMContentLoaded', () => {
    // Initialiser les composants
    initServices();
    initStats();
    
    // Initialiser les projets filtrés par défaut (tous)
    filterProjects('all');
});


