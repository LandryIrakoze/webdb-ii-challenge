
exports.up = function(knex) {
  return knex.schema
    .createTable('cars', tbl => {
        tbl.increments();
        tbl
            .string('VIN', 17)
            .unique()
            .notNullable();
        tbl
            .string('make', 128)
            .notNullable();
        tbl
            .string('model', 128)
            .notNullable();
        tbl
            .decimal('mileage')
            .notNullable();
        tbl.string('transmission', 128);
        tbl.string('titleStatus', 128);
    })
    .createTable('sales', tbl => {
        tbl.increments();
        tbl.integer('Car_Id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('cars');
        tbl.integer('price')
            .unsigned()
            .notNullable();
        tbl.boolean('sold')
            .notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('sales')
    .dropTableIfExists('cars')
};
