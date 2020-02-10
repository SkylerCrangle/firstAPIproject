export default class Question {
  constructor(data) {
    this.title = data.title
    this.id = data.id
    this.question = data.question
    this.answer = data.answer
    this.value = data.value
    this.totalScore = data.totalScore || 0
    this.category = data.category.title

  }

  get Template() {
    return `
    <h1>${this.question}</h1>
    `
  }
}