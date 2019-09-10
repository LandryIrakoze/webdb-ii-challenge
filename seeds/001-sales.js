// exports.seed = function(knex) {
//   // Deletes ALL existing entries
//   return knex('sales').truncate()
//     .then(function () {
//       // Inserts seed entries
//       return knex('sales').insert([
//         {id: 1, colName: 'rowValue1'},
//         {id: 2, colName: 'rowValue2'},
//         {id: 3, colName: 'rowValue3'}
//       ]);
//     });
// };
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sales').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('sales').insert([
        {Car_Id: 1, Price: 500000, sold: false},
        {Car_Id: 2, Price: 800000, sold: true},
        {Car_Id: 3, Price: 200000, sold: false},
        {Car_Id: 4, Price: 600000, sold: true},
        {Car_Id: 5, Price: 1000000, sold: true}
      ]);
    });
};