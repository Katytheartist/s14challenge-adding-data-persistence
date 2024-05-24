const db = require('../../data/dbConfig')

async function getAll(){
    const resourceRows = await db('resources as r')
        .select('resource_id', 'resource_name', 'resource_description')
       // .orderBy('resource_id')
        return resourceRows.map(row => ({
            resource_id: row.resource_id,
            resource_name: row.resource_name,
            resource_description: row.resource_description
          }))
       // return resourceRows
}

async function create(resourceData){
    const [newResourceId] = await db('resources').insert(resourceData)
    console.log(`inserted resource id: ${newResourceId}`)
    const newResource = await db('resources').where({resource_id: newResourceId}).first()
    console.log(`fetched new resource: ${JSON.stringify(newResource)}`)

    if(!newResource){
        throw new Error('new resource not found')
    }

    return {
        resource_id: newResource.resource_id,
        resource_name: newResource.resource_name,
        resource_description: newResource.resource_description,        
      }
}

module.exports = {
    getAll,
    create
}