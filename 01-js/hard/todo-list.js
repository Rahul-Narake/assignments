/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  todos = [];
  add = (todo) => {
    this.todos.push(todo);
    return this.todos;
  };
  remove = (index) => {
    let newTodo = [];
    for (let i = 0; i < this.todos.length; i++) {
      if (i !== index) {
        newTodo.push(this.todos[i]);
      }
    }
    this.todos = newTodo;
    return this.todos;
  };
  update = (index, updatedTodo) => {
    for (let i = 0; i < this.todos.length; i++) {
      if (i === index) {
        this.todos[i] = updatedTodo;
      }
    }
    return this.todos;
  };

  getAll = () => {
    return this.todos;
  };
  get = (index) => {
    if (index < this.todos.length) {
      return this.todos[index];
    } else {
      return null;
    }
  };

  clear = () => {
    this.todos = [];
    return this.todos;
  };
}

// let todo = new Todo();
// console.log(todo.add('task 1'));
// console.log(todo.add('task 2'));
// console.log(todo.add('task 3'));
// console.log(todo.remove(0));

module.exports = Todo;
