import { getTasks, addTask, updateTask, removeTask } from "./tasks"

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