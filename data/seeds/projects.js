const projects = [
    {project_name: 'have fun' , 
        project_description: 'swim, nap, smoke weed, code', 
        project_completed: null},
    {project_name: 'build life boat' , 
        project_description: 'prepare for apocalypse', 
        project_completed: null},
    {project_name: 'the happy appy' , 
        project_description: 'simple app to keep you busy', 
        project_completed: null},
    {project_name: 'farm life checklist' , 
        project_description: 'grow food and make cheese', 
        project_completed: null},
]

exports.seed = async function(knex){
    await knex('projects').insert(projects)
}