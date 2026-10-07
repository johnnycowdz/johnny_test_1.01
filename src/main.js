// Initiera kartan över Sverige (Stockholm)
const map = L.map('map').setView([59.3293, 18.0686], 6);

// Hämta kartbilderna gratis från OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Sätt ut en kartnål
L.marker([59.3293, 18.0686]).addTo(map)
  .bindPopup('Min första Vite-karta!')
  .openPopup();
