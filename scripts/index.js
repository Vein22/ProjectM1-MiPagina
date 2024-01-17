function agregarActividad() {
    const titulo = document.getElementById('titulo').value;
    const descripcion = document.getElementById('descripcion').value;
    const urlImagen = document.getElementById('url-imagen').value;

    const actividadCard = document.createElement('div');
    actividadCard.className = 'actividad-card';
    actividadCard.innerHTML = `
        <h3>${titulo}</h3>
        <p>${descripcion}</p>
        <img src="${urlImagen}" alt="${titulo}">
    `;

    const actividadesContainer = document.getElementById('actividades-container');
    actividadesContainer.appendChild(actividadCard);

    document.getElementById('actividad-form').reset();
}
