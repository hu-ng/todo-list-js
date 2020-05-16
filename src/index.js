import { TodoModel, ProjectModel } from "./models";
import { ProjectView } from "./views/projectView";
import { TodoView } from "./views/todoView";

class Controller {
  constructor(todoModel, projectModel, projectView, todoView) {
    this.todoModel = todoModel;
    this.projectModel = projectModel;
    this.projectView = projectView;
    this.todoView = todoView;

    // Generate all todos and projects as the app starts up
    this.onProjectsListChanged(this.projectModel.getProjects());
    this.onTodosListChanged(this.todoModel.getTodos());

    // Project View Bindings
    this.projectView.bindAddProject(this.handleAddProject);

    // Project Model Bindings
    this.projectModel.bindProjectsListChanged(this.onProjectsListChanged);

    // Todo View Bindings
    this.todoView.bindOpenCreateForm(this.handleOpenCreateForm);
    this.todoView.bindOpenEditForm(this.handleOpenEditForm);
    this.todoView.bindAddTodo(this.handleAddTodo);
    this.todoView.bindEditTodo(this.handleEditTodo);
    this.todoView.bindDeleteTodo(this.handleDeleteTodo);
    this.todoView.bindToggleTodo(this.handleToggleTodo);

    // Todo Model Bindings
    this.todoModel.bindTodosListChanged(this.onTodosListChanged);

    // Select Home by default
    this.projectView.toggleProject("0");
  }

  // ------- CODE FOR PROJECTS --------- //
  onProjectsListChanged = (projects) => {
    this.projectView.displayProjects(projects);
    this.projectView.bindSelectProject(this.handleSelectProject);
    this.projectView.bindDeleteProject(this.handleDeleteProject);
  };

  // Adding a project
  handleAddProject = (projectName) => {
    this.projectModel.addProject(projectName);
  };

  // Deleting a project
  handleDeleteProject = (id) => {
    this.projectModel.deleteProject(id);
  };

  handleSelectProject = (id) => {
    this.projectView.toggleProject(id);
    if (Number(id) === 0) {
      id = null;
    }
    this.todoView.displayTodos(
      this.todoModel.getTodos(id),
      this.projectModel.getProject(id)
    );
  };

  // ------- CODE FOR TODOS --------- //
  onTodosListChanged = (todos) => {
    this.todoView.displayTodos(todos);
  };

  handleOpenCreateForm = () => {
    this.todoView.displayTodoForm(null, this.projectModel.getProjects());
  };

  handleOpenEditForm = (id) => {
    this.todoView.displayTodoForm(
      this.todoModel.getTodo(id),
      this.projectModel.getProjects()
    );
  };

  handleAddTodo = (title, description, dueDate, projectId, priority) => {
    this.todoModel.addTodo(title, description, dueDate, projectId, priority);
    this.projectView.toggleProject("0");
  };

  handleEditTodo = (id, title, description, dueDate, projectId, priority) => {
    this.todoModel.editTodo(
      id,
      title,
      description,
      dueDate,
      projectId,
      priority
    );
  };

  handleDeleteTodo = (id) => {
    this.todoModel.deleteTodo(id);
  };

  handleToggleTodo = (id) => {
    this.todoModel.toggleTodo(id);
  };
}

const app = new Controller(
  new TodoModel(),
  new ProjectModel(),
  new ProjectView(),
  new TodoView()
);
