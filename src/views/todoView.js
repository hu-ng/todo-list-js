class TodoView {
  constructor() {
    this.header = document.getElementById("todos-header");
    this.todosList = document.getElementById("todos-list");
    this.form = document.getElementById("todo-form");
    this.newTodoBtn = this.header.lastChild;
    this.projectName = this.header.firstChild;

    // Display of form is none by default
    this.form.style.display = "none";
    this.newTodoBtn.addEventListener("click", e => {
      this.todosList.style.display = "none";
      this.form.style.display = "block";
    })
  };

  // Create an element with a list of class names
  createElement(tag, classNames) {
    const element = document.createElement(tag)
    classNames.forEach( className => {
      element.classList.add(className)
    });
    return element
  };


  createTodoCard(todoTitle, todoID) {
    const card = this.createElement("div", ["card", "todo-bordered"]);
    const content = this.createElement('div', ['card-content']);

    // Assign an ID to this card
    card.dataset.todoId = todoID;

    // Toggle option
    const todoToggle = this.createElement('input', ['todo__toggle']);
    todoToggle.type = "checkbox";
    todoToggle.name = "todo-toggle";

    // Todo Title
    const description = this.createElement('span', ["card-content--description"]);
    description.innerText = todoTitle;

    // Icons
    const actionIcons = this.createElement("span", ["card-content--action-icons"]);
    const edit = this.createElement("img", ["todo__icon"])
    edit.src = "./img/pen.svg"
    edit.alt = "Edit todo"

    const delIcon = this.createElement("img", ["todo__icon", "delete"])
    delIcon.src = "./img/trash.png"
    delIcon.alt = "Delete todo"

    // Assemble the elements together
    card.appendChild(content);
    content.appendChild(todoToggle);
    content.appendChild(description);
    content.appendChild(actionIcons);
    actionIcons.appendChild(edit);
    actionIcons.appendChild(delIcon);

    return card
  }

  // Display a list of to-dos
  displayTodos(todos) {
    while (this.todosList.firstChild) {
      this.todosList.removeChild(this.todosList.firstChild)
    };

    // Add all todos to the todos list
    todos.forEach(todo => {
      let todoCard = this.createTodoCard(todo.title, todo.id);
      this.todosList.appendChild(todoCard);
    })
  };


  // Bind delete project
  bindDeleteTodo(handler) {
    this.todosList.addEventListener('click', event => {
      if (event.target.classList.contains("delete")) {
        let id_node = event.target

        // Go up to find todo id
        while (id_node.dataset.todoId === undefined) {
          id_node = id_node.parentNode
        }
        const todoID = Number(id_node.dataset.todoId)
        if (todoID > 0) handler(todoID)
      }
    })
  };
}

export { TodoView }