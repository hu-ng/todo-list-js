const priorityConst = {
  low: 1,
  medium: 2,
  high: 3,
}

// Todo Model
class TodoModel {
  constructor() {
    this._todos = [
      {
        id: 1,
        title: "First To-do",
        description: "This is my first todo",
        dueDate: new Date(2020, 10, 1),
        complete: false,
        projectId: null,
        priority: priorityConst.medium
      },
    ];

    this.lifeTimeTodosCount = 1;
  };

  // Add Delete Toggle Edit
  // Add a new todo with unique id
  addTodo(title, description, dueDate, projectId, priority) {
    this.lifeTimeTodosCount++
    const todo = {
      id: this.lifeTimeTodosCount,
      title: title,
      description: description,
      dueDate: dueDate,
      complete: false,
      projectId: projectId ? projectId : null,
      priority: priority
    };

    this._todos.push(todo);
  };

  // Delete a todo by filtering it out
  deleteTodo(id) {
    this._todos = this._todos.filter(todo => todo.id !== id);

    this.onTodosListChanged(this._todos)
  };

  // Edit todo: title, description, dueDate, projectId, priority
  editTodo(id, title, description, dueDate, projectId, priority) {
    const todo = this._todos.find(todo => todo.id === id);

    // Update the fields
    todo.title = title;
    todo.description = description;
    todo.dueDate = dueDate;
    todo.projectId = projectId;
    todo.priority = priority;
  };


  // Toggle completeness of the todo
  toggleTodo(id) {
    const todo = this._todos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
  }

  // Grab all todos. If projectID is provided, only grab todos with those ids
  getTodos(projectId) {
    if (projectId) {
      return this._todos.filter(todo => todo.projectId == projectId);
    } else {
      return this._todos;
    };
  };

  bindTodosListChanged(callback) {
    this.onTodosListChanged = callback;
  };
}


// Project Model
class ProjectModel {
  constructor() {
    this._projects = [
      {
        id: 1,
        name: "Daily"
      },
      {
        id: 2,
        name: "School Work"
      }
    ];

    this.lifetimeProjectsCount = 2;
  };

  // Get all projects
  getProjects() {
    return this._projects;
  };

  // Add a project
  addProject(name) {
    this.lifetimeProjectsCount++
    const project = {
      id: this.lifetimeProjectsCount,
      name: name
    }
    this._projects.push(project);

    this.onProjectsListChanged(this._projects);
  };

  // Delete a project
  // TODO: Add a dependency here or somewhere so that if a project is deleted, todo's associated with that project will be deleted as well
  deleteProject(id) {
    this._projects = this._projects.filter(project => project.id !== id);
    console.log(this._projects)
    this.onProjectsListChanged(this._projects);
  };

  // Connect the model to the controller
  bindProjectsListChanged(callback) {
    this.onProjectsListChanged = callback;
  }
};

export{ TodoModel, ProjectModel }