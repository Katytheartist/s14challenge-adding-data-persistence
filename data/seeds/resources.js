const resources = [
    {resource_name: 'web' , resource_description: 'global connectivity through machines'},
    {resource_name: 'water' , resource_description: 'H20'},
    {resource_name: 'books' , resource_description: 'archaic means of gaining knowledge'},
    {resource_name: 'soil' , resource_description: 'dirty substance in which food grows'},
]

exports.seed = async function(knex){
    await knex('resources').insert(resources)
}