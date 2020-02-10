
import JepService from "../Services/JepService.js"
import store from "../store.js";

//Private
function _draw() {
  let values = store.State.values;
  console.log(values);
}

//Public
export default class JepController {
  constructor() {
    store.subscribe("questions", _draw);
  }

  getJep() {
    JepService.getJep();
  }

}

