!function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,o){return t&&i(e.prototype,t),o&&i(e,o),e}o.r(t);var d=2,a=function(){function e(){n(this,e),this._todos=[{id:1,title:"First To-do",description:"This is my first todo",dueDate:new Date(2020,11,1),complete:!1,projectId:0,priority:d},{id:2,title:"Second To-do",description:"This is my other todo",dueDate:new Date(2020,10,1),complete:!1,projectId:1,priority:d}],this.lifeTimeTodosCount=2}return r(e,[{key:"addTodo",value:function(e,t,o,n,i){this.lifeTimeTodosCount++;var r={id:this.lifeTimeTodosCount,title:e,description:t,dueDate:new Date(o),complete:!1,projectId:n||null,priority:i};this._todos.push(r),this.onTodosListChanged(this._todos)}},{key:"deleteTodo",value:function(e){this._todos=this._todos.filter((function(t){return t.id!==e})),this.onTodosListChanged(this._todos)}},{key:"editTodo",value:function(e,t,o,n,i,r){var d=this._todos.find((function(t){return t.id===Number(e)}));d.title=t,d.description=o,d.dueDate=new Date(n),d.projectId=i,d.priority=r,this.onTodosListChanged(this._todos)}},{key:"toggleTodo",value:function(e){var t=this._todos.find((function(t){return t.id===e}));t.complete=!t.complete}},{key:"getTodos",value:function(e){return e?this._todos.filter((function(t){return t.projectId==e})):this._todos}},{key:"getTodo",value:function(e){return this._todos.find((function(t){return t.id===e}))}},{key:"bindTodosListChanged",value:function(e){this.onTodosListChanged=e}}]),e}(),s=function(){function e(){n(this,e),this._projects=[{id:1,name:"Daily"},{id:2,name:"School Work"}],this.lifetimeProjectsCount=2}return r(e,[{key:"getProjects",value:function(){return this._projects}},{key:"getProject",value:function(e){return this._projects.find((function(t){return t.id===Number(e)}))}},{key:"addProject",value:function(e){this.lifetimeProjectsCount++;var t={id:this.lifetimeProjectsCount,name:e};this._projects.push(t),this.onProjectsListChanged(this._projects)}},{key:"deleteProject",value:function(e){this._projects=this._projects.filter((function(t){return t.id!==e})),this.onProjectsListChanged(this._projects)}},{key:"bindProjectsListChanged",value:function(e){this.onProjectsListChanged=e}}]),e}();function c(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.projectsList=document.getElementById("sidebar-projects"),this.projectSubmitButton=document.getElementById("project-submit"),this.projectForm=document.getElementById("project-form")}var t,o,n;return t=e,(o=[{key:"createElement",value:function(e,t){var o=document.createElement(e);return t.forEach((function(e){o.classList.add(e)})),o}},{key:"createProjectCard",value:function(e,t){var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"./img/note.svg",i=this.createElement("div",["card","project-bordered","blue-background-transit"]),r=this.createElement("div",["card-content"]);i.dataset.projectId=t;var d=this.createElement("img",["card-content--icon"]);d.src=n;var a=this.createElement("span",["card-content--description"]);if(a.innerText=e,i.appendChild(r),r.appendChild(d),r.appendChild(a),o){var s=this.createElement("img",["card-content--action-icons","delete"]);s.src="./img/trash.png",r.appendChild(s)}return i}},{key:"displayProjects",value:function(e){for(var t=this;this.projectsList.firstChild;)this.projectsList.removeChild(this.projectsList.firstChild);var o=this.createProjectCard("Home",0,!1,"./img/home.svg");this.projectsList.appendChild(o),e.forEach((function(e){var o=t.createProjectCard(e.name,e.id);t.projectsList.appendChild(o)}))}},{key:"toggleProject",value:function(e){Array.from(this.projectsList.getElementsByClassName("card")).forEach((function(t){t.dataset.projectId===e?t.classList.add("project-chosen"):t.classList.remove("project-chosen")}))}},{key:"bindAddProject",value:function(e){var t=this;this.projectForm.addEventListener("submit",(function(o){o.preventDefault();var n=document.getElementById("newProjectName").value;n&&e(n),t.projectForm.reset()}))}},{key:"bindDeleteProject",value:function(e){var t=this.projectsList.getElementsByClassName("card-content--action-icons delete");Array.from(t).forEach((function(t){t.addEventListener("click",(function(t){var o=Number(t.target.parentNode.parentNode.dataset.projectId);o>0&&e(o)}))}))}},{key:"bindSelectProject",value:function(e){this.projectsList.childNodes.forEach((function(t){t.addEventListener("click",(function(o){if(!o.target.classList.contains("delete")){var n=t.dataset.projectId;e(n)}}))}))}}])&&c(t.prototype,o),n&&c(t,n),e}();function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var o=[],n=!0,i=!1,r=void 0;try{for(var d,a=e[Symbol.iterator]();!(n=(d=a.next()).done)&&(o.push(d.value),!t||o.length!==t);n=!0);}catch(e){i=!0,r=e}finally{try{n||null==a.return||a.return()}finally{if(i)throw r}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function p(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var f=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.header=document.getElementById("todos-header"),this.todosList=document.getElementById("todos-list"),this.formContainer=document.getElementById("todo-form"),this.newTodoBtn=this.header.lastElementChild,this.projectName=this.header.firstElementChild,this.formContainer.style.display="none",this.formContainer.addEventListener("click",(function(e){e.target.classList.contains("close-form")&&t.showTodosList()}))}var t,o,n;return t=e,(o=[{key:"showTodosList",value:function(){this.todosList.style.display="block",this.formContainer.style.display="none",this.formContainer.firstElementChild.reset()}},{key:"createElement",value:function(e,t){var o=document.createElement(e);return t&&t.forEach((function(e){o.classList.add(e)})),o}},{key:"createTodoCard",value:function(e,t){var o=this.createElement("div",["card","todo-bordered"]),n=this.createElement("div",["card-content"]);o.dataset.todoId=t;var i=this.createElement("input",["todo__toggle"]);i.type="checkbox",i.name="todo-toggle";var r=this.createElement("span",["card-content--description"]);r.innerText=e;var d=this.createElement("span",["card-content--action-icons"]),a=this.createElement("img",["todo__icon","edit"]);a.src="./img/pen.svg",a.alt="Edit todo";var s=this.createElement("img",["todo__icon","delete"]);return s.src="./img/trash.png",s.alt="Delete todo",o.appendChild(n),n.appendChild(i),n.appendChild(r),n.appendChild(d),d.appendChild(a),d.appendChild(s),o}},{key:"displayTodos",value:function(e,t){var o=this;for(this.showTodosList(),this.projectName.innerText=t?t.name:"Home";this.todosList.firstChild;)this.todosList.removeChild(this.todosList.firstChild);e.forEach((function(e){var t=o.createTodoCard(e.title,e.id);o.todosList.appendChild(t)}))}},{key:"setAttributes",value:function(e,t){for(var o=0,n=Object.entries(t);o<n.length;o++){var i=u(n[o],2),r=i[0],d=i[1];e.setAttribute(r,d)}}},{key:"displayTodoForm",value:function(e,t){var o=this;this.todosList.style.display="none",this.formContainer.style.display="block";var n=this.formContainer.firstElementChild;n.removeChild(n.firstChild),n.classList.contains("for-edit")&&(n.classList.remove("for-edit"),delete n.dataset.todoId),e&&(n.classList.add("for-edit"),n.dataset.todoId=e.id);var i=this.createElement("fieldset");n.appendChild(i);var r=this.createElement("legend",["todo-form__legend"]),d=this.createElement("span");d.innerText=e?e.title:"Create a new to-do";var a=this.createElement("img",["todo-form__icon","close-form"]);a.src="./img/x-sign.png",a.alt="Close Form",r.appendChild(d),r.appendChild(a);var s=this.createElement("div",["form-group","col-md-7"]),c=this.createElement("label");c.setAttribute("for","title"),c.innerText="Title";var l=this.createElement("input",["form-control"]);this.setAttributes(l,{type:"text",name:"title",id:"title",placeholder:"Do my homework"}),e&&(l.value=e.title),s.appendChild(c),s.appendChild(l);var u=this.createElement("div",["form-group","col-md-4"]),h=this.createElement("label");h.setAttribute("for","project"),h.innerText="Project";var p=this.createElement("select",["custom-select"]);this.setAttributes(p,{name:"project",id:"project"});var f=this.createElement("option");f.innerText="None",f.value="0",f.selected=!0,p.appendChild(f),t&&t.forEach((function(t){var n=o.createElement("option");n.innerText=t.name,n.value=t.id,n.selected=!(!e||e.projectId!==t.id),p.appendChild(n)})),u.appendChild(h),u.append(p);var m=this.createElement("div",["form-group","col-md-7"]),v=this.createElement("label");v.setAttribute("for","dueDate"),v.innerText="Due Date";var y=this.createElement("input",["form-control"]);this.setAttributes(y,{type:"date",name:"dueDate",id:"dueDate"}),e&&(y.value=e.dueDate.toISOString().substring(0,10)),m.appendChild(v),m.append(y);var g=this.createElement("div",["form-group","col-md-4"]),j=this.createElement("label");j.setAttribute("for","priority"),j.innerText="Priority";var C=this.createElement("select",["custom-select"]);this.setAttributes(C,{name:"priority",id:"priority"});var b=this.createElement("option",["text-danger"]);b.value="3",b.innerText="High",e&&e.priority==b.value&&(b.selected=!0);var E=this.createElement("option",["text-warning"]);E.value="2",E.innerText="Medium",e&&e.priority==E.value&&(E.selected=!0);var T=this.createElement("option",["text-success"]);T.value="1",T.innerText="Low",e&&e.priority==T.value&&(T.selected=!0),C.appendChild(b),C.appendChild(E),C.appendChild(T),g.appendChild(j),g.appendChild(C);var L=this.createElement("div",["form-group","col-md-11"]),w=this.createElement("label");w.setAttribute("for","description"),w.innerText="Description";var P=this.createElement("textarea",["form-control"]);this.setAttributes(P,{row:"3",name:"description",id:"description"}),e&&(P.innerText=e.description),L.appendChild(w),L.appendChild(P);var k=this.createElement("button",["todo__submit--btn"]);k.type="submit",k.innerText=e?"Save":"Create",i.appendChild(r);var I=this.createElement("div",["form-row"]);I.appendChild(s),I.appendChild(u),i.appendChild(I),(I=this.createElement("div",["form-row"])).appendChild(m),I.appendChild(g),i.appendChild(I),(I=this.createElement("div",["form-row"])).appendChild(L),i.appendChild(I),i.appendChild(k),this.formContainer.appendChild(n)}},{key:"getTodoId",value:function(e){for(var t=e;void 0===t.dataset.todoId;)t=t.parentNode;return t.dataset.todoId}},{key:"bindDeleteTodo",value:function(e){var t=this;this.todosList.addEventListener("click",(function(o){if(o.target.classList.contains("delete")){var n=Number(t.getTodoId(o.target));e(n)}}))}},{key:"bindOpenCreateForm",value:function(e){this.newTodoBtn.addEventListener("click",(function(t){e()}))}},{key:"bindOpenEditForm",value:function(e){var t=this;this.todosList.addEventListener("click",(function(o){if(o.target.classList.contains("edit")){var n=Number(t.getTodoId(o.target));e(n)}}))}},{key:"bindAddTodo",value:function(e){this.formContainer.firstElementChild.addEventListener("submit",(function(t){if(t.preventDefault(),!t.target.classList.contains("for-edit")){var o=document.getElementById("title"),n=document.getElementById("project"),i=document.getElementById("dueDate"),r=document.getElementById("priority"),d=document.getElementById("description");[o.value,n.value,i.value,r.value,d.value].every((function(e){return""!==e}))&&e(o.value,d.value,i.value,n.value,r.value)}}))}},{key:"bindEditTodo",value:function(e){this.formContainer.firstElementChild.addEventListener("submit",(function(t){if(t.preventDefault(),t.target.classList.contains("for-edit")){var o=document.getElementById("title"),n=document.getElementById("project"),i=document.getElementById("dueDate"),r=document.getElementById("priority"),d=document.getElementById("description"),a=t.target.dataset.todoId;[o.value,n.value,i.value,r.value,d.value].every((function(e){return""!==e}))&&e(a,o.value,d.value,i.value,n.value,r.value)}}))}}])&&p(t.prototype,o),n&&p(t,n),e}();new function e(t,o,n,i){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.onProjectsListChanged=function(e){r.projectView.displayProjects(e),r.projectView.bindSelectProject(r.handleSelectProject),r.projectView.bindDeleteProject(r.handleDeleteProject)},this.handleAddProject=function(e){r.projectModel.addProject(e)},this.handleDeleteProject=function(e){r.projectModel.deleteProject(e)},this.handleSelectProject=function(e){r.projectView.toggleProject(e),0===Number(e)&&(e=null),r.todoView.displayTodos(r.todoModel.getTodos(e),r.projectModel.getProject(e))},this.onTodosListChanged=function(e){r.todoView.displayTodos(e)},this.handleOpenCreateForm=function(){r.todoView.displayTodoForm(null,r.projectModel.getProjects())},this.handleOpenEditForm=function(e){r.todoView.displayTodoForm(r.todoModel.getTodo(e),r.projectModel.getProjects())},this.handleAddTodo=function(e,t,o,n,i){r.todoModel.addTodo(e,t,o,n,i),r.projectView.toggleProject("0")},this.handleEditTodo=function(e,t,o,n,i,d){r.todoModel.editTodo(e,t,o,n,i,d)},this.handleDeleteTodo=function(e){r.todoModel.deleteTodo(e)},this.todoModel=t,this.projectModel=o,this.projectView=n,this.todoView=i,this.onProjectsListChanged(this.projectModel.getProjects()),this.onTodosListChanged(this.todoModel.getTodos()),this.projectView.bindAddProject(this.handleAddProject),this.projectModel.bindProjectsListChanged(this.onProjectsListChanged),this.todoView.bindOpenCreateForm(this.handleOpenCreateForm),this.todoView.bindOpenEditForm(this.handleOpenEditForm),this.todoView.bindAddTodo(this.handleAddTodo),this.todoView.bindEditTodo(this.handleEditTodo),this.todoView.bindDeleteTodo(this.handleDeleteTodo),this.todoModel.bindTodosListChanged(this.onTodosListChanged),this.projectView.toggleProject("0")}(new a,new s,new l,new f)}]);