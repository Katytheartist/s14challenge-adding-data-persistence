
exports.up = async function(knex) {
  await knex.schema
    .createTable('tasks', table=>{
        table.increments('task_id')
        table.string('task_description', 200).notNullable()
        table.string('task_notes', 200)
        table.integer('task_completed').defaultTo(0)
        table.integer('project_id')
            .notNullable()
            .unsigned()
            .references('project_id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
    })
};

exports.down = async function(knex) {
    await knex.schema
        .dropTableIfExists('tasks')
};
