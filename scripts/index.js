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
    }

    getAllActivities(){
        return this.activities
    }

    createActivity(id, title, description, imgUrl){
        const nuevaActividad = new Activity(id, title, description, imgUrl);
        this.activities.push(nuevaActividad);
    }

    deleteActivity(id){
        this.activities = this.activities.filter((e)=>e.id !== id)
    }
}

const nuevo = new Repository();

nuevo.createActivity(1, "Comida", "Comer es sano", "imgen-url");
nuevo.createActivity(2, "Correr", "Da beneficios animicos", "imgen-url2");

console.log(nuevo.getAllActivities())

nuevo.deleteActivity(1)



