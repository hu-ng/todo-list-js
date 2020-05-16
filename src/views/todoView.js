class TodoView {
  constructor() {
    this.header = document.getElementById("todos-header");
    this.todosList = document.getElementById("todos-list");
    this.formContainer = document.getElementById("todo-form");
    this.newTodoBtn = this.header.lastElementChild;
    this.projectName = this.header.firstElementChild;

    // Display of form is none by default
    this.formContainer.style.display = "none";

    // When X button is clicked, close the form and reset entries
    this.formContainer.addEventListener("click", (event) => {
      if (event.target.classList.contains("close-form")) {
        this.showTodosList();
      }
    });
  }

  showTodosList() {
    this.todosList.style.display = "block";
    this.formContainer.style.display = "none";
    this.formContainer.firstElementChild.reset();
  }

  // Create an element with a list of class names
  createElement(tag, classNames) {
    const element = document.createElement(tag);
    if (classNames) {
      classNames.forEach((className) => {
        element.classList.add(className);
      });
    }
    return element;
  }

  // Create a Todo Card
  createTodoCard(todo) {
    const card = this.createElement("div", ["card", "todo-bordered"]);
    const content = this.createElement("div", ["card-content"]);

    // Assign an ID to this card
    card.dataset.todoId = todo.id;

    // Toggle option
    const todoToggle = this.createElement("input", ["todo__toggle"]);
    todoToggle.type = "checkbox";
    todoToggle.name = "todo-toggle";
    todoToggle.checked = todo.complete;

    // Todo Title
    const description = this.createElement("span", [
      "card-content--description",
    ]);
    description.innerText = todo.title;
    if (todo.complete) {
      description.classList.add("todo-done");
    }

    // Icons
    const actionIcons = this.createElement("span", [
      "card-content--action-icons",
    ]);
    const edit = this.createElement("img", ["todo__icon", "edit"]);
    edit.src = "./img/pen.svg";
    edit.alt = "Edit todo";

    const delIcon = this.createElement("img", ["todo__icon", "delete"]);
    delIcon.src = "./img/trash.png";
    delIcon.alt = "Delete todo";

    // Assemble the elements together
    card.appendChild(content);
    content.appendChild(todoToggle);
    content.appendChild(description);
    content.appendChild(actionIcons);
    actionIcons.appendChild(edit);
    actionIcons.appendChild(delIcon);

    return card;
  }

  // Display a list of to-dos
  displayTodos(todos, project) {
    this.showTodosList();
    this.projectName.innerText = project ? project.name : "Home";

    while (this.todosList.firstChild) {
      this.todosList.removeChild(this.todosList.firstChild);
    }

    // Add all todos to the todos list
    todos.forEach((todo) => {
      let todoCard = this.createTodoCard(todo);
      this.todosList.appendChild(todoCard);
    });
  }

  setAttributes(element, attributes) {
    for (const [attr, value] of Object.entries(attributes)) {
      element.setAttribute(attr, value);
    }
  }

  // Display a todo form used for adding and editting todos
  displayTodoForm(todo, projects) {
    // Switch displays
    this.todosList.style.display = "none";
    this.formContainer.style.display = "block";

    // Remove existing forms
    const form = this.formContainer.firstElementChild;
    form.removeChild(form.firstChild);

    // Add class to see if form is this form is for edit or not
    if (form.classList.contains("for-edit")) {
      form.classList.remove("for-edit");
      delete form.dataset.todoId;
    }

    if (todo) {
      form.classList.add("for-edit");
      form.dataset.todoId = todo.id;
    }

    // Start form creation
    const fieldset = this.createElement("fieldset");
    form.appendChild(fieldset);

    // Legend
    const legend = this.createElement("legend", ["todo-form__legend"]);
    const formTitle = this.createElement("span");
    formTitle.innerText = todo ? todo.title : "Create a new to-do";
    const closeIcon = this.createElement("img", [
      "todo-form__icon",
      "close-form",
    ]);
    closeIcon.src = "./img/x-sign.png";
    closeIcon.alt = "Close Form";

    legend.appendChild(formTitle);
    legend.appendChild(closeIcon);

    // Title
    const titleGroup = this.createElement("div", ["form-group", "col-md-7"]);
    const titleLabel = this.createElement("label");
    titleLabel.setAttribute("for", "title");
    titleLabel.innerText = "Title";
    const titleInput = this.createElement("input", ["form-control"]);
    this.setAttributes(titleInput, {
      type: "text",
      name: "title",
      id: "title",
      placeholder: "Do my homework",
    });

    if (todo) {
      titleInput.value = todo.title;
    } // Check this

    titleGroup.appendChild(titleLabel);
    titleGroup.appendChild(titleInput);

    // Project
    const projectGroup = this.createElement("div", ["form-group", "col-md-4"]);
    const projectLabel = this.createElement("label");
    projectLabel.setAttribute("for", "project");
    projectLabel.innerText = "Project";
    const projectInput = this.createElement("select", ["custom-select"]);
    this.setAttributes(projectInput, {
      name: "project",
      id: "project",
    });

    // Add default choice of no projects
    const defaultChoice = this.createElement("option");
    defaultChoice.innerText = "None";
    defaultChoice.value = "0";
    defaultChoice.selected = true;
    projectInput.appendChild(defaultChoice);

    // Iterate through the projects, if any
    if (projects) {
      projects.forEach((project) => {
        let choice = this.createElement("option");
        choice.innerText = project.name;
        choice.value = project.id;
        choice.selected = todo && todo.projectId === project.id ? true : false;
        projectInput.appendChild(choice);
      });
    }
    projectGroup.appendChild(projectLabel);
    projectGroup.append(projectInput);

    const dueDateGroup = this.createElement("div", ["form-group", "col-md-7"]);
    const dueDateLabel = this.createElement("label");
    dueDateLabel.setAttribute("for", "dueDate");
    dueDateLabel.innerText = "Due Date";
    const dueDateInput = this.createElement("input", ["form-control"]);
    this.setAttributes(dueDateInput, {
      type: "date",
      name: "dueDate",
      id: "dueDate",
    });

    if (todo) {
      dueDateInput.value = todo.dueDate;
    }

    dueDateGroup.appendChild(dueDateLabel);
    dueDateGroup.append(dueDateInput);

    // Priority
    const priorityGroup = this.createElement("div", ["form-group", "col-md-4"]);
    const priorityLabel = this.createElement("label");
    priorityLabel.setAttribute("for", "priority");
    priorityLabel.innerText = "Priority";
    const priorityInput = this.createElement("select", ["custom-select"]);
    this.setAttributes(priorityInput, {
      name: "priority",
      id: "priority",
    });
    const high_option = this.createElement("option", ["text-danger"]);
    (high_option.value = "3"), (high_option.innerText = "High");
    if (todo && todo.priority == high_option.value) {
      high_option.selected = true;
    }

    const medium_option = this.createElement("option", ["text-warning"]);
    (medium_option.value = "2"), (medium_option.innerText = "Medium");
    if (todo && todo.priority == medium_option.value) {
      medium_option.selected = true;
    }

    const low_option = this.createElement("option", ["text-success"]);
    (low_option.value = "1"), (low_option.innerText = "Low");
    if (todo && todo.priority == low_option.value) {
      low_option.selected = true;
    }

    priorityInput.appendChild(high_option);
    priorityInput.appendChild(medium_option);
    priorityInput.appendChild(low_option);

    priorityGroup.appendChild(priorityLabel);
    priorityGroup.appendChild(priorityInput);

    // Description
    const descriptionGroup = this.createElement("div", [
      "form-group",
      "col-md-11",
    ]);
    const descriptionLabel = this.createElement("label");
    descriptionLabel.setAttribute("for", "description");
    descriptionLabel.innerText = "Description";
    const descriptionInput = this.createElement("textarea", ["form-control"]);
    this.setAttributes(descriptionInput, {
      row: "3",
      name: "description",
      id: "description",
    });
    if (todo) {
      descriptionInput.innerText = todo.description;
    } // Check this

    descriptionGroup.appendChild(descriptionLabel);
    descriptionGroup.appendChild(descriptionInput);

    const submitBtn = this.createElement("button", ["todo__submit--btn"]);
    submitBtn.type = "submit";
    submitBtn.innerText = todo ? "Save" : "Create";

    // Assemble the form together

    fieldset.appendChild(legend);

    let row = this.createElement("div", ["form-row"]);
    row.appendChild(titleGroup);
    row.appendChild(projectGroup);
    fieldset.appendChild(row);

    row = this.createElement("div", ["form-row"]);
    row.appendChild(dueDateGroup);
    row.appendChild(priorityGroup);
    fieldset.appendChild(row);

    row = this.createElement("div", ["form-row"]);
    row.appendChild(descriptionGroup);
    fieldset.appendChild(row);

    fieldset.appendChild(submitBtn);

    this.formContainer.appendChild(form);
  }

  // Helper method to get todo id from element
  getTodoId(eventTarget) {
    let id_node = eventTarget;

    // Go up to find todo id
    while (id_node.dataset.todoId === undefined) {
      id_node = id_node.parentNode;
    }

    return id_node.dataset.todoId;
  }

  // Bind delete project
  bindDeleteTodo(handler) {
    this.todosList.addEventListener("click", (event) => {
      if (event.target.classList.contains("delete")) {
        const todoID = Number(this.getTodoId(event.target));
        handler(todoID);
      }
    });
  }

  // Bind open create form
  bindOpenCreateForm(handler) {
    this.newTodoBtn.addEventListener("click", (event) => {
      handler();
    });
  }

  // Bind open edit form
  bindOpenEditForm(handler) {
    this.todosList.addEventListener("click", (event) => {
      if (event.target.classList.contains("edit")) {
        const todoID = Number(this.getTodoId(event.target));
        handler(todoID);
      }
    });
  }

  // Bind add todos
  bindAddTodo(handler) {
    this.formContainer.firstElementChild.addEventListener("submit", (event) => {
      event.preventDefault();
      // If form is not for edit
      if (!event.target.classList.contains("for-edit")) {
        let title = document.getElementById("title");
        let project = document.getElementById("project");
        let dueDate = document.getElementById("dueDate");
        let priority = document.getElementById("priority");
        let description = document.getElementById("description");
        if (
          [
            title.value,
            project.value,
            dueDate.value,
            priority.value,
            description.value,
          ].every((val) => val !== "")
        ) {
          handler(
            title.value,
            description.value,
            dueDate.value,
            project.value,
            priority.value
          );
        }
      }
    });
  }

  // Bind edit todos
  bindEditTodo(handler) {
    this.formContainer.firstElementChild.addEventListener("submit", (event) => {
      event.preventDefault();
      // If form is for edit
      if (event.target.classList.contains("for-edit")) {
        let title = document.getElementById("title");
        let project = document.getElementById("project");
        let dueDate = document.getElementById("dueDate");
        let priority = document.getElementById("priority");
        let description = document.getElementById("description");
        let todoId = event.target.dataset.todoId;
        if (
          [
            title.value,
            project.value,
            dueDate.value,
            priority.value,
            description.value,
          ].every((val) => val !== "")
        ) {
          handler(
            todoId,
            title.value,
            description.value,
            dueDate.value,
            project.value,
            priority.value
          );
        }
      }
    });
  }

  // Bind toggle completeness todo
  bindToggleTodo(handler) {
    this.todosList.addEventListener("click", (event) => {
      if (event.target.classList.contains("todo__toggle")) {
        const todoID = Number(this.getTodoId(event.target));
        handler(todoID);
      }
    });
  }
}

export { TodoView };
