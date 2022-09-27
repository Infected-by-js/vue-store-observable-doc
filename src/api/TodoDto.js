export default class TodoDto {
  constructor(todoData) {
    this.isCompleted = todoData.completed;
    this.id = todoData.id;
    this.text = todoData.todo;
  }
}
