// ============================================================
// NOVA KEY SHOP - APP.JS COMPLET
// ============================================================


// ============================================================
// PRODUITS
// ============================================================

const products = [

  // ============================================================
  // ROBLOX
  // ============================================================

  {
    id: "roblox-100",
    name: "Roblox Card - 100 ROBUX",
    price: 1.19,
    category: "Roblox",
    type: "Carte cadeau",
    platform: "PC",
    image: "https://gaming-cdn.com/images/products/13504/616x353/roblox-card-100-robux-100-robux-pc-jeu-cover.jpg?v=1677828910"
  },
  {
    id: "roblox-300",
    name: "Roblox Card - 300 ROBUX",
    price: 3.95,
    category: "Roblox",
    type: "Carte cadeau",
    platform: "PC",
    image: "https://gaming-cdn.com/images/products/18880/616x353/roblox-300-robux-300-robux-pc-jeu-europe-cover.jpg?v=1742283940"
  },
  {
    id: "roblox-400",
    name: "Roblox Card - 400 ROBUX",
    price: 6.49,
    category: "Roblox",
    type: "Carte cadeau",
    platform: "PC",
    image: "https://gaming-cdn.com/images/products/15265/616x353/roblox-card-400-robux-400-robux-pc-jeu-cover.jpg?v=1699346075"
  },
  {
    id: "roblox-1500",
    name: "Roblox Card - 1500 ROBUX",
    price: 9.59,
    category: "Roblox",
    type: "Carte cadeau",
    platform: "PC",
    image: "https://gaming-cdn.com/images/products/23409/616x353/roblox-1500-robux-pc-cover.jpg?v=1785919991"
  },
  {
    id: "roblox-800",
    name: "Roblox Card - 800 ROBUX",
    price: 9.91,
    category: "Roblox",
    type: "Carte cadeau",
    platform: "PC",
    image: "https://gaming-cdn.com/images/products/10437/616x353/roblox-800-robux-pc-cover.jpg?v=1767788892"
  },
  {
    id: "roblox-1000",
    name: "Roblox Card - 1000 ROBUX",
    price: 10.49,
    category: "Roblox",
    type: "Carte cadeau",
    platform: "PC",
    image: "https://gaming-cdn.com/images/products/22952/616x353/roblox-1000-robux-pc-cover.jpg?v=1781173294"
  },
  {
    id: "roblox-2000",
    name: "Roblox Card - 2000 ROBUX",
    price: 21.99,
    category: "Roblox",
    type: "Carte cadeau",
    platform: "PC",
    image: "https://gaming-cdn.com/images/products/15168/616x353/roblox-card-2000-robux-pc-cover.jpg?v=1767788872"
  },
  {
    id: "roblox-1700",
    name: "Roblox Card - 1700 ROBUX",
    price: 23.99,
    category: "Roblox",
    type: "Carte cadeau",
    platform: "PC",
    image: "https://gaming-cdn.com/images/products/7994/616x353/roblox-1700-robux-pc-cover.jpg?v=1767788932"
  },
  {
    id: "roblox-2500",
    name: "Roblox Card - 2500 ROBUX",
    price: 26.99,
    category: "Roblox",
    type: "Carte cadeau",
    platform: "PC",
    image: "https://gaming-cdn.com/images/products/18652/616x353/roblox-2500-robux-2500-robux-pc-jeu-europe-cover.jpg?v=1740132827"
  },
  {
    id: "roblox-3000",
    name: "Roblox Card - 3000 ROBUX",
    price: 34.99,
    category: "Roblox",
    type: "Carte cadeau",
    platform: "PC",
    image: "https://gaming-cdn.com/images/products/18878/616x353/roblox-3000-robux-pc-cover.jpg?v=1767788845"
  },
  {
    id: "roblox-4000",
    name: "Roblox Card - 4000 ROBUX",
    price: 39.99,
    category: "Roblox",
    type: "Carte cadeau",
    platform: "PC",
    image: "https://gaming-cdn.com/images/products/18879/616x353/roblox-4000-robux-pc-cover.jpg?v=1767788831"
  },
  {
    id: "roblox-4500",
    name: "Roblox Card - 4500 ROBUX",
    price: 44.99,
    category: "Roblox",
    type: "Carte cadeau",
    platform: "PC",
    image: "https://gaming-cdn.com/images/products/7995/616x353/roblox-4500-robux-pc-cover.jpg?v=1767788921"
  },
  {
    id: "roblox-5250",
    name: "Roblox Card - 5250 ROBUX",
    price: 51.99,
    category: "Roblox",
    type: "Carte cadeau",
    platform: "PC",
    image: "https://gaming-cdn.com/images/products/21588/616x353/roblox-5250-robux-pc-battle-net-cover.jpg?v=1770902730"
  },
  {
    id: "roblox-10000",
    name: "Roblox Card - 10000 ROBUX",
    price: 89.99,
    category: "Roblox",
    type: "Carte cadeau",
    platform: "PC",
    image: "https://gaming-cdn.com/images/products/10435/616x353/roblox-10000-robux-pc-cover.jpg?v=1767788900"
  },


  // ============================================================
  // FORTNITE
  // ============================================================

  {
    id: "fortnite-legendes-fraiches",
    name: "Fortnite Pack Légendes fraîches + 1000 V-Bucks",
    price: 6.89,
    category: "Fortnite",
    type: "Pack",
    platform: "Xbox",
    image: "https://gaming-cdn.com/images/products/9584/616x353/fortnite-pack-legendes-fraiches-1000-v-bucks-xbox-one-xbox-series-x-s-microsoft-store-cover.jpg?v=1781175723"
  },
  {
    id: "fortnite-cobalt-star",
    name: "Fortnite Cobalt Star Bundle + 1000 V-Bucks",
    price: 15.99,
    category: "Fortnite",
    type: "Pack",
    platform: "PlayStation",
    image: "https://gaming-cdn.com/images/products/18008/616x353/fortnite-cobalt-star-bundle-1000-v-bucks-playstation-5-playstation-store-cover.jpg?v=1781184809"
  },
  {
    id: "fortnite-flowering-chaos",
    name: "Fortnite Flowering Chaos + 1000 V-Bucks",
    price: 12.69,
    category: "Fortnite",
    type: "Pack",
    platform: "PlayStation",
    image: "https://gaming-cdn.com/images/products/21199/616x353/fortnite-flowering-chaos-1000-v-bucks-playstation-5-playstation-store-cover.jpg?v=1781184757"
  },
  {
    id: "fortnite-legendes-animees",
    name: "Fortnite - Pack Légendes animées",
    price: 10.99,
    category: "Fortnite",
    type: "Pack",
    platform: "PlayStation",
    image: "https://gaming-cdn.com/images/products/12592/616x353/fortnite-pack-legendes-animees-playstation-5-jeu-playstation-store-europe-cover.jpg?v=1748419162"
  },
  {
    id: "fortnite-darkfire-ice",
    name: "Fortnite - Darkfire & Ice Bundle + 1000 V-Bucks",
    price: 17.19,
    category: "Fortnite",
    type: "Pack",
    platform: "Nintendo Switch",
    image: "https://gaming-cdn.com/images/products/20656/616x353/fortnite-darkfire-ice-bundle-1000-v-bucks-switch-nintendo-eshop-cover.jpg?v=1781184777"
  },
  {
    id: "fortnite-transformers",
    name: "Fortnite - Transformers Pack + 1000 V-Bucks",
    price: 15.99,
    category: "Fortnite",
    type: "Pack",
    platform: "PlayStation",
    image: "https://gaming-cdn.com/images/products/14693/616x353/fortnite-transformers-pack-1000-v-bucks-playstation-4-playstation-store-cover.jpg?v=1781185876"
  },
  {
    id: "fortnite-darkfire",
    name: "Fortnite - Darkfire Bundle",
    price: 19.99,
    category: "Fortnite",
    type: "Pack",
    platform: "Nintendo Switch",
    image: "https://gaming-cdn.com/images/products/5733/616x353/fortnite-darkfire-bundle-switch-jeu-nintendo-eshop-europe-cover.jpg?v=1730385293"
  },
  {
    id: "fortnite-5000-vbucks",
    name: "Fortnite - 5000 V-Bucks Gift Card",
    price: 36.20,
    category: "Fortnite",
    type: "Carte cadeau",
    platform: "PC",
    image: "https://gaming-cdn.com/images/products/8158/616x353/fortnite-5000-v-bucks-gift-card-5000-v-bucks-pc-jeu-epic-games-cover.jpg?v=1699365704"
  },
  {
    id: "fortnite-batman",
    name: "Fortnite - The Batman Who Laughs Outfit",
    price: 8.99,
    category: "Fortnite",
    type: "Contenu",
    platform: "PC",
    image: "https://gaming-cdn.com/images/products/9954/616x353/fortnite-the-batman-who-laughs-outfit-pc-jeu-epic-games-cover.jpg?v=1666177682"
  },
  {
    id: "fortnite-lumiere-dechue",
    name: "Fortnite - Pack Lumière déchue",
    price: 3.60,
    category: "Fortnite",
    type: "Pack",
    platform: "Xbox",
    image: "https://gaming-cdn.com/images/products/9848/616x353/fortnite-pack-lumiere-dechue-xbox-one-xbox-series-x-s-jeu-microsoft-store-europe-cover.jpg?v=1739374928"
  },
  {
    id: "fortnite-catwoman",
    name: "Fortnite - Catwoman's Grappling Claw Pickaxe",
    price: 8.99,
    category: "Fortnite",
    type: "Contenu",
    platform: "PC",
    image: "https://gaming-cdn.com/images/products/9608/616x353/fortnite-catwoman-s-grappling-claw-pickaxe-pc-jeu-epic-games-cover.jpg?v=1702478626"
  },
  {
    id: "fortnite-1000-vbucks",
    name: "Fortnite - 1000 V-Bucks Gift Card",
    price: 8.59,
    category: "Fortnite",
    type: "Carte cadeau",
    platform: "PC",
    image: "https://gaming-cdn.com/images/products/8156/616x353/fortnite-1000-v-bucks-gift-card-1000-v-bucks-pc-jeu-epic-games-cover.jpg?v=1701258416"
  },
  {
    id: "fortnite-2800-vbucks",
    name: "Fortnite - 2800 V-Bucks Gift Card",
    price: 22.69,
    category: "Fortnite",
    type: "Carte cadeau",
    platform: "PC",
    image: "https://gaming-cdn.com/images/products/8157/616x353/fortnite-2800-v-bucks-gift-card-2800-v-bucks-pc-jeu-epic-games-cover.jpg?v=1716909867"
  },
  {
    id: "fortnite-iris",
    name: "Fortnite - Pack Iris + 600 V-Bucks",
    price: 2.77,
    category: "Fortnite",
    type: "Pack",
    platform: "Xbox",
    image: "https://gaming-cdn.com/images/products/6828/616x353/fortnite-pack-iris-600-v-bucks-xbox-one-xbox-one-jeu-microsoft-store-europe-cover.jpg?v=1736957194"
  },
  {
    id: "fortnite-13500-vbucks",
    name: "Fortnite - 13500 V-Bucks Gift Card",
    price: 82.99,
    category: "Fortnite",
    type: "Carte cadeau",
    platform: "PC",
    image: "https://gaming-cdn.com/images/products/10451/616x353/fortnite-13500-v-bucks-gift-card-13500-v-bucks-pc-jeu-epic-games-cover.jpg?v=1701258558"
  },
  {
    id: "epic-37-fortnite",
    name: "Epic Games Gift Card 37 EUR - Fortnite 4500 V-Bucks",
    price: 35.89,
    category: "Fortnite",
    type: "Carte cadeau",
    platform: "PC",
    image: "https://gaming-cdn.com/images/products/22600/616x353/epic-games-gift-card-37eur-fortnite-4500-v-bucks-gift-card-epic-games-cover.jpg?v=1781614127"
  },
  {
    id: "epic-23-fortnite",
    name: "Epic Games Gift Card 23 EUR - Fortnite 2400 V-Bucks",
    price: 22.31,
    category: "Fortnite",
    type: "Carte cadeau",
    platform: "PC",
    image: "https://gaming-cdn.com/images/products/22599/616x353/epic-games-gift-card-23eur-fortnite-2400-v-bucks-gift-card-epic-games-cover.jpg?v=1781614121"
  },
  {
    id: "epic-90-fortnite",
    name: "Epic Games Gift Card 90 EUR - Fortnite 12500 V-Bucks",
    price: 87.30,
    category: "Fortnite",
    type: "Carte cadeau",
    platform: "PC",
    image: "https://gaming-cdn.com/images/products/22586/616x353/epic-games-gift-card-90eur-fortnite-12500-v-bucks-gift-card-epic-games-cover.jpg?v=1778169070"
  },


  // ============================================================
  // VALORANT
  // ============================================================

  {
    id: "valorant-450",
    name: "VALORANT - 450 Riot Points",
    price: 4.69,
    category: "VALORANT",
    type: "Carte cadeau",
    platform: "PC",
    image: "https://gaming-cdn.com/images/products/7093/616x353/valorant-5eur-450-riot-points-pc-cover.jpg?v=1768550634"
  },
  {
    id: "valorant-1000",
    name: "VALORANT - 1000 Riot Points",
    price: 9.49,
    category: "VALORANT",
    type: "Carte cadeau",
    platform: "PC",
    image: "https://gaming-cdn.com/images/products/7094/616x353/valorant-10eur-1000-riot-points-pc-cover.jpg?v=1768550654"
  },
  {
    id: "valorant-2050",
    name: "VALORANT - 2050 Riot Points",
    price: 18.99,
    category: "VALORANT",
    type: "Carte cadeau",
    platform: "PC",
    image: "https://gaming-cdn.com/images/products/7095/616x353/valorant-20eur-2050-riot-points-pc-cover.jpg?v=1768550730"
  },
  {
    id: "valorant-2565",
    name: "VALORANT - 2565 Riot Points",
    price: 23.69,
    category: "VALORANT",
    type: "Carte cadeau",
    platform: "PC",
    image: "https://gaming-cdn.com/images/products/14355/616x353/valorant-25eur-2565-riot-points-pc-cover.jpg?v=1768550810"
  },
  {
    id: "valorant-3650",
    name: "VALORANT - 3650 Riot Points",
    price: 33.19,
    category: "VALORANT",
    type: "Carte cadeau",
    platform: "PC",
    image: "https://gaming-cdn.com/images/products/13052/616x353/valorant-35eur-3650-riot-points-pc-cover.jpg?v=1768550793"
  },
  {
    id: "valorant-5350",
    name: "VALORANT - 5350 Riot Points",
    price: 47.49,
    category: "VALORANT",
    type: "Carte cadeau",
    platform: "PC",
    image: "https://gaming-cdn.com/images/products/7096/616x353/valorant-50eur-5350-riot-points-pc-cover.jpg?v=1768550762"
  },
  {
    id: "valorant-11000",
    name: "VALORANT - 11000 Riot Points",
    price: 94.99,
    category: "VALORANT",
    type: "Carte cadeau",
    platform: "PC",
    image: "https://gaming-cdn.com/images/products/13053/616x353/valorant-100eur-11000-riot-points-pc-cover.jpg?v=1768550803"
  },


  // ============================================================
  // PLAYSTATION PLUS
  // ============================================================

  {
    id: "ps-plus-essential-1-month",
    name: "PlayStation Plus Essential - 1 Mois",
    price: 7.99,
    category: "PlayStation Plus",
    type: "Abonnement",
    platform: "PlayStation",
    image: "https://gaming-cdn.com/images/products/10689/616x353/playstation-plus-essential-1-mois-essential-1-month-playstation-4-playstation-5-jeu-playstation-store-europe-cover.jpg?v=1698221996"
  },
  {
    id: "ps-plus-extra-3-months",
    name: "PlayStation Plus Extra - 3 Mois",
    price: 23.11,
    category: "PlayStation Plus",
    type: "Abonnement",
    platform: "PlayStation",
    image: "https://gaming-cdn.com/images/products/10693/616x353/playstation-plus-extra-3-mois-extra-3-months-playstation-4-playstation-5-jeu-playstation-store-europe-cover.jpg?v=1698221963"
  },
  {
    id: "ps-plus-essential-12-months",
    name: "PlayStation Plus Essential - 12 Mois",
    price: 58.99,
    category: "PlayStation Plus",
    type: "Abonnement",
    platform: "PlayStation",
    image: "https://gaming-cdn.com/images/products/10691/616x353/playstation-plus-essential-12-mois-essential-12-months-playstation-4-playstation-5-jeu-playstation-store-europe-cover.jpg?v=1698221975"
  },


  // ============================================================
  // PLAYSTATION STORE
  // ============================================================

  {
    id: "ps-store-10",
    name: "Carte cadeau PlayStation Store - 10 €",
    price: 9.49,
    category: "PlayStation Store",
    type: "Carte cadeau",
    platform: "PlayStation",
    image: "https://gaming-cdn.com/images/products/12767/616x353/carte-cadeau-playstation-store-10eur-playstation-4-playstation-5-playstation-store-cover.jpg?v=1752592890"
  },
  {
    id: "ps-store-20",
    name: "Carte cadeau PlayStation Store - 20 €",
    price: 19.09,
    category: "PlayStation Store",
    type: "Carte cadeau",
    platform: "PlayStation",
    image: "https://gaming-cdn.com/images/products/600/616x353/carte-cadeau-playstation-store-20eur-playstation-4-playstation-5-playstation-store-cover.jpg?v=1752592904"
  },
  {
    id: "ps-store-25",
    name: "Carte cadeau PlayStation Store - 25 €",
    price: 23.79,
    category: "PlayStation Store",
    type: "Carte cadeau",
    platform: "PlayStation",
    image: "https://gaming-cdn.com/images/products/12769/616x353/carte-cadeau-playstation-store-25eur-playstation-4-playstation-5-playstation-store-cover.jpg?v=1771838734"
  },
  {
    id: "ps-store-50",
    name: "Carte cadeau PlayStation Store - 50 €",
    price: 47.49,
    category: "PlayStation Store",
    type: "Carte cadeau",
    platform: "PlayStation",
    image: "https://gaming-cdn.com/images/products/602/616x353/carte-cadeau-playstation-store-50eur-playstation-4-playstation-5-playstation-store-cover.jpg?v=1752592909"
  },
  {
    id: "ps-store-60",
    name: "Carte cadeau PlayStation Store - 60 €",
    price: 56.39,
    category: "PlayStation Store",
    type: "Carte cadeau",
    platform: "PlayStation",
    image: "https://gaming-cdn.com/images/products/12772/616x353/carte-cadeau-playstation-store-60eur-playstation-5-playstation-4-playstation-store-cover.jpg?v=1764768707"
  },
  {
    id: "ps-store-80",
    name: "Carte cadeau PlayStation Store - 80 €",
    price: 75.99,
    category: "PlayStation Store",
    type: "Carte cadeau",
    platform: "PlayStation",
    image: "https://gaming-cdn.com/images/products/16625/616x353/carte-cadeau-playstation-store-80eur-playstation-5-playstation-4-playstation-store-cover.jpg?v=1752592846"
  },
  {
    id: "ps-store-100",
    name: "Carte cadeau PlayStation Store - 100 €",
    price: 94.99,
    category: "PlayStation Store",
    type: "Carte cadeau",
    platform: "PlayStation",
    image: "https://gaming-cdn.com/images/products/12774/616x353/carte-cadeau-playstation-store-100eur-playstation-4-playstation-5-playstation-store-cover.jpg?v=1752592914"
  },
  {
    id: "ps-store-150",
    name: "Carte cadeau PlayStation Store - 150 €",
    price: 140.99,
    category: "PlayStation Store",
    type: "Carte cadeau",
    platform: "PlayStation",
    image: "https://gaming-cdn.com/images/products/21246/616x353/carte-cadeau-playstation-store-150eur-playstation-5-playstation-4-playstation-store-cover.jpg?v=1764260665"
  },


  // ============================================================
  // XBOX
  // ============================================================

  {
    id: "xbox-live-5",
    name: "Carte cadeau XBOX Live - 5 €",
    price: 4.69,
    category: "Xbox",
    type: "Carte cadeau",
    platform: "Xbox",
    image: "https://gaming-cdn.com/images/products/298/616x353/carte-cadeau-xbox-live-5eur-eur5-card-xbox-one-xbox-series-x-s-pc-jeu-microsoft-store-europe-cover.jpg?v=1745397486"
  },
  {
    id: "xbox-live-10",
    name: "Carte cadeau XBOX Live - 10 €",
    price: 9.29,
    category: "Xbox",
    type: "Carte cadeau",
    platform: "Xbox",
    image: "https://gaming-cdn.com/images/products/273/616x353/carte-cadeau-xbox-live-10eur-xbox-one-xbox-series-x-s-pc-microsoft-store-cover.jpg?v=1770462901"
  },
  {
    id: "xbox-live-15",
    name: "Carte cadeau XBOX Live - 15 €",
    price: 13.89,
    category: "Xbox",
    type: "Carte cadeau",
    platform: "Xbox",
    image: "https://gaming-cdn.com/images/products/297/616x353/carte-cadeau-xbox-live-15eur-xbox-one-xbox-series-x-s-pc-microsoft-store-cover.jpg?v=1770462888"
  },
  {
    id: "xbox-live-20",
    name: "Carte cadeau XBOX Live - 20 €",
    price: 18.59,
    category: "Xbox",
    type: "Carte cadeau",
    platform: "Xbox",
    image: "https://gaming-cdn.com/images/products/296/616x353/carte-cadeau-xbox-live-20eur-eur20-card-xbox-one-xbox-series-x-s-pc-jeu-microsoft-store-europe-cover.jpg?v=1745397290"
  },
  {
    id: "xbox-live-25",
    name: "Carte cadeau XBOX Live - 25 €",
    price: 23.19,
    category: "Xbox",
    type: "Carte cadeau",
    platform: "Xbox",
    image: "https://gaming-cdn.com/images/products/274/616x353/carte-cadeau-xbox-live-25eur-xbox-one-xbox-series-x-s-pc-microsoft-store-cover.jpg?v=1770462896"
  },
  {
    id: "xbox-live-30",
    name: "Carte cadeau XBOX Live - 30 €",
    price: 27.89,
    category: "Xbox",
    type: "Carte cadeau",
    platform: "Xbox",
    image: "https://gaming-cdn.com/images/products/299/616x353/carte-cadeau-xbox-live-30eur-eur30-card-xbox-one-xbox-series-x-s-pc-jeu-microsoft-store-europe-cover.jpg?v=1745399038"
  },
  {
    id: "xbox-live-50",
    name: "Carte cadeau XBOX Live - 50 €",
    price: 46.49,
    category: "Xbox",
    type: "Carte cadeau",
    platform: "Xbox",
    image: "https://gaming-cdn.com/images/products/4/616x353/carte-cadeau-xbox-live-50eur-eur50-card-xbox-one-xbox-series-x-s-pc-jeu-microsoft-store-europe-cover.jpg?v=1745330443"
  },
  {
    id: "xbox-live-75",
    name: "Carte cadeau XBOX Live - 75 €",
    price: 69.69,
    category: "Xbox",
    type: "Carte cadeau",
    platform: "Xbox",
    image: "https://gaming-cdn.com/images/products/11038/616x353/carte-cadeau-xbox-live-75eur-eur75-card-xbox-one-xbox-series-x-s-pc-jeu-microsoft-store-europe-cover.jpg?v=1745404395"
  },
  {
    id: "xbox-live-100",
    name: "Carte cadeau XBOX Live - 100 €",
    price: 92.99,
    category: "Xbox",
    type: "Carte cadeau",
    platform: "Xbox",
    image: "https://gaming-cdn.com/images/products/23075/616x353/carte-cadeau-xbox-100eur-pc-xbox-series-x-s-xbox-one-microsoft-store-cover.jpg?v=1782311503"
  },


  // ============================================================
  // NINTENDO
  // ============================================================

  {
    id: "nintendo-eshop-15",
    name: "Carte Nintendo eShop - 15 €",
    price: 13.89,
    category: "Nintendo",
    type: "Carte cadeau",
    platform: "Nintendo Switch",
    image: "https://gaming-cdn.com/images/products/2356/616x353/carte-nintendo-eshop-15eur-switch-switch-2-nintendo-eshop-cover.jpg?v=1750231868"
  },
  {
    id: "nintendo-eshop-25",
    name: "Carte Nintendo eShop - 25 €",
    price: 23.29,
    category: "Nintendo",
    type: "Carte cadeau",
    platform: "Nintendo Switch",
    image: "https://gaming-cdn.com/images/products/2355/616x353/carte-nintendo-eshop-25eur-eur25-card-switch-switch-2-jeu-nintendo-eshop-europe-cover.jpg?v=1739437306"
  },
  {
    id: "nintendo-eshop-50",
    name: "Carte Nintendo eShop - 50 €",
    price: 45.89,
    category: "Nintendo",
    type: "Carte cadeau",
    platform: "Nintendo Switch",
    image: "https://gaming-cdn.com/images/products/4931/616x353/carte-nintendo-eshop-50eur-eur50-card-switch-switch-2-jeu-nintendo-eshop-europe-cover.jpg?v=1739437320"
  },
  {
    id: "nintendo-eshop-75",
    name: "Carte Nintendo eShop - 75 €",
    price: 68.89,
    category: "Nintendo",
    type: "Carte cadeau",
    platform: "Nintendo Switch",
    image: "https://gaming-cdn.com/images/products/14096/616x353/carte-nintendo-eshop-75eur-eur75-card-switch-switch-2-jeu-nintendo-eshop-europe-cover.jpg?v=1739437367"
  },
  {
    id: "nintendo-eshop-100",
    name: "Carte Nintendo eShop - 100 €",
    price: 91.89,
    category: "Nintendo",
    type: "Carte cadeau",
    platform: "Nintendo Switch",
    image: "https://gaming-cdn.com/images/products/14097/616x353/carte-nintendo-eshop-100eur-switch-switch-2-nintendo-eshop-cover.jpg?v=1750243777"
  },
  {
    id: "nintendo-switch-online-pack-additionnel-12",
    name: "Abonnement Nintendo Switch Online + Pack additionnel - 12 Mois",
    price: 31.93,
    category: "Nintendo",
    type: "Abonnement",
    platform: "Nintendo Switch",
    image: "https://gaming-cdn.com/images/products/16876/616x353/abonnement-nintendo-switch-online-pack-additionnel-12-mois-individuel-12-months-switch-jeu-nintendo-eshop-europe-cover.jpg?v=1716974715"
  }

];


// ============================================================
// CONFIGURATION
// ============================================================

const CART_STORAGE_KEY = "novaKeyShopCart";

const PAYPAL_USERNAME = "SH0PNOVA";


// ============================================================
// DISCORD
// ============================================================
//
// IMPORTANT
//
// BOT ID = identifiant public de ton application Discord.
// WEBHOOK = reçoit automatiquement les commandes.
//
// NE METS JAMAIS LE TOKEN DU BOT ICI.
//
// Pour l'authentification Discord réelle, configure aussi
// DISCORD_OAUTH_URL avec ton URL OAuth2 Discord.
// ============================================================

const DISCORD_BOT_ID = "1554855867973771354";

const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1554854634986938398/VnSuCzFU5YRfcRVIqX-Uu2PYtWxgYKI9Zsbv12VmERRQGOP_hhLsbLGw80CNEbhwtzQh";


// ------------------------------------------------------------
// URL DU SERVEUR DISCORD
// ------------------------------------------------------------
//
// Mets ici le lien d'invitation de ton serveur.
// Exemple : https://discord.gg/xxxxxx
//
// NE METS PAS LE WEBHOOK ICI.
// ------------------------------------------------------------

const DISCORD_SERVER_URL = "https://discord.gg/73jCJ2tNV";


// ------------------------------------------------------------
// AUTHENTIFICATION DISCORD
// ------------------------------------------------------------
//
// Pour une vraie connexion Discord, il faut créer OAuth2
// dans le Developer Portal Discord.
//
// Le Bot ID seul ne permet PAS de connecter un utilisateur.
//
// Mets ici ton URL OAuth2 complète.
// ------------------------------------------------------------

const DISCORD_OAUTH_URL = "https://discord.com/oauth2/authorize?client_id=1554855867973771354&permissions=0&response_type=code&redirect_uri=https%3A%2F%2Fcodelol-system.github.io%2FNOVA-KEY-SHOP%2F&integration_type=0&scope=identify+connections+email+guilds+guilds.members.read+applications.commands.permissions.update+openid+applications.entitlements+guilds.join+gdm.join+rpc.voice.read+rpc+rpc.video.read+rpc.screenshare.read+rpc.activities.write+messages.read+applications.commands+role_connections.write+applications.store.update+applications.builds.read+webhook.incoming+rpc.screenshare.write+rpc.video.write+rpc.voice.write+bot+rpc.notifications.read";


// ============================================================
// LOGO DISCORD
// ============================================================

const DISCORD_LOGO_URL =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0hYuyxdAgrKOlEeGtlGDAqvmeYqyzLYr57DWV6uoljg&s=10";


// ============================================================
// LOGOS DES CATÉGORIES
// ============================================================

const categoryLogos = {

  Roblox:
    "https://lens.usercontent.google.com/image?vsrid=CMWTyeuezJ6FyQEQAhgBIiQ2ZjQzYWEyZS01ZTFkLTQyMTUtYjMyZC1hMGQ2OGViYTk1MmYyggEiAmVuKC5CdAoubGZlLWR1bW15OjczYzc2NDVmLTk5ZjEtNGIwMS04OWNhLThlZGY0YzlmMWEyYhJCCkAvYm5zL3JhL2JvcmcvcmEvYm5zL2xlbnMtZnJvbnRlbmQtYXBpL3Byb2QubGVucy1mcm9udGVuZC1hcGkvMTA0WgQKAnJhOIWF7a-zlpcD&gsessionid=dpXIvtjXQUfTfeLwHkwMqes0qb5DYLTXJUWMbZZAii4RlpZU1eG2Rw",

  Fortnite:
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Fortnite_F_lettermark_logo.png?utm_source=fr.wikipedia.org&utm_campaign=index&utm_content=original",

  VALORANT:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qLNClC4nl43RXtcpB3nJRzSkPVJCo5N5NTCdHP9KoQ&s=10",

  PlayStation:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzNivDjU6YI9cHx9WSEMamSW6gvuZud_k-P8dWo4rjPw&s=10",

  Xbox:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKc6nIcgmKOh7v01fjT9at5yllmJJOmkVD2_Oe0KaxnQ&s=10",

  Nintendo:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF2h0xKBZSie1sgJrOvppHwYFOICSUhTU27G8PP2hzPA&s=10"

};


// ============================================================
// ÉTAT
// ============================================================

let cart = loadCart();

let activeCategory = "Tous";

let searchTerm = "";


// ============================================================
// DOM
// ============================================================

const productsGrid =
  document.getElementById("productsGrid");

const categoriesContainer =
  document.getElementById("categories");

const searchInput =
  document.getElementById("searchInput");

const sortSelect =
  document.getElementById("sortSelect");

const resultCount =
  document.getElementById("resultCount");

const cartButton =
  document.getElementById("cartButton");

const cartCount =
  document.getElementById("cartCount");

const cartDrawer =
  document.getElementById("cartDrawer");

const drawerOverlay =
  document.getElementById("drawerOverlay");

const closeCartButton =
  document.getElementById("closeCart");

const cartItems =
  document.getElementById("cartItems");

const cartTotal =
  document.getElementById("cartTotal");

const checkoutButton =
  document.getElementById("checkoutButton");

const toastContainer =
  document.getElementById("toastContainer");

const homeButton =
  document.getElementById("homeButton");


// ============================================================
// PRIX
// ============================================================

function formatPrice(price) {

  return Number(price).toLocaleString(
    "fr-FR",
    {
      style: "currency",
      currency: "EUR"
    }
  );
}


// ============================================================
// CHARGER LE PANIER
// ============================================================

function loadCart() {

  try {

    const saved =
      localStorage.getItem(
        CART_STORAGE_KEY
      );

    if (!saved) {
      return [];
    }

    const parsed =
      JSON.parse(saved);

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.filter(
      item =>
        item &&
        typeof item.id === "string" &&
        Number(item.quantity) > 0
    );

  } catch (error) {

    console.error(
      "Erreur chargement panier :",
      error
    );

    return [];
  }
}


// ============================================================
// SAUVEGARDER LE PANIER
// ============================================================

function saveCart() {

  try {

    localStorage.setItem(
      CART_STORAGE_KEY,
      JSON.stringify(cart)
    );

  } catch (error) {

    console.error(
      "Erreur sauvegarde panier :",
      error
    );
  }
}


// ============================================================
// LOGO CATÉGORIE
// ============================================================

function getCategoryLogo(category) {

  if (
    category === "PlayStation Plus" ||
    category === "PlayStation Store"
  ) {

    return categoryLogos.PlayStation;
  }

  return categoryLogos[category] || "";
}


// ============================================================
// NOM CATÉGORIE
// ============================================================

function getCategoryLabel(category) {

  const labels = {

    Tous: "Tous",

    Roblox: "Roblox",

    Fortnite: "Fortnite",

    VALORANT: "VALORANT",

    PlayStation: "PlayStation",

    "PlayStation Plus":
      "PlayStation Plus",

    "PlayStation Store":
      "PlayStation Store",

    Xbox: "Xbox",

    Nintendo: "Nintendo"

  };

  return labels[category] || category;
}


// ============================================================
// CATÉGORIES
// ============================================================

function renderCategories() {

  if (!categoriesContainer) {
    return;
  }

  const categories = [

    "Tous",

    ...new Set(
      products.map(
        product =>
          product.category
      )
    )

  ];

  categoriesContainer.innerHTML = "";

  categories.forEach(
    category => {

      const button =
        document.createElement("button");

      button.type = "button";

      button.className =
        "category" +
        (
          category === activeCategory
            ? " active"
            : ""
        );

      const logo =
        getCategoryLogo(category);

      const label =
        getCategoryLabel(category);

      if (category === "Tous") {

        button.innerHTML = `

          <span class="category-logo category-logo-all">
            🎮
          </span>

          <span>
            ${escapeHTML(label)}
          </span>

        `;

      } else if (logo) {

        button.innerHTML = `

          <span class="category-logo">

            <img
              src="${escapeAttribute(logo)}"
              alt=""
              loading="lazy"
              draggable="false"
            >

          </span>

          <span>
            ${escapeHTML(label)}
          </span>

        `;

      } else {

        button.innerHTML = `

          <span>
            ${escapeHTML(label)}
          </span>

        `;
      }

      button.addEventListener(
        "click",
        () => {

          activeCategory =
            category;

          renderCategories();

          renderProducts();

        }
      );

      categoriesContainer.appendChild(
        button
      );

    }
  );
}


// ============================================================
// FILTRER LES PRODUITS
// ============================================================

function getFilteredProducts() {

  let filtered =
    products.filter(
      product => {

        const matchesCategory =
          activeCategory === "Tous" ||
          product.category ===
            activeCategory;

        const searchableText =
          (
            product.name +
            " " +
            product.category +
            " " +
            product.type +
            " " +
            product.platform
          ).toLowerCase();

        const matchesSearch =
          searchableText.includes(
            searchTerm.toLowerCase()
          );

        return (
          matchesCategory &&
          matchesSearch
        );

      }
    );

  const sort =
    sortSelect
      ? sortSelect.value
      : "default";

  if (sort === "price-low") {

    filtered.sort(
      (a, b) =>
        a.price - b.price
    );

  } else if (sort === "price-high") {

    filtered.sort(
      (a, b) =>
        b.price - a.price
    );

  } else if (sort === "name") {

    filtered.sort(
      (a, b) =>
        a.name.localeCompare(
          b.name,
          "fr"
        )
    );

  }

  return filtered;
}


// ============================================================
// AFFICHER LES PRODUITS
// ============================================================

function renderProducts() {

  if (!productsGrid) {
    return;
  }

  const filtered =
    getFilteredProducts();

  productsGrid.innerHTML = "";

  if (resultCount) {

    resultCount.textContent =
      `${filtered.length} produit${
        filtered.length > 1
          ? "s"
          : ""
      }`;

  }

  if (filtered.length === 0) {

    productsGrid.innerHTML = `

      <div class="empty">

        <div style="font-size:42px;">
          🔎
        </div>

        <strong>
          Aucun produit trouvé
        </strong>

        <div style="margin-top:7px;">
          Essaie une autre recherche
          ou catégorie.
        </div>

      </div>

    `;

    return;
  }

  filtered.forEach(
    product => {

      const card =
        document.createElement("article");

      card.className =
        "product-card";

      card.innerHTML = `

        <img
          class="product-image"
          src="${escapeAttribute(
            product.image
          )}"
          alt="${escapeAttribute(
            product.name
          )}"
          loading="lazy"
          draggable="false"
          onerror="
            this.style.opacity='0.25';
          "
        >

        <div class="product-body">

          <div class="product-category">
            ${escapeHTML(
              product.category
            )}
          </div>

          <div class="product-name">
            ${escapeHTML(
              product.name
            )}
          </div>

          <div class="product-platform">
            🎮 ${escapeHTML(
              product.platform
            )}
          </div>

          <div class="product-type">
            🏷️ ${escapeHTML(
              product.type
            )}
          </div>

          <div class="product-bottom">

            <div class="product-price">
              ${formatPrice(
                product.price
              )}
            </div>

            <button
              type="button"
              class="add-btn"
              data-product-id="${escapeAttribute(
                product.id
              )}"
            >
              Ajouter
            </button>

          </div>

        </div>

      `;

      const addButton =
        card.querySelector(
          ".add-btn"
        );

      if (addButton) {

        addButton.addEventListener(
          "click",
          () => {

            addToCart(
              product.id
            );

          }
        );

      }

      productsGrid.appendChild(
        card
      );

    }
  );
}


// ============================================================
// AJOUTER AU PANIER
// ============================================================

function addToCart(productId) {

  const product =
    products.find(
      item =>
        item.id === productId
    );

  if (!product) {
    return;
  }

  const existing =
    cart.find(
      item =>
        item.id === productId
    );

  if (existing) {

    existing.quantity += 1;

  } else {

    cart.push({

      id: product.id,

      quantity: 1

    });

  }

  saveCart();

  updateCartUI();

  showToast(
    `${product.name} ajouté au panier`
  );
}


// ============================================================
// SUPPRIMER DU PANIER
// ============================================================

function removeFromCart(
  productId
) {

  cart =
    cart.filter(
      item =>
        item.id !== productId
    );

  saveCart();

  updateCartUI();
}


// ============================================================
// MODIFIER QUANTITÉ
// ============================================================

function changeQuantity(
  productId,
  amount
) {

  const item =
    cart.find(
      cartItem =>
        cartItem.id === productId
    );

  if (!item) {
    return;
  }

  item.quantity += amount;

  if (
    item.quantity <= 0
  ) {

    removeFromCart(
      productId
    );

    return;
  }

  saveCart();

  updateCartUI();
}


// ============================================================
// PRODUITS PANIER
// ============================================================

function getCartProducts() {

  return cart

    .map(
      item => {

        const product =
          products.find(
            p =>
              p.id === item.id
          );

        if (!product) {
          return null;
        }

        return {

          ...product,

          quantity:
            Number(item.quantity)

        };

      }
    )

    .filter(Boolean);
}


// ============================================================
// TOTAL
// ============================================================

function getCartTotal() {

  return getCartProducts()
    .reduce(
      (
        total,
        product
      ) => {

        return (
          total +
          product.price *
          product.quantity
        );

      },
      0
    );
}


// ============================================================
// QUANTITÉ TOTALE
// ============================================================

function getCartQuantity() {

  return cart.reduce(
    (
      total,
      item
    ) => {

      return (
        total +
        Number(item.quantity)
      );

    },
    0
  );
}


// ============================================================
// AFFICHER PANIER
// ============================================================

function renderCart() {

  if (
    !cartItems ||
    !cartTotal ||
    !checkoutButton
  ) {
    return;
  }

  const cartProducts =
    getCartProducts();

  cartItems.innerHTML = "";

  if (
    cartProducts.length === 0
  ) {

    cartItems.innerHTML = `

      <div class="empty">

        <div style="font-size:42px;">
          🛒
        </div>

        <strong>
          Ton panier est vide
        </strong>

        <div style="margin-top:7px;">
          Ajoute un produit pour commencer.
        </div>

      </div>

    `;

  } else {

    cartProducts.forEach(
      product => {

        const item =
          document.createElement("div");

        item.className =
          "cart-item";

        item.innerHTML = `

          <img
            src="${escapeAttribute(
              product.image
            )}"
            alt="${escapeAttribute(
              product.name
            )}"
            loading="lazy"
            draggable="false"
          >

          <div>

            <div class="cart-item-name">
              ${escapeHTML(
                product.name
              )}
            </div>

            <div class="cart-item-price">
              ${formatPrice(
                product.price
              )}
              × ${product.quantity}
            </div>

            <div class="quantity-controls">

              <button
                type="button"
                class="quantity-btn"
                data-action="minus"
                aria-label="Diminuer"
              >
                −
              </button>

              <span>
                ${product.quantity}
              </span>

              <button
                type="button"
                class="quantity-btn"
                data-action="plus"
                aria-label="Augmenter"
              >
                +
              </button>

            </div>

          </div>

          <button
            type="button"
            class="remove-item"
            data-action="remove"
            aria-label="Supprimer"
          >
            ✕
          </button>

        `;

        const minusButton =
          item.querySelector(
            '[data-action="minus"]'
          );

        const plusButton =
          item.querySelector(
            '[data-action="plus"]'
          );

        const removeButton =
          item.querySelector(
            '[data-action="remove"]'
          );

        if (minusButton) {

          minusButton.addEventListener(
            "click",
            () => {

              changeQuantity(
                product.id,
                -1
              );

            }
          );

        }

        if (plusButton) {

          plusButton.addEventListener(
            "click",
            () => {

              changeQuantity(
                product.id,
                1
              );

            }
          );

        }

        if (removeButton) {

          removeButton.addEventListener(
            "click",
            () => {

              removeFromCart(
                product.id
              );

            }
          );

        }

        cartItems.appendChild(
          item
        );

      }
    );

  }

  cartTotal.textContent =
    formatPrice(
      getCartTotal()
    );

  checkoutButton.disabled =
    cartProducts.length === 0;
}


// ============================================================
// UI PANIER
// ============================================================

function updateCartUI() {

  if (cartCount) {

    cartCount.textContent =
      getCartQuantity();

  }

  renderCart();
}


// ============================================================
// OUVRIR PANIER
// ============================================================

function openCart() {

  if (
    !cartDrawer ||
    !drawerOverlay
  ) {
    return;
  }

  renderCart();

  cartDrawer.classList.add(
    "open"
  );

  drawerOverlay.classList.add(
    "open"
  );

  document.body.style.overflow =
    "hidden";
}


// ============================================================
// FERMER PANIER
// ============================================================

function closeCart() {

  if (cartDrawer) {

    cartDrawer.classList.remove(
      "open"
    );

  }

  if (drawerOverlay) {

    drawerOverlay.classList.remove(
      "open"
    );

  }

  document.body.style.overflow =
    "";
}


// ============================================================
// LISTE DISCORD
// ============================================================

function buildDiscordProductList(
  cartProducts
) {

  let text = "";

  for (
    const product of cartProducts
  ) {

    const line =
      `• **${product.name}** × ${product.quantity} • ${formatPrice(
        product.price * product.quantity
      )} • ${product.platform}\n`;

    if (
      (
        text.length +
        line.length
      ) > 950
    ) {

      text +=
        "• … autres articles";

      break;
    }

    text +=
      line;
  }

  return (
    text ||
    "Aucun produit"
  );
}


// ============================================================
// ENVOI AUTOMATIQUE DISCORD
// ============================================================

async function sendOrderToDiscord() {

  if (
    !DISCORD_WEBHOOK_URL ||
    DISCORD_WEBHOOK_URL ===
      "COLLE_TON_WEBHOOK_ICI" ||
    DISCORD_WEBHOOK_URL ===
      "mon_whebook"
  ) {

    console.warn(
      "Webhook Discord non configuré."
    );

    return false;
  }

  const cartProducts =
    getCartProducts();

  const total =
    getCartTotal();

  if (
    cartProducts.length === 0 ||
    total <= 0
  ) {

    return false;
  }

  const orderId =
    "NOVA-" +
    Date.now()
      .toString(36)
      .toUpperCase();

  const productLines =
    buildDiscordProductList(
      cartProducts
    );

  const message = {

    username:
      "NOVA KEY SHOP",

    allowed_mentions: {
      parse: []
    },

    embeds: [

      {

        title:
          "🛒 NOVA KEY SHOP • Nouvelle commande",

        description:
          "Une commande a été initiée depuis NOVA KEY SHOP.",

        color:
          0x7c3cff,

        fields: [

          {
            name:
              "🆔 Référence",

            value:
              `\`${orderId}\``,

            inline:
              true
          },

          {
            name:
              "💰 Montant",

            value:
              `**${formatPrice(total)}**`,

            inline:
              true
          },

          {
            name:
              "💳 Paiement",

            value:
              "PayPal",

            inline:
              true
          },

          {
            name:
              "🟡 Statut",

            value:
              "**Paiement en attente**",

            inline:
              true
          },

          {
            name:
              "🤖 Bot ID",

            value:
              DISCORD_BOT_ID ||
              "Non configuré",

            inline:
              true
          },

          {
            name:
              "🛍️ Boutique",

            value:
              "NOVA KEY SHOP",

            inline:
              true
          },

          {
            name:
              "📦 Articles",

            value:
              productLines,

            inline:
              false
          }

        ],

        footer: {

          text:
            "NOVA KEY SHOP • Commande automatique"

        },

        timestamp:
          new Date().toISOString()

      }

    ]

  };

  try {

    const response =
      await fetch(
        DISCORD_WEBHOOK_URL,
        {

          method:
            "POST",

          headers: {

            "Content-Type":
              "application/json"

          },

          body:
            JSON.stringify(
              message
            )

        }
      );

    if (
      !response.ok
    ) {

      throw new Error(
        `Discord HTTP ${response.status}`
      );

    }

    console.log(
      "Commande envoyée automatiquement sur Discord :",
      orderId
    );

    return true;

  } catch (error) {

    console.error(
      "Erreur webhook Discord :",
      error
    );

    return false;
  }
}


// ============================================================
// PAYPAL
// ============================================================

async function payWithPayPal() {

  const total =
    getCartTotal();

  if (
    total <= 0
  ) {

    showToast(
      "Ton panier est vide."
    );

    return;
  }

  const amount =
    total.toFixed(2);

  const paypalUrl =
    `https://paypal.me/${PAYPAL_USERNAME}/${amount}`;

  if (checkoutButton) {

    checkoutButton.disabled =
      true;

    checkoutButton.textContent =
      "⏳ Préparation...";

  }

  await sendOrderToDiscord();

  window.location.href =
    paypalUrl;
}


// ============================================================
// CRÉER LES BOUTONS DISCORD DANS APP.JS
// ============================================================

function createDiscordButtons() {

  const navActions =
    document.querySelector(
      ".nav-actions"
    );

  if (!navActions) {
    return;
  }


  // ----------------------------------------------------------
  // SUPPRIMER D'ANCIENS BOUTONS AJOUTÉS PAR UNE VERSION
  // PRÉCÉDENTE
  // ----------------------------------------------------------

  const oldDiscord =
    document.getElementById(
      "discordButton"
    );

  if (oldDiscord) {
    oldDiscord.remove();
  }


  const oldAuth =
    document.getElementById(
      "authButton"
    );

  if (oldAuth) {
    oldAuth.remove();
  }


  // ----------------------------------------------------------
  // BOUTON AUTHENTIFICATION
  // ----------------------------------------------------------

  const authButton =
    document.createElement(
      "button"
    );

  authButton.type =
    "button";

  authButton.className =
    "nav-btn nova-auth-button";

  authButton.id =
    "novaAuthButton";

  authButton.title =
    "Authentification Discord";

  authButton.setAttribute(
    "aria-label",
    "Authentification Discord"
  );

  authButton.innerHTML =
    "👤";


  authButton.addEventListener(
    "click",
    openDiscordAuthentication
  );


  // ----------------------------------------------------------
  // BOUTON DISCORD
  // ----------------------------------------------------------

  const discordButton =
    document.createElement(
      "button"
    );

  discordButton.type =
    "button";

  discordButton.className =
    "nav-btn nova-discord-button";

  discordButton.id =
    "novaDiscordButton";

  discordButton.title =
    "Serveur Discord";

  discordButton.setAttribute(
    "aria-label",
    "Serveur Discord"
  );


  discordButton.innerHTML = `

    <img
      src="${escapeAttribute(
        DISCORD_LOGO_URL
      )}"
      alt="Discord"
      draggable="false"
    >

  `;


  discordButton.addEventListener(
    "click",
    openDiscordServer
  );


  // ----------------------------------------------------------
  // PLACEMENT
  //
  // Accueil
  // Auth
  // Discord
  // Panier
  // ----------------------------------------------------------

  if (homeButton) {

    homeButton.insertAdjacentElement(
      "afterend",
      authButton
    );

    authButton.insertAdjacentElement(
      "afterend",
      discordButton
    );

  } else {

    navActions.prepend(
      discordButton
    );

    navActions.prepend(
      authButton
    );

  }
}


// ============================================================
// OUVRIR SERVEUR DISCORD
// ============================================================

function openDiscordServer() {

  if (
    !DISCORD_SERVER_URL ||
    DISCORD_SERVER_URL ===
      "COLLE_ICI_LE_LIEN_DE_TON_SERVEUR"
  ) {

    showToast(
      "Lien du serveur Discord non configuré."
    );

    return;
  }

  window.open(
    DISCORD_SERVER_URL,
    "_blank",
    "noopener,noreferrer"
  );
}


// ============================================================
// AUTHENTIFICATION DISCORD
// ============================================================

function openDiscordAuthentication() {

  if (
    !DISCORD_OAUTH_URL ||
    DISCORD_OAUTH_URL ===
      "COLLE_ICI_TON_URL_OAUTH2"
  ) {

    showToast(
      "Authentification Discord non configurée."
    );

    return;
  }

  window.location.href =
    DISCORD_OAUTH_URL;
}


// ============================================================
// TOAST
// ============================================================

function showToast(
  message
) {

  if (!toastContainer) {
    return;
  }

  const toast =
    document.createElement(
      "div"
    );

  toast.className =
    "toast";

  toast.textContent =
    "✓ " + message;

  toastContainer.appendChild(
    toast
  );

  setTimeout(
    () => {

      toast.style.opacity =
        "0";

      toast.style.transform =
        "translateY(10px)";

      setTimeout(
        () => {

          toast.remove();

        },
        250
      );

    },
    2200
  );
}


// ============================================================
// SÉCURITÉ HTML
// ============================================================

function escapeHTML(
  value
) {

  return String(value)

    .replaceAll(
      "&",
      "&amp;"
    )

    .replaceAll(
      "<",
      "&lt;"
    )

    .replaceAll(
      ">",
      "&gt;"
    )

    .replaceAll(
      '"',
      "&quot;"
    )

    .replaceAll(
      "'",
      "&#039;"
    );
}


// ============================================================
// SÉCURITÉ ATTRIBUT
// ============================================================

function escapeAttribute(
  value
) {

  return escapeHTML(value);
}


// ============================================================
// RECHERCHE
// ============================================================

if (searchInput) {

  searchInput.addEventListener(
    "input",
    event => {

      searchTerm =
        event.target.value.trim();

      renderProducts();

    }
  );
}


// ============================================================
// TRI
// ============================================================

if (sortSelect) {

  sortSelect.addEventListener(
    "change",
    renderProducts
  );
}


// ============================================================
// OUVRIR PANIER
// ============================================================

if (cartButton) {

  cartButton.addEventListener(
    "click",
    openCart
  );
}


// ============================================================
// FERMER PANIER
// ============================================================

if (closeCartButton) {

  closeCartButton.addEventListener(
    "click",
    closeCart
  );
}


// ============================================================
// OVERLAY
// ============================================================

if (drawerOverlay) {

  drawerOverlay.addEventListener(
    "click",
    closeCart
  );
}


// ============================================================
// CHECKOUT
// ============================================================

if (checkoutButton) {

  checkoutButton.addEventListener(
    "click",
    payWithPayPal
  );
}


// ============================================================
// ACCUEIL
// ============================================================

if (homeButton) {

  homeButton.addEventListener(
    "click",
    () => {

      activeCategory =
        "Tous";

      searchTerm =
        "";

      if (searchInput) {

        searchInput.value =
          "";

      }

      if (sortSelect) {

        sortSelect.value =
          "default";

      }

      renderCategories();

      renderProducts();

      window.scrollTo({

        top:
          0,

        behavior:
          "smooth"

      });

    }
  );
}


// ============================================================
// TOUCHE ESC
// ============================================================

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape"
    ) {

      closeCart();

    }

  }
);


// ============================================================
// STYLES
// ============================================================

const categoryLogoStyles =
  document.createElement(
    "style"
  );

categoryLogoStyles.textContent = `

  .category {

    display: inline-flex !important;

    align-items: center !important;

    justify-content: center !important;

    gap: 6px !important;

    white-space: nowrap !important;

  }


  .category-logo {

    width: 16px !important;

    height: 16px !important;

    min-width: 16px !important;

    max-width: 16px !important;

    min-height: 16px !important;

    max-height: 16px !important;

    border-radius: 50% !important;

    overflow: hidden !important;

    display: inline-flex !important;

    align-items: center !important;

    justify-content: center !important;

    background: #ffffff !important;

    border: 1px solid rgba(
      255,
      255,
      255,
      0.15
    ) !important;

    flex: 0 0 16px !important;

    box-sizing: border-box !important;

  }


  .category-logo img {

    width: 100% !important;

    height: 100% !important;

    min-width: 0 !important;

    min-height: 0 !important;

    max-width: 100% !important;

    max-height: 100% !important;

    object-fit: contain !important;

    object-position: center !important;

    display: block !important;

    padding: 2px !important;

    box-sizing: border-box !important;

  }


  .category-logo-all {

    font-size: 8px !important;

    line-height: 1 !important;

    background:
      rgba(
        255,
        255,
        255,
        0.08
      ) !important;

    border-color:
      rgba(
        255,
        255,
        255,
        0.10
      ) !important;

  }


  .product-category-logo {

    display: none !important;

  }


  .product-category img {

    display: none !important;

  }


  .product-category-logo img {

    display: none !important;

  }


  .product-card .category-logo {

    display: none !important;

  }


  /* ==========================================================
     BOUTON AUTHENTIFICATION
     ========================================================== */

  .nova-auth-button {

    font-size: 18px !important;

  }


  /* ==========================================================
     BOUTON DISCORD
     ========================================================== */

  .nova-discord-button {

    padding: 0 !important;

    overflow: hidden !important;

  }


  .nova-discord-button img {

    width: 22px !important;

    height: 22px !important;

    object-fit: contain !important;

    object-position: center !important;

    display: block !important;

  }


  .nova-discord-button:hover {

    border-color:
      rgba(
        88,
        101,
        242,
        0.8
      ) !important;

    background:
      rgba(
        88,
        101,
        242,
        0.14
      ) !important;

    box-shadow:
      0 0 18px
      rgba(
        88,
        101,
        242,
        0.18
      ) !important;

  }

`;

document.head.appendChild(
  categoryLogoStyles
);


// ============================================================
// INITIALISATION
// ============================================================

function init() {

  renderCategories();

  renderProducts();

  updateCartUI();

  createDiscordButtons();

}


init();
