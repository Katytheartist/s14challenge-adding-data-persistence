const tasks = [
    {task_description: 'rest feet', 
        task_notes: 'easier said than done',
        task_completed: false,
        project_id: 1
    },
    {task_description: 'plant seeds', 
        task_notes: 'chaos gardening, toss em out',
        task_completed: true,
        project_id: 4
    },
    {task_description: 'finish this challenge', 
        task_notes: 'type like mad',
        task_completed: false,
        project_id: 1
    },
    {task_description: 'advertise happy appy', 
        task_notes: 'market the idea before creating, the american way',
        task_completed: false,
        project_id: 3
    },
]

exports.seed =  async function(knex){
    await knex('tasks').insert(tasks)
}