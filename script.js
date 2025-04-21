let categories = [
  {
    title: "Personal",
    img: "boy.png",
  },
  {
    title: "Work",
    img: "briefcase.png",
  },
  {
    title: "Shopping",
    img: "shopping.png",
  },
  {
    title: "Coding",
    img: "web-design.png",
  },
  {
    title: "Health",
    img: "healthcare.png",
  },
  {
    title: "Fitness",
    img: "dumbbell.png",
  },
  {
    title: "Education",
    img: "education.png",
  },
  {
    title: "Finance",
    img: "saving.png",
  },
];

let tasks = [
  {
    id: 1,
    task: "Go to market",
    category: "Shopping",
    completed: false,
    dueDate: "2025-04-20",
    recurrence: "none",
  },
  {
    id: 2,
    task: "Read a chapter of a book",
    category: "Personal",
    completed: false,
    dueDate: "",
    recurrence: "none",
  },
  {
    id: 3,
    task: "Prepare presentation for meeting",
    category: "Work",
    completed: false,
    dueDate: "2025-04-22",
    recurrence: "none",
  },
  {
    id: 4,
    task: "Complete coding challenge",
    category: "Coding",
    completed: false,
    dueDate: "",
    recurrence: "none",
  },
  {
    id: 5,
    task: "Take a 30-minute walk",
    category: "Health",
    completed: false,
    dueDate: "2025-04-19",
    recurrence: "none",
  },
  {
    id: 6,
    task: "Do a 20-minute HIIT workout",
    category: "Fitness",
    completed: false,
    dueDate: "",
    recurrence: "none",
  },
  {
    id: 7,
    task: "Watch an educational video online",
    category: "Education",
    completed: false,
    dueDate: "2025-04-21",
    recurrence: "none",
  },
  {
    id: 8,
    task: "Review monthly budget",
    category: "Finance",
    completed: false,
    dueDate: "",
    recurrence: "none",
  },
  {
    id: 9,
    task: "Buy groceries for the week",
    category: "Shopping",
    completed: false,
    dueDate: "2025-04-18",
    recurrence: "none",
  },
  {
    id: 10,
    task: "Write in a journal",
    category: "Personal",
    completed: false,
    dueDate: "",
    recurrence: "none",
  },
  {
    id: 11,
    task: "Send follow-up emails",
    category: "Work",
    completed: false,
    dueDate: "",
    recurrence: "none",
  },
  {
    id: 12,
    task: "Work on a coding side project",
    category: "Coding",
    completed: false,
    dueDate: "2025-04-23",
    recurrence: "none",
  },
  {
    id: 13,
    task: "Try a new healthy recipe",
    category: "Health",
    completed: false,
    dueDate: "",
    recurrence: "none",
  },
  {
    id: 14,
    task: "Attend a yoga class",
    category: "Fitness",
    completed: false,
    dueDate: "2025-04-20",
    recurrence: "none",
  },
  {
    id: 15,
    task: "Read an article about a new topic",
    category: "Education",
    completed: false,
    dueDate: "",
    recurrence: "none",
  },
  {
    id: 16,
    task: "Set up automatic bill payments",
    category: "Finance",
    completed: false,
    dueDate: "2025-04-25",
    recurrence: "none",
  },
  {
    id: 17,
    task: "Buy new clothes",
    category: "Shopping",
    completed: false,
    dueDate: "",
    recurrence: "none",
  },
  {
    id: 18,
    task: "Meditate for 10 minutes",
    category: "Personal",
    completed: false,
    dueDate: "2025-04-19",
    recurrence: "none",
  },
  {
    id: 19,
    task: "Prepare agenda for team meeting",
    category: "Work",
    completed: false,
    dueDate: "",
    recurrence: "none",
  },
  {
    id: 20,
    task: "Debug a software issue",
    category: "Coding",
    completed: false,
    dueDate: "",
    recurrence: "none",
  },
  {
    id: 21,
    task: "Try a new recipe for lunch",
    category: "Health",
    completed: false,
    dueDate: "2025-04-21",
    recurrence: "none",
  },
  {
    id: 22,
    task: "Go for a run",
    category: "Fitness",
    completed: false,
    dueDate: "",
    recurrence: "none",
  },
  {
    id: 23,
    task: "Learn a new language online",
    category: "Education",
    completed: false,
    dueDate: "2025-04-24",
    recurrence: "none",
  },
  {
    id: 24,
    task: "Read about history",
    category: "Education",
    completed: false,
    dueDate: "",
    recurrence: "none",
  },
  {
    id: 25,
    task: "Review investment portfolio",
    category: "Finance",
    completed: false,
    dueDate: "",
    recurrence: "none",
  },
];

// Initial data for reset
const initialCategories = JSON.parse(JSON.stringify(categories));
const initialTasks = JSON.parse(JSON.stringify(tasks));

// Define functions
const saveLocal = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const getLocal = () => {
  const tasksLocal = JSON.parse(localStorage.getItem("tasks"));
  if (tasksLocal) {
    tasks = tasksLocal.map(task => ({
      ...task,
      recurrence: task.recurrence || "none"
    }));
  }
};

const saveUserName = () => {
  const name = nameInput.value.trim();
  if (name === "") {
    showToast("Please enter your name", "error");
  } else {
    localStorage.setItem("userName", name);
    userNameElement.textContent = name;
    toggleNamePrompt();
    showToast("Name updated successfully", "success");
  }
};

const getUserName = () => {
  const savedName = localStorage.getItem("userName");
  if (savedName) {
    userNameElement.textContent = savedName;
    return savedName;
  }
  return null;
};

const toggleNamePrompt = () => {
  namePrompt.classList.toggle("active");
  blackBackdrop.classList.toggle("active");
};

const editName = () => {
  const currentName = getUserName() || "";
  nameInput.value = currentName;
  toggleNamePrompt();
  dropdownMenu.classList.remove("active");
};

const toggleScreen = () => {
  screenWrapper.classList.toggle("show-category");
  dropdownMenu.classList.remove("active");
};

const updateTotals = () => {
  const categoryTasks = tasks.filter(
    (task) =>
      task.category.toLowerCase() === selectedCategory.title.toLowerCase()
  );
  numTasks.innerHTML = `${categoryTasks.length} Tasks`;
  totalTasks.innerHTML = tasks.length;
};

const updateProgress = () => {
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasksCount = tasks.length;
  const percentage = totalTasksCount > 0 ? (completedTasks / totalTasksCount) * 100 : 0;
  progressTasks.innerHTML = `${completedTasks}/${totalTasksCount}`;
  progressPercentage.innerHTML = `${Math.round(percentage)}%`;
  progressFill.style.width = `${percentage}%`;
};

const renderCategories = (searchQuery = "") => {
  categoriesContainer.innerHTML = "";
  let filteredCategories = categories;

  if (searchQuery) {
    filteredCategories = categories.filter((category) => {
      const categoryTasks = tasks.filter(
        (task) => task.category.toLowerCase() === category.title.toLowerCase()
      );
      return categoryTasks.some((task) =>
        task.task.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  }

  if (filteredCategories.length === 0) {
    categoriesContainer.innerHTML = `<p class="no-categories">No categories found</p>`;
  } else {
    filteredCategories.forEach((category) => {
      const categoryTasks = tasks.filter(
        (task) => task.category.toLowerCase() === category.title.toLowerCase()
      );
      const div = document.createElement("div");
      div.classList.add("category");
      if (searchQuery) {
        div.classList.add("highlight");
        setTimeout(() => {
          div.classList.remove("highlight");
        }, 3000);
      }
      div.addEventListener("click", () => {
        screenWrapper.classList.add("show-category");
        selectedCategory = category;
        updateTotals();
        categoryTitle.innerHTML = category.title;
        categoryImg.src = `images/${category.img}`;
        renderTasks();
        dropdownMenu.classList.remove("active");
      });

      div.innerHTML = `
        <div class="left">
          <img src="images/${category.img}" alt="${category.title} icon" />
          <div class="content">
            <h1>${category.title}</h1>
            <p>${categoryTasks.length} Tasks</p>
          </div>
        </div>
        <div class="options">
          <div class="toggle-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
              />
            </svg>
          </div>
        </div>
      `;

      categoriesContainer.appendChild(div);
    });
  }

  updateTotals();
  updateProgress();
};

const showToast = (message, type = "success") => {
  const toastContainer = document.querySelector(".toast-container");
  const toast = document.createElement("div");
  toast.classList.add("toast", type);
  toast.textContent = message;

  let notificationSound;
  if (type === "success") {
    notificationSound = document.getElementById("success-sound");
  } else if (type === "error") {
    notificationSound = document.getElementById("error-sound");
  } else if (type === "info") {
    notificationSound = document.getElementById("info-sound");
  }

  if (notificationSound) {
    notificationSound.currentTime = 0;
    notificationSound.play().catch((error) => {
      console.log("Audio playback failed:", error);
    });
  }

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 5000);
};

const renderTasks = () => {
  tasksContainer.innerHTML = "";
  const filteredTasks = tasks.filter(
    (task) =>
      task.category.toLowerCase() === selectedCategory.title.toLowerCase()
  );

  if (filteredTasks.length === 0) {
    tasksContainer.innerHTML = `<p class="no-tasks">No tasks found</p>`;
  } else {
    filteredTasks.forEach((task) => {
      const div = document.createElement("div");
      div.classList.add("task-wrapper");
      const label = document.createElement("label");
      label.classList.add("task");
      label.setAttribute("for", `task-${task.id}`);
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = `task-${task.id}`;
      checkbox.checked = task.completed;
      checkbox.setAttribute("aria-label", `Mark ${task.task} as completed`);
      checkbox.addEventListener("change", () => {
        const index = tasks.findIndex((t) => t.id === task.id);
        tasks[index].completed = !tasks[index].completed;
        saveLocal();
        updateProgress();
        showToast(tasks[index].completed ? "Task completed" : "Task marked incomplete", "success");
        renderCategories(searchInput.value);
        renderTasks();
      });

      div.innerHTML = `
        <div class="task-header">
          <span class="due-date">${task.dueDate ? `Due: ${task.dueDate.split('-').slice(1).join('/')}/${task.dueDate.split('-')[0]}` : ""}</span>
          <div class="more-options" data-task-id="${task.id}">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
              />
            </svg>
            <div class="options-menu">
              <button class="edit-task-btn" data-task-id="${task.id}">
                <span class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                </span>
                <span class="text">Edit</span>
              </button>
              <button class="delete-task-btn" data-task-id="${task.id}">
                <span class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </span>
                <span class="text">Delete</span>
              </button>
            </div>
          </div>
        </div>
      `;
      label.innerHTML = `
        <span class="checkmark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </span>
        <p>${task.task}</p>
      `;
      label.prepend(checkbox);
      div.appendChild(label);
      tasksContainer.appendChild(div);

      const moreOptionsBtn = div.querySelector(".more-options");
      const optionsMenu = div.querySelector(".options-menu");
      moreOptionsBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        document.querySelectorAll(".options-menu.active").forEach((menu) => {
          if (menu !== optionsMenu) menu.classList.remove("active");
        });
        optionsMenu.classList.toggle("active");
      });

      const editBtn = div.querySelector(".edit-task-btn");
      editBtn.addEventListener("click", () => {
        editTaskWrapper.classList.add("active");
        blackBackdrop.classList.add("active");
        editTaskInput.value = task.task;
        editCategorySelect.value = task.category.toLowerCase();
        editDueDate.value = task.dueDate || "";
        editRecurrenceSelect.value = task.recurrence || "none";
        editTaskWrapper.dataset.taskId = task.id;
        dropdownMenu.classList.remove("active");
        optionsMenu.classList.remove("active");
      });

      const deleteBtn = div.querySelector(".delete-task-btn");
      deleteBtn.addEventListener("click", () => {
        const index = tasks.findIndex((t) => t.id === task.id);
        tasks.splice(index, 1);
        saveLocal();
        renderTasks();
        renderCategories(searchInput.value);
        updateProgress();
        showToast("Task deleted successfully", "success");
        dropdownMenu.classList.remove("active");
        optionsMenu.classList.remove("active");
      });
    });
  }
};

const toggleAddTaskForm = () => {
  addTaskWrapper.classList.toggle("active");
  blackBackdrop.classList.toggle("active");
  addTaskBtn.classList.toggle("active");
  dropdownMenu.classList.remove("active");
};

const toggleEditTaskForm = () => {
  editTaskWrapper.classList.toggle("active");
  blackBackdrop.classList.toggle("active");
  dropdownMenu.classList.remove("active");
};

const addTask = (e) => {
  e.preventDefault();
  const task = taskInput.value;
  const category = categorySelect.value;
  const dueDate = dueDateInput.value;
  const recurrence = recurrenceSelect.value;

  if (task === "") {
    showToast("Please enter a task", "error");
  } else {
    const newTask = {
      id: tasks.length + 1,
      task,
      category: category.charAt(0).toUpperCase() + category.slice(1),
      completed: false,
      dueDate,
      recurrence,
    };
    taskInput.value = "";
    dueDateInput.value = "";
    recurrenceSelect.value = "none";
    tasks.push(newTask);
    saveLocal();
    toggleAddTaskForm();
    renderCategories(searchInput.value);
    renderTasks();
    updateProgress();
    showToast("Task added successfully", "success");
  }
};

const editTask = (e) => {
  e.preventDefault();
  const taskId = parseInt(editTaskWrapper.dataset.taskId);
  const task = editTaskInput.value;
  const category = editCategorySelect.value;
  const dueDate = editDueDate.value;
  const recurrence = editRecurrenceSelect.value;

  if (task === "") {
    showToast("Please enter a task", "error");
  } else {
    const index = tasks.findIndex((t) => t.id === taskId);
    tasks[index] = {
      ...tasks[index],
      task,
      category: category.charAt(0).toUpperCase() + category.slice(1),
      dueDate,
      recurrence,
    };
    saveLocal();
    toggleEditTaskForm();
    renderTasks();
    renderCategories(searchInput.value);
    updateProgress();
    showToast("Task updated successfully", "success");
  }
};

const checkRecurringTasks = () => {
  const now = new Date();
  const today = now.toISOString().split('T')[0];
  tasks.forEach((task) => {
    if (task.recurrence !== "none" && task.dueDate && !task.completed) {
      const dueDate = new Date(task.dueDate);
      if (dueDate <= now) {
        let newDueDate = "";
        if (task.recurrence === "daily") {
          newDueDate = new Date(dueDate.getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0];
        } else if (task.recurrence === "weekly") {
          newDueDate = new Date(dueDate.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
        }
        const newTask = {
          id: tasks.length + 1,
          task: task.task,
          category: task.category,
          completed: false,
          dueDate: newDueDate,
          recurrence: task.recurrence,
        };
        tasks.push(newTask);
        task.completed = true;
        showToast(`New recurring task "${task.task}" created for ${newDueDate}`, "success");
      }
    }
  });
  saveLocal();
  renderTasks();
  renderCategories(searchInput.value);
  updateProgress();
};

const requestNotificationPermission = () => {
  if ("Notification" in window && Notification.permission !== "denied") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        showToast("Notification permission granted", "success");
      } else {
        showToast("Notification permission denied", "error");
      }
    });
  }
};

const sendBrowserNotification = (title, body) => {
  if ("Notification" in window && Notification.permission === "granted") {
    new Notification(title, {
      body,
      icon: "images/boy.png",
    });
  }
};

const checkDueDateReminders = () => {
  const now = new Date();
  tasks.forEach((task) => {
    if (task.dueDate && !task.completed) {
      const dueDate = new Date(task.dueDate);
      const timeDiff = dueDate - now;
      const hoursUntilDue = timeDiff / (1000 * 60 * 60);
      
      if (hoursUntilDue <= 24 && hoursUntilDue > 0) {
        const message = `Reminder: "${task.task}" is due on ${task.dueDate}!`;
        showToast(message, "info");
        sendBrowserNotification("Task Reminder", message);
      }
      else if (hoursUntilDue <= 0 && hoursUntilDue > -24) {
        const message = `Warning: "${task.task}" was due on ${task.dueDate}!`;
        showToast(message, "error");
        sendBrowserNotification("Overdue Task", message);
      }
    }
  });
};

// New functions for category management
const getLocalCategories = () => {
  const categoriesLocal = JSON.parse(localStorage.getItem("categories"));
  if (categoriesLocal) {
    categories = categoriesLocal;
  }
};

const toggleAddCategoryForm = () => {
  addCategoryWrapper.classList.toggle("active");
  blackBackdrop.classList.toggle("active");
  dropdownMenu.classList.remove("active");
  categoryTitleInput.value = "";
};

const saveCategory = () => {
  const title = categoryTitleInput.value.trim();
  const img = categoryImageSelect.value;
  const editTitle = saveCategoryBtn.dataset.editTitle;

  if (title === "") {
    showToast("Please enter a category title", "error");
    return;
  }

  if (
    !editTitle &&
    categories.some((category) => category.title.toLowerCase() === title.toLowerCase())
  ) {
    showToast("Category already exists", "error");
    return;
  }

  if (editTitle) {
    const index = categories.findIndex(
      (cat) => cat.title.toLowerCase() === editTitle.toLowerCase()
    );
    const oldTitle = categories[index].title;
    categories[index] = {
      title: title.charAt(0).toUpperCase() + title.slice(1),
      img,
    };
    tasks.forEach((task) => {
      if (task.category.toLowerCase() === oldTitle.toLowerCase()) {
        task.category = title.charAt(0).toUpperCase() + title.slice(1);
      }
    });
    saveLocal();
    delete saveCategoryBtn.dataset.editTitle;
    showToast("Category updated successfully", "success");
  } else {
    const newCategory = {
      title: title.charAt(0).toUpperCase() + title.slice(1),
      img,
    };
    categories.push(newCategory);
    showToast("Category added successfully", "success");
  }

  localStorage.setItem("categories", JSON.stringify(categories));
  addCategoryWrapper.classList.remove("active");
  blackBackdrop.classList.remove("active");
  renderCategories(searchInput.value);
  updateCategorySelects();
  renderManageCategories();
  delete addCategoryWrapper.dataset.editSource;
};

const updateCategorySelects = () => {
  categorySelect.innerHTML = "";
  editCategorySelect.innerHTML = "";
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category.title.toLowerCase();
    option.textContent = category.title;
    categorySelect.appendChild(option);

    const editOption = document.createElement("option");
    editOption.value = category.title.toLowerCase();
    editOption.textContent = category.title;
    editCategorySelect.appendChild(editOption);
  });
};

const toggleManageCategoryForm = () => {
  manageCategoryWrapper.classList.toggle("active");
  blackBackdrop.classList.toggle("active");
  dropdownMenu.classList.remove("active");
  renderManageCategories();
};

const renderManageCategories = () => {
  const categoriesList = document.querySelector(".categories-list");
  categoriesList.innerHTML = "";
  
  categories.forEach((category) => {
    const categoryTasks = tasks.filter(
      (task) => task.category.toLowerCase() === category.title.toLowerCase()
    );
    const div = document.createElement("div");
    div.classList.add("category-item");
    div.innerHTML = `
      <img src="images/${category.img}" alt="${category.title} icon" />
      <div class="category-info">
        <h3>${category.title}</h3>
        <p>${categoryTasks.length} Tasks</p>
      </div>
      <div class="category-actions">
        <button class="edit-btn" data-title="${category.title}">Edit</button>
        <button class="delete-btn" data-title="${category.title}">Delete</button>
      </div>
    `;
    categoriesList.appendChild(div);

    const editBtn = div.querySelector(".edit-btn");
    editBtn.addEventListener("click", () => {
      const categoryToEdit = categories.find(
        (cat) => cat.title.toLowerCase() === category.title.toLowerCase()
      );
      categoryTitleInput.value = categoryToEdit.title;
      categoryImageSelect.value = categoryToEdit.img;
      manageCategoryWrapper.classList.remove("active");
      addCategoryWrapper.classList.add("active");
      blackBackdrop.classList.add("active");
      saveCategoryBtn.dataset.editTitle = categoryToEdit.title;
      addCategoryWrapper.dataset.editSource = "manage";
    });

    const deleteBtn = div.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
      if (categories.length === 1) {
        showToast("At least one category must remain", "error");
        return;
      }
      if (categoryTasks.length > 0) {
        showToast("Cannot delete category with tasks", "error");
        return;
      }
      const index = categories.findIndex(
        (cat) => cat.title.toLowerCase() === category.title.toLowerCase()
      );
      categories.splice(index, 1);
      localStorage.setItem("categories", JSON.stringify(categories));
      renderManageCategories();
      renderCategories(searchInput.value);
      updateCategorySelects();
      showToast("Category deleted successfully", "success");
    });
  });
};

// New function for resetting data
const resetData = () => {
  const confirmReset = window.confirm("Are you sure you want to reset all data? This action cannot be undone.");
  if (confirmReset) {
    localStorage.removeItem("tasks");
    localStorage.removeItem("categories");
    localStorage.removeItem("userName");
    
    categories = JSON.parse(JSON.stringify(initialCategories));
    tasks = JSON.parse(JSON.stringify(initialTasks));
    selectedCategory = categories[0];

    userNameElement.textContent = "";
    toggleNamePrompt();
    dropdownMenu.classList.remove("active");

    renderCategories();
    updateCategorySelects();
    updateProgress();
    renderTasks();

    showToast("All data has been reset", "success");
  } else {
    showToast("Reset canceled", "info");
  }
};

let selectedCategory = categories[0];
const categoriesContainer = document.querySelector(".categories");
const screenWrapper = document.querySelector(".wrapper");
const menuBtn = document.querySelector(".menu-btn");
const dropdownMenu = document.querySelector(".dropdown-menu");
const backBtn = document.querySelector(".back-btn");
const tasksContainer = document.querySelector(".tasks");
const numTasks = document.getElementById("num-tasks");
const categoryTitle = document.getElementById("category-title");
const categoryImg = document.getElementById("category-img");
const categorySelect = document.getElementById("category-select");
const addTaskWrapper = document.querySelector(".add-task");
const editTaskWrapper = document.querySelector(".edit-task");
const namePrompt = document.querySelector(".name-prompt");
const addTaskBtn = document.querySelector(".add-task-btn");
const taskInput = document.getElementById("task-input");
const dueDateInput = document.getElementById("due-date");
const recurrenceSelect = document.getElementById("recurrence-select");
const blackBackdrop = document.querySelector(".black-backdrop");
const addBtn = document.querySelector(".add-btn");
const editTaskInput = document.getElementById("edit-task-input");
const editCategorySelect = document.getElementById("edit-category-select");
const editDueDate = document.getElementById("edit-due-date");
const editRecurrenceSelect = document.getElementById("edit-recurrence-select");
const saveBtn = document.querySelector(".save-btn");
const nameInput = document.getElementById("name-input");
const saveNameBtn = document.querySelector(".save-name-btn");
const themeToggle = document.getElementById("theme-toggle");
const searchInput = document.getElementById("search-input");
const editNameBtn = document.getElementById("edit-name-btn");
const totalTasks = document.getElementById("total-tasks");
const progressTasks = document.getElementById("progress-tasks");
const progressPercentage = document.getElementById("progress-percentage");
const progressFill = document.getElementById("progress-fill");
const userNameElement = document.getElementById("user-name");
const addCategoryBtn = document.getElementById("add-category-btn");
const addCategoryWrapper = document.querySelector(".add-category");
const categoryTitleInput = document.getElementById("category-title-input");
const categoryImageSelect = document.getElementById("category-image-select");
const saveCategoryBtn = document.querySelector(".save-category-btn");
const addCategoryCancelBtn = document.querySelector(".add-category .cancel-btn");
const manageCategoryWrapper = document.querySelector(".manage-category");
const manageCategoryBtn = document.getElementById("manage-category-btn");
const manageCategoryCancelBtn = document.querySelector(".manage-category .cancel-btn");
const resetDataBtn = document.getElementById("reset-data-btn");

menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdownMenu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!dropdownMenu.contains(e.target) && !menuBtn.contains(e.target)) {
    dropdownMenu.classList.remove("active");
  }
});

backBtn.addEventListener("click", toggleScreen);
addTaskBtn.addEventListener("click", toggleAddTaskForm);
blackBackdrop.addEventListener("click", () => {
  if (addTaskWrapper.classList.contains("active")) {
    toggleAddTaskForm();
  }
  if (editTaskWrapper.classList.contains("active")) {
    toggleEditTaskForm();
  }
  if (namePrompt.classList.contains("active")) {
    toggleNamePrompt();
  }
  if (addCategoryWrapper.classList.contains("active")) {
    toggleAddCategoryForm();
  }
  if (manageCategoryWrapper.classList.contains("active")) {
    toggleManageCategoryForm();
  }
});
addBtn.addEventListener("click", addTask);

// Cancel button for add-task
const addTaskCancelBtn = document.querySelector(".add-task .cancel-btn");
addTaskCancelBtn.addEventListener("click", () => {
  toggleAddTaskForm();
});

// Cancel button for edit-task
const editTaskCancelBtn = document.querySelector(".edit-task .cancel-btn");
editTaskCancelBtn.addEventListener("click", () => {
  toggleEditTaskForm();
});

// Cancel button for name-prompt
const nameCancelBtn = document.querySelector(".name-prompt .cancel-btn");
nameCancelBtn.addEventListener("click", () => {
  toggleNamePrompt();
});

// Cancel button for add-category
addCategoryBtn.addEventListener("click", toggleAddCategoryForm);
saveCategoryBtn.addEventListener("click", saveCategory);
addCategoryCancelBtn.addEventListener("click", () => {
  if (saveCategoryBtn.dataset.editTitle && addCategoryWrapper.dataset.editSource === "manage") {
    addCategoryWrapper.classList.remove("active");
    manageCategoryWrapper.classList.add("active");
    blackBackdrop.classList.add("active");
    delete saveCategoryBtn.dataset.editTitle;
    delete addCategoryWrapper.dataset.editSource;
    categoryTitleInput.value = "";
  } else {
    addCategoryWrapper.classList.remove("active");
    blackBackdrop.classList.remove("active");
    delete saveCategoryBtn.dataset.editTitle;
    delete addCategoryWrapper.dataset.editSource;
    categoryTitleInput.value = "";
  }
});

// Manage category event listeners
manageCategoryBtn.addEventListener("click", toggleManageCategoryForm);
manageCategoryCancelBtn.addEventListener("click", toggleManageCategoryForm);

// Reset data event listener
resetDataBtn.addEventListener("click", resetData);

saveBtn.addEventListener("click", editTask);
saveNameBtn.addEventListener("click", saveUserName);
themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});
searchInput.addEventListener("input", () => {
  screenWrapper.classList.remove("show-category");
  renderCategories(searchInput.value);
});
editNameBtn.addEventListener("click", editName);

getLocal();
getLocalCategories();
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  themeToggle.checked = true;
}
if (!getUserName()) {
  toggleNamePrompt();
}
renderCategories();
updateCategorySelects();
updateProgress();

requestNotificationPermission();
setInterval(() => {
  checkDueDateReminders();
  checkRecurringTasks();
}, 60 * 1000);

// Global click handler for task options menus
document.addEventListener("click", (e) => {
  if (!e.target.closest(".more-options") && !e.target.closest(".options-menu")) {
    document.querySelectorAll(".options-menu").forEach((menu) => {
      menu.classList.remove("active");
    });
  }
});

// Existing code for category screen header three-dot menu
const optionsBtn = document.querySelector(".category-screen .options");
const optionsMenu = document.querySelector(".category-screen .options-menu");

optionsBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  optionsMenu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!optionsBtn.contains(e.target) && !optionsMenu.contains(e.target)) {
    optionsMenu.classList.remove("active");
  }
});

const completeAllTasks = () => {
  const categoryTasks = tasks.filter(
    (task) => task.category.toLowerCase() === selectedCategory.title.toLowerCase()
  );
  if (categoryTasks.length === 0) {
    showToast("No tasks", "info");
    return;
  }
  categoryTasks.forEach((task) => {
    task.completed = true;
  });
  saveLocal();
  renderTasks();
  renderCategories(searchInput.value);
  updateProgress();
  showToast("All tasks completed.", "success");
};

const editCategory = () => {
  const categoryToEdit = categories.find(
    (cat) => cat.title.toLowerCase() === selectedCategory.title.toLowerCase()
  );
  categoryTitleInput.value = categoryToEdit.title;
  categoryImageSelect.value = categoryToEdit.img;
  addCategoryWrapper.classList.add("active");
  blackBackdrop.classList.add("active");
  saveCategoryBtn.dataset.editTitle = categoryToEdit.title;
  addCategoryWrapper.dataset.editSource = "header";
  optionsMenu.classList.remove("active");
};

const deleteAllTasks = () => {
  const categoryTasks = tasks.filter(
    (task) => task.category.toLowerCase() === selectedCategory.title.toLowerCase()
  );
  if (categoryTasks.length === 0) {
    showToast("No tasks", "info");
    return;
  }
  const confirmDelete = window.confirm("Are you sure you want to delete all tasks in this category?");
  if (confirmDelete) {
    tasks = tasks.filter(
      (task) => task.category.toLowerCase() !== selectedCategory.title.toLowerCase()
    );
    saveLocal();
    renderTasks();
    renderCategories(searchInput.value);
    updateProgress();
    showToast("All tasks in this category have been deleted.", "success");
  } else {
    showToast("Delete canceled.", "info");
  }
};

const shareCategory = () => {
  const categoryTasks = tasks.filter(
    (task) => task.category.toLowerCase() === selectedCategory.title.toLowerCase()
  );
  if (categoryTasks.length === 0) {
    showToast("No tasks to share.", "info");
    return;
  }
  const taskList = categoryTasks
    .map((task, index) => `${index + 1}. ${task.task} ${task.dueDate ? `(Due: ${task.dueDate})` : ""}`)
    .join("\n");
  const shareText = `Category: ${selectedCategory.title}\nTask List:\n${taskList}`;
  
  if (navigator.share) {
    navigator
      .share({
        title: `Category: ${selectedCategory.title}`,
        text: shareText,
      })
      .then(() => {
        showToast("Category shared", "success");
      })
      .catch(() => {
        showToast("Failed to share", "error");
      });
  } else {
    navigator.clipboard
      .writeText(shareText)
      .then(() => {
        showToast("Category copied to clipboard.", "success");
      })
      .catch(() => {
        showToast("Copy failed.", "error");
      });
  }
  optionsMenu.classList.remove("active");
};

const uncompleteAllTasks = () => {
  const categoryTasks = tasks.filter(
    (task) => task.category.toLowerCase() === selectedCategory.title.toLowerCase()
  );
  if (categoryTasks.length === 0) {
    showToast("No tasks", "info");
    return;
  }
  categoryTasks.forEach((task) => {
    task.completed = false;
  });
  saveLocal();
  renderTasks();
  renderCategories(searchInput.value);
  updateProgress();
  showToast("All tasks have been uncompleted.", "success");
};

const completeAllBtn = document.querySelector(".complete-all-btn");
const editCategoryBtn = document.querySelector(".edit-category-btn");
const deleteAllBtn = document.querySelector(".delete-all-btn");
const shareCategoryBtn = document.querySelector(".share-category-btn");
const uncompleteAllBtn = document.querySelector(".uncomplete-all-btn");

completeAllBtn.addEventListener("click", () => {
  completeAllTasks();
  optionsMenu.classList.remove("active");
});

editCategoryBtn.addEventListener("click", () => {
  editCategory();
});

deleteAllBtn.addEventListener("click", () => {
  deleteAllTasks();
  optionsMenu.classList.remove("active");
});

shareCategoryBtn.addEventListener("click", () => {
  shareCategory();
});

uncompleteAllBtn.addEventListener("click", () => {
  uncompleteAllTasks();
  optionsMenu.classList.remove("active");
});