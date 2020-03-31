'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MusicSchema extends Schema {
  up () {
    this.create('music', (table) => {
      table.increments()
      table.string('name', 80).notNullable().unique()
      table.string('singer', 60)
      table.string('producer', 80)
      table.integer('time').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('music')
  }
}

module.exports = MusicSchema
