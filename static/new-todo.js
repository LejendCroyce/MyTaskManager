const todoListContainer = document.querySelector(".todo-list");
const todoForm = document.querySelector(".addTodoContainer");
const input = document.querySelector("#add_todo");
const filterContainers = document.querySelectorAll(".otherButtons");
const tasks = document.querySelectorAll(".main-task");
const allButton = document.querySelector("#all");
const activeButton = document.querySelector("#active");
const completedButton = document.querySelector("#completed");
todoListContainer.addEventListener("click", function (event) {
  console.log(event.target);
  const mainTaskDiv = event.target.closest(".main-task");
  const spanContent = mainTaskDiv.querySelector(".taskContent");
  const displayPic = mainTaskDiv.querySelector(".checkbox");
  if (event.target.classList.contains("deleteButton")) {
    if (mainTaskDiv) {
      mainTaskDiv.remove();
    }
  }
  if (
    event.target.classList.contains("editButton") ||
    event.target.classList.contains("edit-alternative")
  ) {
    const editInput = mainTaskDiv.querySelector("#edit-todo");
    const saveBtn = mainTaskDiv.querySelector("#edit-todoButton");
    const editBtn = mainTaskDiv.querySelector(".editButton");
    const editBtnAlt = mainTaskDiv.querySelector(".edit-alternative");
    const EditedTaskContent = spanContent.textContent;
    console.log(editInput, EditedTaskContent);
    if (editInput.classList.contains("editUpdate")) {
      editInput.classList.remove("editUpdate");
      // saveBtn.classList.remove("editUpdate");
      // editBtn.classList.add(".editUpdate");
      // editBtnAlt.classList.add(".editUpdate");
      editInput.value = EditedTaskContent;
      editInput.focus();
      spanContent.classList.add("editUpdate");
    } else if (!editInput.classList.contains("editUpdate")) {
      spanContent.textContent = editInput.value;
      editInput.classList.add("editUpdate");
      spanContent.classList.remove("editUpdate");
    }
  }
});

filterContainers[1].addEventListener("click", function () {
  for (const filter of filterContainers) {
    filter.classList.remove("blueColor");
  }

  allButton.classList.add("blueColor");
  const tasks = document.querySelectorAll(".main-task");
  // const activeTasks = Array.from(tasks);
  for (const task of tasks) {
    task.classList.remove("edit-display");
  }
});
filterContainers[2].addEventListener("click", function () {
  for (const filter of filterContainers) {
    filter.classList.remove("blueColor");
  }
  activeButton.classList.add("blueColor");
  const tasks = document.querySelectorAll(".main-task");
  const activeTasks = Array.from(tasks);
  for (const task of tasks) {
    task.classList.remove("edit-display");
  }

  const activeTasksFilter = activeTasks.filter((activeTask) => {
    const span = activeTask.querySelector("span");
    console.log(span);
    return span && span.classList.contains("line2ru");
  });
  console.log(activeTasksFilter);
  for (const active of activeTasksFilter) {
    active.classList.add("edit-display");
  }
  console.log(filterContainers);
});

filterContainers[3].addEventListener("click", function () {
  for (const filter of filterContainers) {
    filter.classList.remove("blueColor");
  }
  completedButton.classList.add("blueColor");
  const tasks = document.querySelectorAll(".main-task");
  for (const task of tasks) {
    task.classList.remove("edit-display");
  }
  const completeTasks = Array.from(tasks);
  const completedTasksFilter = completeTasks.filter((completeTask) => {
    const spanComplete = completeTask.querySelector("span");
    console.log(spanComplete);
    return spanComplete && !spanComplete.classList.contains("line2ru");
  });

  console.log(completedTasksFilter);
  for (const completed of completedTasksFilter) {
    completed.classList.add("edit-display");
  }
  console.log(filterContainers);
});

filterContainers[0].addEventListener("click", function () {
  const tasks = document.querySelectorAll(".main-task");
  const activeTasks = Array.from(tasks);
  for (const task of tasks) {
    task.classList.remove("edit-display");
  }

  const activeTasksFilter = activeTasks.filter((activeTask) => {
    const span = activeTask.querySelector("span");
    console.log(span);
    return span && span.classList.contains("line2ru");
  });
  console.log(activeTasksFilter);
  for (const active of activeTasksFilter) {
    active.remove();
  }
  console.log(filterContainers);
});
