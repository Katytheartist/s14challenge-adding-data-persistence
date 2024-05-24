// Project model

const db = require('../../data/dbConfig')

async function getAll(){
    const projects = await db('projects as p')
        .select(
            'project_id',
            'project_name',
            'project_description',
            'project_completed'
        )

        return projects.map(project=>({
            project_id: project.project_id,
            project_name: project.project_name,
            project_description: project.project_description,
            project_completed: !!project.project_completed
        }))
}

async function create(projectData){
    const dataToInsert = {
        ...projectData,
        project_completed: projectData.project_completed ? 1 : 0
    }
    const [newProjectId] = await db('projects').insert(dataToInsert)
    const newProject = await db('projects').where({project_id: newProjectId}).first()

    if(!newProject){
        throw new Error('new project not found')
    }

    return {
        project_id: newProject.project_id,
        project_name: newProject.project_name,
        project_description: newProject.project_description,
        project_completed: !!newProject.project_completed
    }
}

module.exports = {
    getAll,
    create
}