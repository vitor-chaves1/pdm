const tasks = [{
    id: 0,
    name: "tarefa0",
    completed: false
}]
const getTasks = () => tasks;

const addTask = (taskName) => {
    const tarefa = {
        id: tasks.length,
        name: taskName,
        completed: false
    }
    tasks.push(tarefa)
}

const removeTask = (taskId) => {
    for (i in tasks) {
        if (i == taskId) {
            tasks.splice(i, 1)
        }
    }
}

const updateTask = (taskId, objeto) => {
    for (i in tasks) {
        if (i == taskId) {
            tasks[i] = { id: taskId, ...objeto }
        }
    }
}

export {getTasks, addTask, removeTask, updateTask}

/*

const tarefas = getTasks();

for (i in tarefas){
    const {id, name, completed} = tarefas[i]
    console.log(id, name, completed)
}


addTask("tarefa1")
addTask("tarefa2")
addTask("tarefa3")
addTask("tarefa4")

removeTask(3)

updateTask(1, { name: "asdasd", completed: true })

for (i in tarefas){
    const {id, name, completed} = tarefas[i]
    console.log("Tarefa:", id, name, completed)
}

*/