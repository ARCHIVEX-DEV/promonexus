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

    // --- CARTES PRÉPAYÉES ---
    { domain: "Steam", category: "CARTE CADEAU", code: "50€ DISPONIBLE", active: true, type: "CARD" },
    { domain: "Steam", category: "CARTE CADEAU", code: "100€ DISPONIBLE", active: true, type: "CARD" },
    { domain: "Amazon", category: "CARTE CADEAU", code: "100€ DISPONIBLE", active: true, type: "CARD" },
    { domain: "Amazon", category: "CARTE CADEAU", code: "50€ DISPONIBLE", active: true, type: "CARD" },
    { domain: "PSN", category: "CARTE PRÉPAYÉE", code: "20€ DISPONIBLE", active: true, type: "CARD" },
    { domain: "PSN", category: "CARTE PRÉPAYÉE", code: "50€ DISPONIBLE", active: true, type: "CARD" },
    { domain: "Xbox", category: "GAME PASS", code: "CARD-GOLD", active: false, type: "CARD" },
    { domain: "Xbox", category: "CARTE CADEAU", code: "30€ DISPONIBLE", active: true, type: "CARD" },
    { domain: "Netflix", category: "CARTE ABONNEMENT", code: "3 MOIS", active: true, type: "CARD" },
    { domain: "Netflix", category: "CARTE ABONNEMENT", code: "12 MOIS", active: true, type: "CARD" },
    { domain: "Roblox", category: "ROBUX", code: "10€ DISPONIBLE", active: true, type: "CARD" },
    { domain: "Roblox", category: "ROBUX", code: "50€ DISPONIBLE", active: true, type: "CARD" },
    { domain: "Nintendo", category: "ESHOP CARD", code: "20€ DISPONIBLE", active: true, type: "CARD" },
    { domain: "Google Play", category: "CARTE CADEAU", code: "25€ DISPONIBLE", active: true, type: "CARD" },
    { domain: "Apple", category: "ITUNES CARD", code: "50€ DISPONIBLE", active: true, type: "CARD" },
    { domain: "Spotify", category: "ABONNEMENT", code: "3 MOIS GRATUIT", active: true, type: "CARD" },
    { domain: "Discord Nitro", category: "ABONNEMENT", code: "1 MOIS", active: true, type: "CARD" },
    { domain: "Twitch", category: "TURBO", code: "30 JOURS", active: true, type: "CARD" }
];

let currentFilter = 'ALL';
const searchInput = document.getElementById('searchInput');
const resultsDiv = document.getElementById('results');

function setCategory(cat) {
    currentFilter = cat;
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText.includes(cat) || (cat === 'ALL' && btn.innerText === 'TOUT')) {
            btn.classList.add('active');
        }
    });
    filterDeals();
}

searchInput.addEventListener('input', filterDeals);

function filterDeals() {
    const query = searchInput.value.toLowerCase();
    resultsDiv.innerHTML = "";

    if (query.length < 1) return;

    const filtered = promoDatabase.filter(item => {
        const matchesSearch = item.domain.toLowerCase().includes(query) || item.category.toLowerCase().includes(query);
        const matchesTab = (currentFilter === 'ALL') || (item.type === currentFilter);
        return matchesSearch && matchesTab;
    });

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
            <div style="font-size:0.6rem; text-align:center; margin-top:5px; opacity:0.5;">CLIQUER POUR UTILISER</div>
        `;
        resultsDiv.appendChild(card);
    });
}

function copyCode(text) {
    navigator.clipboard.writeText(text);
    alert("Copié : " + text);
}
