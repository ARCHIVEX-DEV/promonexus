// Base de données étendue (Tu peux en ajouter à l'infini ici)
const promoDatabase = [
    // GAMING
    { domain: "Steam", category: "JEUX PC", code: "WINTER24", active: true },
    { domain: "Steam", category: "JEUX PC", code: "GABEN", active: false },
    { domain: "Instant Gaming", category: "CLES", code: "IG-SUMMER", active: true },
    { domain: "Epic Games", category: "STORE", code: "EPIC5", active: true },
    { domain: "PlayStation", category: "CONSOLE", code: "PSN20", active: false },
    { domain: "Xbox", category: "PASS", code: "XBOX1EURO", active: true },
    { domain: "Nintendo", category: "ESHOP", code: "MARIO2024", active: true },

    // E-COMMERCE & TECH
    { domain: "Amazon", category: "HIGH-TECH", code: "AMZ10OFF", active: true },
    { domain: "Amazon", category: "LIVRES", code: "READ5", active: false },
    { domain: "Cdiscount", category: "GENERAL", code: "PROMO25", active: true },
    { domain: "Fnac", category: "CULTURE", code: "ADHERENT10", active: true },
    { domain: "Darty", category: "ELECTRO", code: "DARTY5", active: true },
    { domain: "AliExpress", category: "GADGETS", code: "NEWUSER88", active: true },

    // MODE
    { domain: "Nike", category: "SPORT", code: "NIKE20", active: true },
    { domain: "Adidas", category: "SPORT", code: "STRIPES30", active: true },
    { domain: "Zalando", category: "MODE", code: "ZALANDO15", active: false },
    { domain: "ASOS", category: "MODE", code: "ASOSNEW", active: true },
    { domain: "Shein", category: "MODE", code: "SHEINFR24", active: true },

    // FOOD
    { domain: "Uber Eats", category: "REPAS", code: "EATS-FR55", active: true },
    { domain: "Deliveroo", category: "REPAS", code: "ROO-FREE", active: false },
    { domain: "Burger King", category: "FOOD", code: "KINGDEAL", active: true },

    // VOYAGE
    { domain: "Booking.com", category: "HOTEL", code: "TRAVEL2024", active: true },
    { domain: "Airbnb", category: "LOGEMENT", code: "WELCOME-AIR", active: false }
];

const searchInput = document.getElementById('searchInput');
const resultsDiv = document.getElementById('results');

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

function copyCode(text) {
    navigator.clipboard.writeText(text);
    alert("Code " + text + " copié dans le presse-papier !");
}