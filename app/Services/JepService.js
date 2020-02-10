import store from "../store.js";
import Question from "../Models/Question.js";

const _api = axios.create({
  baseURL: "https://jservice.io/api/random",
  timeout: 15000
});

class JepService {

  getJep() {
    _api
      .get("question")
      .then(response => {
        let question = new Question(response.data[0])
        console.log(question)
        store.commit("question", question)
      })
      .catch(error => {
        console.error(error);
      })
  }
}

const JEPSERVICE = new JepService();
export default JEPSERVICE;
