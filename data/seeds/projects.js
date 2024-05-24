const projects = [
    {project_name: 'have fun' , 
        project_description: 'swim, nap, smoke weed, code', 
        project_completed: true},
    {project_name: 'build life boat' , 
        project_description: 'prepare for apocalypse', 
        project_completed: false},
    {project_name: 'the happy appy' , 
        project_description: 'simple app to keep you busy', 
        project_completed: false},
    {project_name: 'farm life checklist' , 
        project_description: 'grow food and make cheese', 
        project_completed: true},
]

exports.seed = async function(knex){
    await knex('projects').insert(projects)
}