const db = require('../../data/dbConfig')

async function getResources(){
    const resourceRows = await db('resources as r')
    
}

async function postResource(){
    
}

module.exports = {
    getResources,
}