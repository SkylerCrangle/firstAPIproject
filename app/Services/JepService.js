import store from "../store.js";
import Question from "../Models/Question.js";

const _api = axios.create({
  baseURL: "http://jservice.io/api/random",
  timeout: 15000
});

class JepService {

  getJep() {
    _api
      .get("")
      .then(response => {
        let question = new Question(response.data[0])
        console.log(question)
        store.commit("questions", question)
      })
      .catch(error => {
        console.error(error);
      })
  }
}

const JEPSERVICE = new JepService();
export default JEPSERVICE;
