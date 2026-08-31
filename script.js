/* Styles pour les onglets de filtrage */
.filter-tabs {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 30px;
}

.tab-btn {
    background: transparent;
    border: 1px solid var(--neon-blue);
    color: var(--neon-blue);
    padding: 10px 20px;
    cursor: pointer;
    font-family: 'Orbitron', sans-serif;
    font-size: 0.8rem;
    letter-spacing: 2px;
    transition: 0.3s;
}

.tab-btn.active, .tab-btn:hover {
    background: var(--neon-blue);
    color: black;
    box-shadow: 0 0 15px var(--neon-blue);
}

/* Badge de type (Promo vs Carte) */
.type-badge {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 0.6rem;
    padding: 3px 8px;
    border: 1px solid;
    border-radius: 3px;
    text-transform: uppercase;
}

.badge-promo { color: var(--neon-blue); border-color: var(--neon-blue); }
.badge-card { color: var(--neon-purple); border-color: var(--neon-purple); }
