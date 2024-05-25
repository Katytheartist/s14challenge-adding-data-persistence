// build your `Task` model here

// Project model

const db = require('../../data/dbConfig')

async function getAll(){
    //return Promise.resolve('tasks comin')
     const tasks = await db('tasks as t')
     .leftJoin('projects as p', 't.project_id', 'p.project_id')
         .select(
             't.task_id',
             't.task_notes',
             't.task_description',
             't.task_completed',
             'p.project_name',
             'p.project_description'
         )
         .orderBy('t.task_id')

         return tasks.map(row=>({
            task_id: row.task_id,
            task_notes: row.task_notes,
            task_description: row.task_description,
            task_completed: !!row.task_completed,
            project_name: row.project_name,
            project_description: row.project_description,
         }))
}

async function create(taskData){
    const dataToInsert = {
        ...taskData,
        task_completed: taskData.task_completed ? 1 : 0
    }
    const [newTaskId] = await db('tasks').insert(dataToInsert)
    const newTask = await db('tasks').where({task_id: newTaskId}).first()

    if(!newTask){
        throw new Error('new task not found')
    }

    return {
        task_id: newTask.task_id,
        task_notes: newTask.task_notes,
        task_description: newTask.task_description,
        task_completed: !!newTask.task_completed,
        project_id: newTask.project_id,
    }
}

module.exports = {
    getAll,
    create
}