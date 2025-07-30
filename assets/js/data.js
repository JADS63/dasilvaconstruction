// assets/js/data.js
// Données du portfolio pour DA SILVA CONSTRUCTION - Version Multi-pages

window.portfolioData = [
    {
        id: 1,
        title: "Construction maison individuelle",
        description: "Maison moderne en béton cellulaire 150m²",
        details: "Construction complète d'une maison individuelle moderne avec isolation thermique optimale grâce au béton cellulaire Xella Thermopierre. Finitions soignées et respect des normes DTU.",
        image: "assets/images/version_400_construction-de-maison.jpeg",
        category: "construction",
        year: "2024",
        location: "Bourgoin-Jallieu",
        materials: ["Béton cellulaire Xella", "Brique rouge", "Béton armé"],
        surface: "150m²",
        duration: "8 mois",
        client: "Famille Martin"
    },
    {
        id: 2,
        title: "Construction de villa contemporaine",
        description: "Villa haut de gamme avec finitions d'exception",
        details: "Réalisation d'une villa contemporaine avec techniques de pointe. Utilisation de matériaux nobles et finitions soignées pour un résultat d'exception.",
        image: "assets/images/version_400_construction-de-villa.jpeg",
        category: "construction",
        year: "2024",
        location: "Nord Isère",
        materials: ["Béton armé", "Pierre naturelle", "Brique rouge"],
        surface: "200m²",
        duration: "10 mois",
        client: "Famille Dubois"
    },
    {
        id: 3,
        title: "Extension et agrandissement",
        description: "Extension 45m² parfaitement intégrée",
        details: "Agrandissement d'une maison existante avec parfaite intégration architecturale. Extension en brique rouge avec respect du style original.",
        image: "assets/images/version_400_agrandissement-et-extensions.jpeg",
        category: "extension",
        year: "2024",
        location: "Villefontaine",
        materials: ["Brique rouge", "Béton armé", "Aggloméré"],
        surface: "45m²",
        duration: "4 mois",
        client: "Famille Leblanc"
    },
    {
        id: 4,
        title: "Construction de piscine",
        description: "Piscine enterrée avec aménagements",
        details: "Construction complète d'une piscine enterrée 8x4m avec local technique intégré et aménagements périphériques en béton désactivé.",
        image: "assets/images/version_400_construction-de-piscine.jpeg",
        category: "piscine",
        year: "2023",
        location: "Grand Lyon",
        materials: ["Béton armé", "Béton désactivé", "Pierre naturelle"],
        surface: "32m² bassin",
        duration: "5 mois",
        client: "Famille Rousseau"
    },
    {
        id: 5,
        title: "Construction de garage",
        description: "Garage double avec espace rangement",
        details: "Construction d'un garage double en béton avec espace de rangement optimisé. Intégration parfaite dans l'environnement existant.",
        image: "assets/images/version_400_construction-de-garage.jpeg",
        category: "construction",
        year: "2023",
        location: "Bourgoin-Jallieu",
        materials: ["Aggloméré", "Béton armé", "Brique"],
        surface: "60m²",
        duration: "3 mois",
        client: "Monsieur Petit"
    },
    {
        id: 6,
        title: "Maçonnerie générale",
        description: "Travaux de maçonnerie traditionnelle",
        details: "Ensemble de travaux de maçonnerie générale alliant techniques traditionnelles et modernes. Respect strict du DTU et de l'environnement.",
        image: "assets/images/version_400_maconnerie-generale.jpeg",
        category: "renovation",
        year: "2023",
        location: "Nord Isère",
        materials: ["Pierre", "Chaux", "Béton armé"],
        surface: "100m²",
        duration: "6 mois",
        client: "Commune de Saint-Chef"
    },
    {
        id: 7,
        title: "Démolition et création d'ouvertures",
        description: "Percement mur porteur avec IPN",
        details: "Création d'ouvertures dans murs porteurs avec pose d'aciers IPN/HEA. Calculs de charges et respect des normes de sécurité.",
        image: "assets/images/version_400_demolition-de-murs-porteurs_detail.jpeg",
        category: "renovation",
        year: "2024",
        location: "La Tour-du-Pin",
        materials: ["Acier IPN", "Béton armé", "Aggloméré"],
        surface: "Ouvertures 3m",
        duration: "2 semaines",
        client: "Famille Morel"
    },
    {
        id: 8,
        title: "Maçonnerie d'extérieur",
        description: "Aménagements extérieurs complets",
        details: "Création d'espaces extérieurs avec terrasses en béton désactivé, murets en pierre et clôtures. Aménagement paysager intégré.",
        image: "assets/images/version_400_maconnerie-d-exterieur_detail.jpeg",
        category: "amenagement",
        year: "2023",
        location: "Bourgoin-Jallieu",
        materials: ["Béton désactivé", "Pierre naturelle", "Granit"],
        surface: "150m²",
        duration: "3 mois",
        client: "Famille Fournier"
    }
];

// Données des services offerts (pour la page prestations)
window.servicesData = {
    construction: {
        title: "Constructions Neuves",
        description: "Notre expertise au service de vos projets de construction",
        subtitle: "De la maison individuelle aux locaux professionnels",
        materials: [
            "Aggloméré",
            "Béton armé", 
            "Brique rouge",
            "Béton cellulaire",
            "Bloc béton isolant en béton de granulats"
        ],
        projects: [
            "Maisons individuelles",
            "Logements collectifs",
            "Extensions / Surélévations",
            "Locaux professionnels (bâtiments industriels...)",
            "Piscines toutes gammes",
            "Aménagements extérieurs (terrasses, béton désactivé, entrées et clôtures, allées et cours pavées en granit)"
        ],
        partner: "Société partenaire de Xella Thermopierre, nos équipes sont régulièrement formées pour performer dans la mise en œuvre des nouvelles techniques de pose et d'optimisation."
    },
    renovation: {
        title: "Rénovations",
        description: "Respect de l'esprit et des techniques initiales",
        subtitle: "Expertise en bâtiments anciens et atypiques",
        materials: [
            "Pisé",
            "Pierre",
            "Chaux",
            "Mâchefer"
        ],
        projects: [
            "Rénovation bâtiments anciens ou atypiques",
            "Création d'ouvertures (int./ext./murs porteurs) tous supports par la pose d'acier de type IPN/HEA",
            "Planchers en BA",
            "Jambages et linteaux BA",
            "Ceinturage de bâtiment",
            "Clés de renfort",
            "Pose de pierres naturelles"
        ],
        expertise: "Nous épaulons nos clients dans leur volonté de rénover leurs biens en respectant l'esprit et les techniques initialement employées."
    }
};

// Données de l'entreprise (pour la page à propos)
window.companyData = {
    name: "DA SILVA CONSTRUCTION",
    tagline: "Maçonnerie Générale",
    description: "Entreprise de maçonnerie Générale, de père en fils, basée à proximité immédiate de Bourgoin-Jallieu",
    experience: "40 ans d'expérience",
    location: "Bourgoin-Jallieu (38300)",
    zones: [
        "Nord Isère",
        "Grand Lyon", 
        "Départements limitrophes"
    ],
    zones_detail: "Les déplacements nationaux sont étudiés dans le cadre de projets atypiques",
    history: [
        {
            year: 1998,
            event: "Création par Antonio",
            description: "Antonio, le patriarche, crée l'entreprise familiale et propose ses services aux particuliers dans la construction de maisons individuelles, la rénovation en bâtiments, les aménagements extérieurs ainsi que tous types de maçonnerie. La compétence des équipes ont permis de créer rapidement des partenariats pérennes avec des acteurs économiques locaux et régionaux.",
            icon: "🏗️"
        },
        {
            year: 2004,
            event: "Transmission du savoir-faire",
            description: "Antonio intègre et forme son fils, Marco, pour le seconder et lui transmettre son savoir-faire et son perfectionnisme. Doté d'un esprit créatif, il apporte une vision novatrice et contemporaine à la structure.",
            icon: "👨‍👦"
        },
        {
            year: 2022,
            event: "SAS DA SILVA CONSTRUCTION",
            description: "L'entreprise prend un nouveau virage et poursuit sa croissance en devenant la SAS DA SILVA CONSTRUCTION gérée par Marco DA SILVA qui s'inspire des préceptes de son héritage familial et devient le garant de l'application et la rigueur connue de cette entreprise familiale. Grâce à de nouvelles perspectives de développement, l'activité s'est désormais étendue aux professionnels de la construction.",
            icon: "🏢"
        }
    ],
    guarantees: [
        "Responsabilité professionnelle",
        "Garantie de parfait achèvement", 
        "Assurance décennale",
        "Responsabilité civile"
    ],
    partners: [
        {
            name: "Xella Thermopierre",
            description: "Partenaire officiel pour le béton cellulaire",
            url: "https://www.xella.fr/fr_FR/"
        }
    ],
    process: [
        {
            step: 1,
            title: "Analyse de la situation",
            description: "Étude approfondie de votre projet et de vos besoins spécifiques"
        },
        {
            step: 2,
            title: "Devis Gratuit",
            description: "Établissement d'un devis détaillé et transparent sous 48h"
        },
        {
            step: 3,
            title: "Intervention rapide",
            description: "Réalisation des travaux dans les délais convenus avec suivi qualité"
        },
        {
            step: 4,
            title: "Suivi post-travaux",
            description: "Laissez un avis dans notre livre d'or ! Garanties et service après-vente"
        }
    ],
    values: [
        {
            title: "Expertise",
            description: "40 ans d'expérience dans tous les domaines de la maçonnerie",
            icon: "🏗️"
        },
        {
            title: "Famille",
            description: "Entreprise familiale de père en fils, garantissant continuité et confiance",
            icon: "👨‍👩‍👦"
        },
        {
            title: "Qualité",
            description: "Respect du DTU et de l'environnement, matériaux de qualité",
            icon: "🎯"
        },
        {
            title: "Proximité",
            description: "Relations privilégiées avec nos clients du Nord Isère et Grand Lyon",
            icon: "🤝"
        },
        {
            title: "Innovation",
            description: "Formation continue aux nouvelles techniques et matériaux",
            icon: "💡"
        },
        {
            title: "Environnement",
            description: "Respect de l'environnement au cœur de nos préoccupations",
            icon: "🌱"
        }
    ]
};

// Données de contact (pour la page contact)
window.contactData = {
    phone: "04 74 XX XX XX",
    email: "contact@dasilva-construction.com",
    address: "Près de Bourgoin-Jallieu (38300)",
    zones: "Nord Isère, Grand Lyon et départements limitrophes",
    hours: {
        weekdays: "Lun-Ven: 8h-17h",
        saturday: "Sam: 8h-12h", 
        sunday: "Dim: Fermé"
    },
    response_time: {
        phone: "Réponse immédiate aux heures d'ouverture",
        email: "Réponse sous 24h",
        quote: "Devis gratuit sous 48h",
        visit: "Visite sur site possible"
    },
    urgency: "Chantiers d'urgence étudiés selon disponibilité"
};

// Données fournisseurs (pour la page fournisseurs)
window.fournisseursData = [
    {
        name: "Xella Thermopierre",
        logo: "assets/images/version_200_telechargement__1_.png",
        specialite: "Béton cellulaire & Isolation",
        description: "Partenaire officiel de Xella Thermopierre, leader européen du béton cellulaire. Nos équipes sont régulièrement formées pour performer dans la mise en œuvre des nouvelles techniques de pose et d'optimisation.",
        website: "https://www.xella.fr/fr_FR/",
        features: [
            "Béton cellulaire haute performance",
            "Isolation thermique optimale", 
            "Formation continue de nos équipes",
            "Respect des préconisations DTU"
        ],
        partnership_type: "Partenaire privilégié"
    },
    {
        name: "Wienerberger",
        logo: "assets/images/version_200_logo-da-silva-construction-bourgoin-jallieu.jpeg",
        specialite: "Briques & Solutions Terre Cuite",
        description: "Premier fabricant mondial de briques en terre cuite, Wienerberger nous fournit des matériaux de construction durables et innovants pour tous nos projets de maçonnerie traditionnelle et contemporaine.",
        website: "https://www.wienerberger.fr/",
        features: [
            "Briques rouge traditionnelles",
            "Solutions d'isolation intégrée",
            "Durabilité et esthétique",
            "Large gamme de formats"
        ],
        partnership_type: "Fournisseur de confiance"
    },
    {
        name: "Alkern",
        logo: "assets/images/version_200_alkern.jpeg",
        specialite: "Blocs Béton Isolants",
        description: "Spécialiste français des blocs béton isolants en béton de granulats, Alkern nous accompagne dans la réalisation de constructions performantes thermiquement et respectueuses de l'environnement.",
        website: "https://www.alkern.fr/",
        features: [
            "Blocs béton isolants",
            "Performance thermique élevée",
            "Facilité de mise en œuvre", 
            "Solutions écologiques"
        ],
        partnership_type: "Partenaire technique"
    }
];

// Fonction utilitaire pour filtrer les projets par catégorie
window.filterProjects = function(category) {
    if (!category || category === 'all') {
        return window.portfolioData;
    }
    return window.portfolioData.filter(project => project.category === category);
};

// Fonction pour obtenir les catégories uniques
window.getProjectCategories = function() {
    const categories = [...new Set(window.portfolioData.map(project => project.category))];
    return [
        { value: 'all', label: 'Tous les projets' },
        ...categories.map(cat => ({
            value: cat,
            label: window.getCategoryLabel(cat)
        }))
    ];
};

// Fonction pour obtenir le label d'une catégorie
window.getCategoryLabel = function(category) {
    const labels = {
        'construction': 'Constructions neuves',
        'renovation': 'Rénovations',
        'extension': 'Extensions',
        'amenagement': 'Aménagements extérieurs',
        'professionnel': 'Locaux professionnels',
        'piscine': 'Piscines'
    };
    return labels[category] || category;
};

// Fonction pour obtenir des projets similaires
window.getSimilarProjects = function(currentProject, limit = 3) {
    return window.portfolioData
        .filter(project => 
            project.category === currentProject.category && 
            project.id !== currentProject.id
        )
        .slice(0, limit);
};

// Fonction pour obtenir les statistiques
window.getCompanyStats = function() {
    return {
        experience: 40,
        creation: 1998,
        projects: window.portfolioData.length,
        satisfaction: 98,
        clients: 200,
        garanties: window.companyData.guarantees.length
    };
};

// Export pour utilisation dans d'autres modules si nécessaire
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        portfolioData: window.portfolioData,
        servicesData: window.servicesData,
        companyData: window.companyData,
        contactData: window.contactData,
        fournisseursData: window.fournisseursData,
        filterProjects: window.filterProjects,
        getProjectCategories: window.getProjectCategories,
        getCategoryLabel: window.getCategoryLabel,
        getSimilarProjects: window.getSimilarProjects,
        getCompanyStats: window.getCompanyStats
    };
}