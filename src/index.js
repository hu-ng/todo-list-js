import { TodoModel, ProjectModel } from "./models"
import { ProjectView } from "./views/projectView"
import { TodoView } from "./views/todoView"


class Controller {
  constructor(todoModel, projectModel, projectView, todoView) {
    this.todoModel = todoModel;
    this.projectModel = projectModel;
    this.projectView = projectView;
    this.todoView = todoView;

    // Generate all todos and projects as the app starts up
    this.onProjectsListChanged(this.projectModel.getProjects())
    this.onTodosListChanged(this.todoModel.getTodos())

    // Project View Bindings
    this.projectView.bindAddProject(this.handleAddProject)
    this.projectView.bindDeleteProject(this.handleDeleteProject)

    // Project Model Bindings
    this.projectModel.bindProjectsListChanged(this.onProjectsListChanged)

    // Todo View Bindings
    this.todoView.bindDeleteTodo(this.handleDeleteTodo)

    // Todo Model Bindings
    this.todoModel.bindTodosListChanged(this.onTodosListChanged)
  };


  // ------- CODE FOR PROJECTS --------- //
  onProjectsListChanged = projects => {
    this.projectView.displayProjects(projects);
  };

  // Adding a project
  handleAddProject = projectName => {
    this.projectModel.addProject(projectName);
  }
  
  // Deleting a project
  handleDeleteProject = id => {
    this.projectModel.deleteProject(id);
  }

  
  // ------- CODE FOR TODOS --------- //
  onTodosListChanged = todos => {
    this.todoView.displayTodos(todos);
  };

  handleDeleteTodo = id => {
    this.todoModel.deleteTodo(id);
  }
};


const app = new Controller(
  new TodoModel(),
  new ProjectModel(), 
  new ProjectView(),
  new TodoView(),
)