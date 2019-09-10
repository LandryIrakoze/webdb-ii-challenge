const db = require('../../data/db-config');

module.exports = {
    get,
    getById,
    insert,
    update,
    remove
}

function get() {
    return db('sales');
}
function getById(id) {
    return db('sales')
        .where({ id })
        .first()
}
function insert(post) {
    return db('sales')
        .insert(post)
        .then(ids => {
            return getById(ids[0])
        })
}
function update(id, changes) {
    return db('sales')
        .where({ id })
        .update(changes)
}
function remove(id) {
    return db('sales')
        .where('id', id)
        .del()
}
