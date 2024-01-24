class Activity {
    constructor(id, title, description, imgUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

class Repository {
    constructor() {
        this.activities = [];
        this.contador = 1;
    }
    //Obtener las actividades guardadas
    getAllActivities(){
        return this.activities
    }
    //Crear una nueva actividad
    createActivity(title, description, imgUrl){
        const nuevaActividad = new Activity(this.contador, title, description, imgUrl);
        this.activities.push(nuevaActividad);
        this.contador++
        return;
    }
    //Borrar una actividad si coincide con el id proporcionado
    deleteActivity(id){
        this.activities = this.activities.filter((e)=>e.id !== id);
        return;
    }

    convertirAElementoHTML(activity) {
        // Destructuring de las propiedades de activity
        const { title, description, imgUrl, id} = activity;

        // Crear elementos HTML
        const divTarjeta = document.createElement('div');
        const tituloElemento = document.createElement('h3');
        const descripcionElemento = document.createElement('p');
        const imagenElemento = document.createElement('img');
        const botonEliminar = document.createElement('button');

        // Asignar valores y clases
        divTarjeta.className = 'actividad-card';
        tituloElemento.innerHTML = title;
        descripcionElemento.innerHTML = description;
        imagenElemento.src = imgUrl;
        imagenElemento.alt = title;
        botonEliminar.innerHTML = 'Eliminar';
        botonEliminar.dataset.id = id;

        // Boton para eliminar tarjetas
        botonEliminar.addEventListener('click', () => {
            this.deleteActivity(id);
            this.renderizarActividadesEnContenedor();
        });

        // Append de elementos al divTarjeta
        divTarjeta.appendChild(tituloElemento);
        divTarjeta.appendChild(descripcionElemento);
        divTarjeta.appendChild(imagenElemento);
        divTarjeta.appendChild(botonEliminar);

        return divTarjeta;
    }

    renderizarActividadesEnContenedor() {
        // Seleccionar el contenedor donde queremos agregar las actividades
        const contenedor = document.getElementById('actividades-container');

        // Vaciar el contenido actual del contenedor
        contenedor.innerHTML = '';

        // Obtener el listado completo de actividades mediante el método correspondiente de una instancia de Repository
        const actividades = this.getAllActivities();

        // Mapear el listado de actividades para convertirlos todos en elementos HTML
        const elementosHTML = actividades.map(element => this.convertirAElementoHTML(element));

        // Appendear todos los elementos HTML del nuevo array dentro del contenedor seleccionado
        elementosHTML.forEach(element => contenedor.appendChild(element));
    }

    // handler ahora es un método de la clase Repository
    agregarActividadHandler() {

        // Seleccionar los inputs
        const inputTitle = document.getElementById('inputTitle');
        const inputDescription = document.getElementById('inputDescription');
        const inputImgUrl = document.getElementById('inputImgUrl');

        // Tomar los valores ingresados en los inputs y guardarlos en variables
        const title = inputTitle.value;
        const description = inputDescription.value;
        const imgUrl = inputImgUrl.value;

        // Validar que estos valores estén completos
        if (!title || !description || !imgUrl) {
            alert('Por favor, completa todos los campos.');
            return; // Cortar el proceso si hay datos incompletos
        }

        // Llamar al método correspondiente de la instancia de Repository para crear una nueva actividad
        const nuevaActividad = this.createActivity(title, description, imgUrl);

        // Invocar la función para "refrescar" el contenedor de actividades
        this.renderizarActividadesEnContenedor();

        // Limpiar los campos de entrada después de agregar la actividad
        inputTitle.value = '';
        inputDescription.value = '';
        inputImgUrl.value = '';
    }

    // Agregar Event Listener al botón de agregar actividad
    iniciarEventos() {
        const agregarActividad = document.getElementById('agregarActividadBtn');
        // Agregar Event Listener, usando bind para mantener el contexto correcto (this)
        agregarActividad.addEventListener('click', this.agregarActividadHandler.bind(this));
    }
}

const test = new Repository();
test.iniciarEventos();


