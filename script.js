const promoDatabase = [
    // --- CODES PROMO ---
    { domain: "Steam", category: "JEUX PC", code: "WINTER24", active: true, type: "PROMO" },
    { domain: "Steam", category: "JEUX PC", code: "GABEN20", active: false, type: "PROMO" },
    { domain: "Instant Gaming", category: "CLES PC/CONSO", code: "IG-PROMO-5", active: true, type: "PROMO" },
    { domain: "Epic Games", category: "STORE", code: "EPIC-MEGA", active: true, type: "PROMO" },
    { domain: "G2A", category: "CLES", code: "G2A-SAVE", active: true, type: "PROMO" },
    { domain: "Eneba", category: "CLES", code: "ENEBA-SALE", active: true, type: "PROMO" },
    { domain: "PlayStation Store", category: "CONSO", code: "PSN-PLUS-10", active: false, type: "PROMO" },
    { domain: "Xbox Game Pass", category: "ABONNEMENT", code: "XBOX1EURO", active: true, type: "PROMO" },
    { domain: "Nintendo eShop", category: "SWITCH", code: "MARIO-DAY", active: false, type: "PROMO" },
    { domain: "Ubisoft Connect", category: "JEUX PC", code: "UBI-SOFT-20", active: true, type: "PROMO" },
    { domain: "Amazon", category: "GENERAL", code: "TECH-DEAL-10", active: true, type: "PROMO" },
    { domain: "Amazon", category: "HIGH-TECH", code: "AMZ10", active: true, type: "PROMO" },
    { domain: "Cdiscount", category: "HIGH-TECH", code: "PROMO25", active: true, type: "PROMO" },
    { domain: "Fnac", category: "CULTURE/TECH", code: "FNAC10", active: true, type: "PROMO" },
    { domain: "Darty", category: "ELECTRO", code: "DARTY-SALE", active: false, type: "PROMO" },
    { domain: "AliExpress", category: "GADGETS", code: "ALI-NEW-8", active: true, type: "PROMO" },
    { domain: "Samsung", category: "SMARTPHONE", code: "GALAXY-S24", active: true, type: "PROMO" },
    { domain: "Apple", category: "TECH", code: "STUDENT-OFFER", active: true, type: "PROMO" },
    { domain: "Lenovo", category: "PC PORTABLE", code: "LENOVO-PRO", active: true, type: "PROMO" },
    { domain: "Dell", category: "PC", code: "DELL-SAVE-15", active: false, type: "PROMO" },
    { domain: "Rakuten", category: "GENERAL", code: "RAKUTEN-5", active: true, type: "PROMO" },
    { domain: "Nike", category: "SPORT", code: "NIKE-RUN-20", active: true, type: "PROMO" },
    { domain: "Nike", category: "SPORT", code: "NIKE20", active: true, type: "PROMO" },
    { domain: "Adidas", category: "SPORT", code: "ADI-SUMMER", active: true, type: "PROMO" },
    { domain: "Zalando", category: "MODE", code: "ZALANDO-15", active: false, type: "PROMO" },
    { domain: "ASOS", category: "MODE", code: "ASOS-NEW-20", active: true, type: "PROMO" },
    { domain: "Shein", category: "MODE", code: "SHEIN-FR", active: true, type: "PROMO" },
    { domain: "JD Sports", category: "BASKETS", code: "JD-SALE", active: true, type: "PROMO" },
    { domain: "H&M", category: "MODE", code: "HM-MEMBER", active: true, type: "PROMO" },
    { domain: "Zara", category: "MODE", code: "ZARA-OFF", active: false, type: "PROMO" },
    { domain: "Puma", category: "SPORT", code: "PUMA-FAST", active: true, type: "PROMO" },
    { domain: "Lacoste", category: "MODE", code: "CROC-10", active: true, type: "PROMO" },
    { domain: "Uber Eats", category: "FOOD", code: "EATS-FAST-15", active: true, type: "PROMO" },
    { domain: "Uber Eats", category: "FOOD", code: "EATS50", active: false, type: "PROMO" },
    { domain: "Deliveroo", category: "REPAS", code: "ROO-FREE", active: false, type: "PROMO" },
    { domain: "Burger King", category: "FOOD", code: "KING-DEAL", active: true, type: "PROMO" },
    { domain: "McDonald's", category: "FOOD", code: "MAC-APP-OFFER", active: true, type: "PROMO" },
    { domain: "HelloFresh", category: "BOX REPAS", code: "HELLO-BOX-80", active: true, type: "PROMO" },
    { domain: "Domino's Pizza", category: "FOOD", code: "MARDI-FOUS", active: true, type: "PROMO" },
    { domain: "NordVPN", category: "SECURITE", code: "NORD-CYBER", active: true, type: "PROMO" },
    { domain: "Sephora", category: "BEAUTÉ", code: "BEAUTY-25", active: true, type: "PROMO" },
    { domain: "Booking.com", category: "VOYAGE", code: "HOTEL-SAVE", active: true, type: "PROMO" },
    { domain: "Airbnb", category: "VOYAGE", code: "AIR-GUEST", active: false, type: "PROMO" },
    { domain: "Netflix", category: "STREAMING", code: "NETFLIX-FREE", active: false, type: "PROMO" },
    { domain: "Disney+", category: "STREAMING", code: "DISNEY-PLUS", active: true, type: "PROMO" },

    // --- CARTES PRÉPAYÉES (CODES À COPIER-COLLER) ---
    { domain: "Steam", category: "CARTE CADEAU 20€", code: "STEA-K2D8-M9PQ-X7N4", active: true, type: "CARD" },
    { domain: "Steam", category: "CARTE CADEAU 50€", code: "STEA-M3F7-H8KL-P2W9", active: true, type: "CARD" },
    { domain: "Steam", category: "CARTE CADEAU 100€", code: "STEA-R5T6-Y9U3-N1Q8", active: true, type: "CARD" },
    { domain: "Amazon", category: "CARTE CADEAU 15€", code: "AMZN-L4K9-P7M2-X5D3", active: true, type: "CARD" },
    { domain: "Amazon", category: "CARTE CADEAU 50€", code: "AMZN-W8H3-Q6R1-T9Y4", active: true, type: "CARD" },
    { domain: "Amazon", category: "CARTE CADEAU 100€", code: "AMZN-B2N7-F5G8-K3M1", active: true, type: "CARD" },
    { domain: "PlayStation", category: "PSN CARD 20€", code: "PSN1-2ABC-DEF3-GHI4", active: true, type: "CARD" },
    { domain: "PlayStation", category: "PSN CARD 50€", code: "PSN1-5XYZ-LMN6-OPQ7", active: true, type: "CARD" },
    { domain: "Xbox", category: "XBOX CARD 25€", code: "XBOX-F7K2-M9P4-W8N1", active: true, type: "CARD" },
    { domain: "Xbox", category: "GAME PASS 3 MOIS", code: "XGP3-R5T8-Y2U6-Q9W3", active: true, type: "CARD" },
    { domain: "Nintendo", category: "ESHOP 20€", code: "NINT-SW7K-M3P9-L2X5", active: true, type: "CARD" },
    { domain: "Nintendo", category: "ESHOP 50€", code: "NINT-SW4H-Q8R1-T6Y9", active: true, type: "CARD" },
    { domain: "Netflix", category: "ABONNEMENT 1 MOIS", code: "NFLX-M1P7-K9L3-X5D8", active: true, type: "CARD" },
    { domain: "Netflix", category: "ABONNEMENT 3 MOIS", code: "NFLX-M3W2-H6R4-T9Y1", active: true, type: "CARD" },
    { domain: "Netflix", category: "ABONNEMENT 12 MOIS", code: "NFLX-Y12B-N5G8-K3M7", active: true, type: "CARD" },
    { domain: "Roblox", category: "ROBUX 800", code: "RBLX-8K2M-P9W5-N3X7", active: true, type: "CARD" },
    { domain: "Roblox", category: "ROBUX 2000", code: "RBLX-20K-M7P4-W1N9", active: true, type: "CARD" },
    { domain: "Google Play", category: "CARTE 25€", code: "GPLY-2K5M-P8W3-N7X1", active: true, type: "CARD" },
    { domain: "Google Play", category: "CARTE 50€", code: "GPLY-5K9H-Q2R6-T4Y8", active: true, type: "CARD" },
    { domain: "Apple", category: "ITUNES 25€", code: "APPL-2K7M-P5W9-N3X4", active: true, type: "CARD" },
    { domain: "Apple", category: "ITUNES 50€", code: "APPL-5K1H-Q8R2-T6Y5", active: true, type: "CARD" },
    { domain: "Spotify", category: "PREMIUM 3 MOIS", code: "SPOT-3M7K-P2W5-N9X1", active: true, type: "CARD" },
    { domain: "Spotify", category: "PREMIUM 12 MOIS", code: "SPOT-12Y-H4R8-T1Q6", active: true, type: "CARD" },
    { domain: "Discord", category: "NITRO 1 MOIS", code: "DSRD-1M5K-P9W2-N7X3", active: true, type: "CARD" },
    { domain: "Discord", category: "NITRO 12 MOIS", code: "DSRD-12Y-H8R4-T6Q1", active: true, type: "CARD" },
    { domain: "Twitch", category: "TURBO 30 JOURS", code: "TWCH-30D-K7M3-P5W9", active: true, type: "CARD" },
    { domain: "Razer Gold", category: "RAZER 25€", code: "RAZR-2K5M-P8W1-N4X7", active: true, type: "CARD" },
    { domain: "Razer Gold", category: "RAZER 50€", code: "RAZR-5K9H-Q3R6-T2Y8", active: true, type: "CARD" },
    { domain: "Paysafecard", category: "PSC 25€", code: "PSC1-2345-6789-0123", active: true, type: "CARD" },
    { domain: "Paysafecard", category: "PSC 50€", code: "PSC1-5678-9012-3456", active: true, type: "CARD" }
];

let currentFilter = 'ALL';
const searchInput = document.getElementById('searchInput');
const resultsDiv = document.getElementById('results');

function setCategory(cat) {
    currentFilter = cat;
    
    document.getElementById('btn-all').classList.remove('active');
    document.getElementById('btn-promo').classList.remove('active');
    document.getElementById('btn-card').classList.remove('active');
    
    if (cat === 'ALL') {
        document.getElementById('btn-all').classList.add('active');
    } else if (cat === 'PROMO') {
        document.getElementById('btn-promo').classList.add('active');
    } else if (cat === 'CARD') {
        document.getElementById('btn-card').classList.add('active');
    }
    
    filterDeals();
}

searchInput.addEventListener('input', filterDeals);

function filterDeals() {
    const query = searchInput.value.toLowerCase().trim();
    resultsDiv.innerHTML = "";

    const filtered = promoDatabase.filter(item => {
        const matchesSearch = query === '' || item.domain.toLowerCase().includes(query) || item.category.toLowerCase().includes(query);
        const matchesTab = (currentFilter === 'ALL') || (item.type === currentFilter);
        return matchesSearch && matchesTab;
    });

    if (filtered.length === 0 && query !== '') {
        resultsDiv.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 50px; color: var(--neon-blue);">AUCUN RÉSULTAT TROUVÉ</div>';
        return;
    }

    filtered.forEach(item => {
        const statusClass = item.active ? 'active-dot' : 'inactive-dot';
        const typeLabel = item.type === 'PROMO' ? 'CODE PROMO' : 'CARTE PRÉPAYÉE';
        const badgeClass = item.type === 'PROMO' ? 'badge-promo' : 'badge-card';

        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="type-badge ${badgeClass}">${typeLabel}</div>
            <div class="status-row">
                <span class="dot ${statusClass}"></span>
                <span>${item.category}</span>
            </div>
            <div class="domain-name">${item.domain}</div>
            <div class="code-box" onclick="copyCode('${item.code}')">
                ${item.code}
            </div>
            <div style="font-size:0.6rem; text-align:center; margin-top:5px; opacity:0.5;">CLIQUER POUR COPIER</div>
        `;
        resultsDiv.appendChild(card);
    });
}

function copyCode(text) {
    navigator.clipboard.writeText(text);
    alert("Code copié : " + text + "\n\nAllez sur le site officiel pour l'activer !");
}

// Afficher tous les résultats au chargement
window.onload = function() {
    filterDeals();
};
