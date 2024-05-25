// build your `Task` model here

// Project model

const db = require('../../data/dbConfig')

async function getAll(){
    return Promise.resolve('tasks comin')
    // const tasks = await db('tasks as t')
        // .select(
        //     'task_id',
        //     'task_name',
        //     'task_description',
        //     'task_completed'
        // )

        // return tasks.map(task=>({
        //     task_id: task.task_id,
        //     task_name: task.task_name,
        //     task_description: task.task_description,
        //     task_completed: !!task.task_completed
        // }))
}

async function create(taskData){
    const dataToInsert = {
        ...taskData,
        task_completed: taskData.task_completed ? 1 : 0
    }
    const [newTaskId] = await db('tasks').insert(dataToInsert)
    const newTask = await db('projects').where({project_id: newTaskId}).first()

    if(!newTask){
        throw new Error('new task not found')
    }

    return {
        task_id: newTask.task_id,
        task_name: newTask.task_name,
        task_description: newTask.task_description,
        task_completed: !!newTask.task_completed
    }
}

module.exports = {
    getAll,
    create
}