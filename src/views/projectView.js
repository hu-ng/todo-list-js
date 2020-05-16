class ProjectView {
  constructor() {
    this.projectsList = document.getElementById("sidebar-projects");
    this.projectSubmitButton = document.getElementById("project-submit");
    this.projectForm = document.getElementById("project-form")
  }


  // Create an element with a list of class names
  createElement(tag, classNames) {
    const element = document.createElement(tag)
    classNames.forEach( className => {
      element.classList.add(className)
    });
    return element
  };


  // Create a project card
  createProjectCard(projectName, projectID, deletable=true, iconSrc="./img/note.svg") {
    const card = this.createElement('div', ['card', 'project-bordered', 'blue-background-transit']);
    const content = this.createElement('div', ['card-content']);
    
    // Add the ID to the card
    card.dataset.projectId = projectID;

    // Project icon
    const projectIcon = this.createElement('img', ['card-content--icon']);
    projectIcon.src = iconSrc;

    // Project name
    const description = this.createElement('span', ['card-content--description']);
    description.innerText = projectName;

    card.appendChild(content)
    content.appendChild(projectIcon)
    content.appendChild(description)

    // If project is deletable, add delete icon
    if (deletable) {
      let deleteIcon = this.createElement('img', ['card-content--action-icons', "delete"]);
      deleteIcon.src = "./img/trash.png";

      content.appendChild(deleteIcon)
    };

    return card
  };

  // Display a list of projects
  displayProjects(projects) {
    // Remove all cards first
    while (this.projectsList.firstChild) {
      this.projectsList.removeChild(this.projectsList.firstChild)
    }

    // Add the Home card
    const homeCard = this.createProjectCard("Home", 0, false, "./img/home.svg")

    this.projectsList.appendChild(homeCard);

    // Add all other cards after
    projects.forEach(project => {
      let projectCard = this.createProjectCard(project.name, project.id);
      this.projectsList.appendChild(projectCard);
    });
  };
  
  // Deselect all other projects but given project
  toggleProject(id) {
    const projectCards = Array.from(this.projectsList.getElementsByClassName("card"));
    projectCards.forEach(card => {
      if (card.dataset.projectId === id) {
        card.classList.add("project-chosen")
      } else {
        card.classList.remove("project-chosen")
      }
    });
  }

  // Bind add project
  bindAddProject(handler) {
    this.projectForm.addEventListener('submit', event => {
      event.preventDefault();
      
      const input = document.getElementById("newProjectName");
      const projectName = input.value;

      if (projectName) {
        handler(projectName)
      }
      this.projectForm.reset();
    })
  };

  // Bind delete project
  bindDeleteProject(handler) {
    // Get delete buttons
    let projectDeletes = this.projectsList.getElementsByClassName("card-content--action-icons delete");
    Array.from(projectDeletes).forEach(del => {
      del.addEventListener('click', event => {
        const projectID = Number(event.target.parentNode.parentNode.dataset.projectId)
        if (projectID > 0) handler(projectID)
      })
    })
  };

  // Bind select project
  bindSelectProject(handler) {
    this.projectsList.childNodes.forEach(card => {
      card.addEventListener("click", event => {
        if (!event.target.classList.contains("delete")) {
          let projectId = card.dataset.projectId;
          handler(projectId)
        }
      })
    });
  }
}

export { ProjectView }