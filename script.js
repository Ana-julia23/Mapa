// script.js

function initMap() {
    // Cria um mapa centrado em um local específico
    const map = L.map('map').setView([-23.55052, -46.633308], 12);

    // Adiciona camada de mapa OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Dados de exemplo: coordenadas dos buracos
    const potholes = [
        { lat: -23.55052, lng: -46.633308 },
        { lat: -23.559616, lng: -46.635495 },
        { lat: -23.567847, lng: -46.640675 },
    ];

    // Adiciona marcadores para os buracos
    potholes.forEach(location => {
        L.marker([location.lat, location.lng]).addTo(map)
            .bindPopup('Buraco')
            .openPopup();
    });
}

// Inicializa o mapa quando a página é carregada
window.onload = initMap;
