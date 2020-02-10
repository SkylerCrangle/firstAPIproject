
import JepController from "./Controllers/JepController.js"

class App {

  jepController = new JepController();
}

window["app"] = new App();
