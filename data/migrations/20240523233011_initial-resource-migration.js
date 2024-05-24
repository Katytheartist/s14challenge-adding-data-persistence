
exports.up = async function(knex) {
  await knex.schema
    .createTable('resources', table =>{
        table.increments('resource_id')
        table.string('resource_name', 200).notNullable().unique()
        table.string('resource_description', 200)
    })
};


exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('resources')
};
