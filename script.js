const promoDatabase = [
    { domain: "Steam", category: "JEUX PC", code: "WINTER24", active: true, type: "PROMO" },
    { domain: "Steam", category: "CARTE CADEAU", code: "50€ DISPONIBLE", active: true, type: "CARD" },
    { domain: "Steam", category: "CARTE CADEAU", code: "100€ DISPONIBLE", active: true, type: "CARD" },
    { domain: "Amazon", category: "HIGH-TECH", code: "AMZ10", active: true, type: "PROMO" },
    { domain: "Amazon", category: "CARTE CADEAU", code: "100€ DISPONIBLE", active: true, type: "CARD" },
    { domain: "Nike", category: "SPORT", code: "NIKE20", active: true, type: "PROMO" },
    { domain: "Instant Gaming", category: "CLES", code: "IG-SUMMER", active: true, type: "PROMO" },
    { domain: "Netflix", category: "STREAMING", code: "NETFLIX-FREE", active: false, type: "PROMO" },
    { domain: "Netflix", category: "CARTE ABONNEMENT", code: "3 MOIS", active: true, type: "CARD" },
    { domain: "Uber Eats", category: "FOOD", code: "EATS50", active: false, type: "PROMO" },
    { domain: "PSN", category: "CARTE PRÉPAYÉE", code: "20€ DISPONIBLE", active: true, type: "CARD" },
    { domain: "Xbox", category: "GAME PASS", code: "CARD-GOLD", active: false, type: "CARD" },
    { domain: "Roblox", category: "ROBUX", code: "10€ DISPONIBLE", active: true, type: "CARD" },
    { domain: "Epic Games", category: "STORE", code: "EPIC-MEGA", active: true, type: "PROMO" },
    { domain: "Cdiscount", category: "HIGH-TECH", code: "PROMO25", active: true, type: "PROMO" },
    { domain: "Fnac", category: "CULTURE/TECH", code: "FNAC10", active: true, type: "PROMO" },
    { domain: "Adidas", category: "SPORT", code: "ADI-SUMMER", active: true, type: "PROMO" },
    { domain: "Shein", category: "MODE", code: "SHEIN-FR", active: true, type: "PROMO" },
    { domain: "Burger King", category: "FOOD", code: "KING-DEAL", active: true, type: "PROMO" },
    { domain: "Booking.com", category: "VOYAGE", code: "HOTEL-SAVE", active: true, type: "PROMO" }
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
            <div style="font-size:0.6rem; text-align:center; margin-top:5px; opacity:0.5;">CLIQUER POUR UTILISER</div>
        `;
        resultsDiv.appendChild(card);
    });
}

function copyCode(text) {
    navigator.clipboard.writeText(text);
    alert("Copié : " + text);
}

// Afficher tous les résultats au chargement
window.onload = function() {
    filterDeals();
};
