const priorityConst = {
  low: 1,
  medium: 2,
  high: 3,
};

// Todo Model
class TodoModel {
  constructor() {
    this._todos = JSON.parse(localStorage.getItem("todos")) || [];
    this._lifetimeTodosCount = localStorage.getItem("todosCount") || 0;
  }

  // Function to commit to-dos to local storage
  _commit(todos) {
    this.onTodosListChanged(todos);
    localStorage.setItem("todosCount", this._lifetimeTodosCount);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  // Add Delete Toggle Edit
  addTodo(title, description, dueDate, projectId, priority) {
    this._lifetimeTodosCount++;
    const todo = {
      id: this._lifetimeTodosCount,
      title: title,
      description: description,
      dueDate: dueDate,
      complete: false,
      projectId: projectId ? Number(projectId) : null,
      priority: priority,
    };

    this._todos.push(todo);

    this._commit(this._todos);
  }

  // Delete a todo by filtering it out
  deleteTodo(id) {
    this._todos = this._todos.filter((todo) => todo.id !== id);

    this._commit(this._todos);
  }

  // Edit todo: title, description, dueDate, projectId, priority
  editTodo(id, title, description, dueDate, projectId, priority) {
    const todo = this._todos.find((todo) => todo.id === Number(id));

    // Update the fields
    todo.title = title;
    todo.description = description;
    todo.dueDate = dueDate;
    todo.projectId = Number(projectId);
    todo.priority = priority;

    this._commit(this._todos);
  }

  // Toggle completeness of the todo
  toggleTodo(id) {
    const todo = this._todos.find((todo) => todo.id === Number(id));
    todo.complete = !todo.complete;
    console.log(todo);

    this._commit(this._todos);
  }

  // Grab all todos. If projectID is provided, only grab todos with those ids
  getTodos(projectId) {
    if (projectId) {
      return this._todos.filter((todo) => todo.projectId == projectId);
    } else {
      return this._todos;
    }
  }

  getTodo(id) {
    const todo = this._todos.find((todo) => todo.id === id);
    return todo;
  }

  bindTodosListChanged(callback) {
    this.onTodosListChanged = callback;
  }
}

// Project Model
class ProjectModel {
  constructor() {
    this._projects = JSON.parse(localStorage.getItem("projects")) || [];
    this._lifetimeProjectsCount = localStorage.getItem("projectsCount") || 0;
  }

  // Commit projects to local storage
  _commit(projects) {
    this.onProjectsListChanged(projects);
    localStorage.setItem("projectsCount", this._lifetimeProjectsCount);
    localStorage.setItem("projects", JSON.stringify(this._projects));
  }

  // Get all projects
  getProjects() {
    return this._projects;
  }

  // Get one project
  getProject(id) {
    return this._projects.find((project) => project.id === Number(id));
  }

  // Add a project
  addProject(name) {
    this._lifetimeProjectsCount++;
    const project = {
      id: this._lifetimeProjectsCount,
      name: name,
    };
    this._projects.push(project);

    this._commit(this._projects);
  }

  // Delete a project
  // TODO: Add a dependency here or somewhere so that if a project is deleted, todo's associated with that project will be deleted as well
  deleteProject(id) {
    this._projects = this._projects.filter((project) => project.id !== id);
    this._commit(this._projects);
  }

  // Connect the model to the controller
  bindProjectsListChanged(callback) {
    this.onProjectsListChanged = callback;
  }
}

export { TodoModel, ProjectModel };