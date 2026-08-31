// Base de données étendue - PROMO NEXUS
const promoDatabase = [
    // --- GAMING & JEUX VIDÉO ---
    { domain: "Steam", category: "JEUX PC", code: "WINTER24", active: true },
    { domain: "Instant Gaming", category: "CLES PC/CONSO", code: "IG-PROMO-5", active: true },
    { domain: "Epic Games", category: "STORE", code: "EPIC-MEGA", active: true },
    { domain: "G2A", category: "CLES", code: "G2A-SAVE", active: true },
    { domain: "Eneba", category: "CLES", code: "ENEBA-SALE", active: true },
    { domain: "PlayStation Store", category: "CONSO", code: "PSN-PLUS-10", active: false },
    { domain: "Xbox Game Pass", category: "ABONNEMENT", code: "XBOX1EURO", active: true },
    { domain: "Nintendo eShop", category: "SWITCH", code: "MARIO-DAY", active: false },
    { domain: "Ubisoft Connect", category: "JEUX PC", code: "UBI-SOFT-20", active: true },
    { domain: "Battle.net", category: "BLIZZARD", code: "WOW-BACK", active: true },

    // --- HIGH-TECH & E-COMMERCE ---
    { domain: "Amazon", category: "GENERAL", code: "TECH-DEAL-10", active: true },
    { domain: "Cdiscount", category: "HIGH-TECH", code: "PROMO25", active: true },
    { domain: "Fnac", category: "CULTURE/TECH", code: "FNAC10", active: true },
    { domain: "Darty", category: "ELECTRO", code: "DARTY-SALE", active: false },
    { domain: "AliExpress", category: "GADGETS", code: "ALI-NEW-8", active: true },
    { domain: "Samsung", category: "SMARTPHONE", code: "GALAXY-S24", active: true },
    { domain: "Apple", category: "TECH", code: "STUDENT-OFFER", active: true },
    { domain: "Lenovo", category: "PC PORTABLE", code: "LENOVO-PRO", active: true },
    { domain: "Dell", category: "PC", code: "DELL-SAVE-15", active: false },
    { domain: "Rakuten", category: "GENERAL", code: "RAKUTEN-5", active: true },

    // --- MODE & SPORT ---
    { domain: "Nike", category: "SPORT", code: "NIKE-RUN-20", active: true },
    { domain: "Adidas", category: "SPORT", code: "ADI-SUMMER", active: true },
    { domain: "Zalando", category: "MODE", code: "ZALANDO-15", active: false },
    { domain: "ASOS", category: "MODE", code: "ASOS-NEW-20", active: true },
    { domain: "Shein", category: "MODE", code: "SHEIN-FR", active: true },
    { domain: "JD Sports", category: "BASKETS", code: "JD-SALE", active: true },
    { domain: "H&M", category: "MODE", code: "HM-MEMBER", active: true },
    { domain: "Zara", category: "MODE", code: "ZARA-OFF", active: false },
    { domain: "Puma", category: "SPORT", code: "PUMA-FAST", active: true },
    { domain: "Lacoste", category: "MODE", code: "CROC-10", active: true },

    // --- ALIMENTATION & LIVRAISON ---
    { domain: "Uber Eats", category: "REPAS", code: "EATS-FAST-15", active: true },
    { domain: "Deliveroo", category: "REPAS", code: "ROO-FREE", active: false },
    { domain: "Burger King", category: "FOOD", code: "KING-DEAL", active: true },
    { domain: "McDonald's", category: "FOOD", code: "MAC-APP-OFFER", active: true },
    { domain: "HelloFresh", category: "BOX REPAS", code: "HELLO-BOX-80", active: true },
    { domain: "Domino's Pizza", category: "FOOD", code: "MARDI-FOUS", active: true },

    // --- SERVICES & DIVERS ---
    { domain: "NordVPN", category: "SECURITE", code: "NORD-CYBER", active: true },
    { domain: "Sephora", category: "BEAUTÉ", code: "BEAUTY-25", active: true },
    { domain: "Booking.com", category: "VOYAGE", code: "HOTEL-SAVE", active: true },
    { domain: "Airbnb", category: "VOYAGE", code: "AIR-GUEST", active: false },
    { domain: "Netflix", category: "STREAMING", code: "NETFLIX-FREE", active: false },
    { domain: "Disney+", category: "STREAMING", code: "DISNEY-PLUS", active: true }
];

const searchInput = document.getElementById('searchInput');
const resultsDiv = document.getElementById('results');

// Fonction de recherche
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    resultsDiv.innerHTML = "";

    if (query.length < 1) return;

    const filtered = promoDatabase.filter(item => 
        item.domain.toLowerCase().includes(query) || 
        item.category.toLowerCase().includes(query)
    );

    filtered.forEach(item => {
        const statusClass = item.active ? 'active-dot' : 'inactive-dot';
        const statusText = item.active ? 'ACTIF' : 'INACTIF';

        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="status-row">
                <span class="dot ${statusClass}"></span>
                <span>${item.category} | ${statusText}</span>
            </div>
            <div class="domain-name">${item.domain}</div>
            <div class="code-box" onclick="copyCode('${item.code}')">
                ${item.code}
            </div>
            <div style="font-size:0.6rem; text-align:center; margin-top:5px; opacity:0.5;">CLIQUER POUR COPIER</div>
        `;
        resultsDiv.appendChild(card);
    });
});

// Fonction de copie
function copyCode(text) {
    navigator.clipboard.writeText(text);
    alert("Code " + text + " copié dans le presse-papier !");
}
