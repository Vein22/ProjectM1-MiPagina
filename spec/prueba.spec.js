// Importa las clases que necesitas testear
const { Repository, Activity } = require("../scripts/index");

// Describe el conjunto de tests para la clase Repository
describe("Repository Class", () => {
  // Test para asegurar que la clase Repository se puede instanciar
  it("Debería retornar una instancia de Repository", () => {
    const testRepository = new Repository();
    expect(testRepository instanceof Repository).toBe(true);
  });

  // Test para asegurar que el método createActivity agrega una actividad correctamente
  it("Debería agregar una actividad cuando createActivity es llamada", () => {
    const testRepository = new Repository();

    // Llamamos al método createActivity con datos de prueba
    testRepository.createActivity("Título", "Descripción", "imgURL");

    // Obtenemos todas las actividades y verificamos si hay alguna
    const activities = testRepository.getAllActivities();
    expect(activities.length).toBeGreaterThan(0);

    // Verificamos si la primera actividad tiene los valores esperados
    const firstActivity = activities[0];
    expect(firstActivity.title).toBe("Título");
    expect(firstActivity.description).toBe("Descripción");
    expect(firstActivity.imgUrl).toBe("imgURL");
  });

  // Test para asegurar que el método deleteActivity elimina una actividad correctamente
  it("Debería eliminar una actividad cuando deleteActivity es llamada", () => {
    const testRepository = new Repository();

    // Añadimos una actividad de prueba
    const activityId = 1;
    testRepository.createActivity("Título", "Descripción", "imgURL");

    // Llamamos al método deleteActivity para eliminar la actividad de prueba
    testRepository.deleteActivity(activityId);

    // Obtenemos todas las actividades y verificamos que la actividad de prueba fue eliminada
    const activities = testRepository.getAllActivities();
    const deletedActivity = activities.find((activity) => activity.id === activityId);
    expect(deletedActivity).toBeUndefined();
  });
});


