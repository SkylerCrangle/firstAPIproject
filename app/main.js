import ValuesController from "./Controllers/ValuesController.js";
import JepController from "./Controllers/JepController.js"

class App {
  valuesController = new ValuesController();
  jepController = new JepController();
}

window["app"] = new App();
