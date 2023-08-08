type Task = {
   id: number;
   title: string;
   completed: boolean;
};

type TaskList = Task[];

function addTask(taskList: TaskList, task: Task): TaskList {
   return [...taskList, task];
}

function completeTask(taskList: TaskList, taskID: number): TaskList {
   return taskList.map((task) =>
      task.id == taskID ? { ...task, completed: true } : task
   );
}

function filterTasks(taskList: TaskList, filter: string): TaskList {
   return taskList.filter((task) =>
      filter === "completed" ? task.completed : null
   );
}

function printTaskList(taskList: TaskList): void {
   taskList.forEach((task) => {
      console.log(`Title: ${task.title} | Completed: ${task.completed}`);
   });
}

function runApp() {
   let tasks: TaskList = [
      { id: 1, title: "Completar taller de TypeScript", completed: false },
      { id: 2, title: "Estudiar programación funcional", completed: false },
      { id: 3, title: "Presentación sobre TypeScript", completed: true },
      { id: 4, title: "Leer libro de TypeScript avanzado", completed: false },
      { id: 5, title: "Resolver ejercicios de TypeScript", completed: false },
      { id: 6, title: "Hacer ejercicio", completed: true },
      { id: 7, title: "Comprar víveres", completed: false },
      { id: 8, title: "Llamar al médico", completed: false },
      { id: 9, title: "Limpiar la casa", completed: true },
      { id: 10, title: "Actualizar el CV", completed: false }
   ];

   const task1: Task = { id: 11, title: "English class", completed: false };
   const task2: Task = { id: 12, title: "Finish project", completed: false };

   tasks = addTask(tasks, task1);
   tasks = addTask(tasks, task2);

   tasks = completeTask(tasks, 1);

   const completedTasks = filterTasks(tasks, "completed");

   printTaskList(completedTasks);

   console.log(tasks);
}

runApp();
