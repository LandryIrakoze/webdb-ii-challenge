// exports.seed = function(knex) {
//   // Deletes ALL existing entries
//   return knex('cars').truncate()
//     .then(function () {
//       // Inserts seed entries
//       return knex('cars').insert([
//         {id: 1, colName: 'rowValue1'},

//       ]);
//     });
// };
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: 'JTJZB1BA8A2400307', make: 'Pagani', model: 'Huayra', mileage: 500, transmission: 'Manual', titleStatus: 'Clear' },
        {VIN: 'SCFEBBCF0D0016380', make: 'Koenigsegg', model: 'Agera', mileage: 200, transmission: 'NA', titleStatus: 'Import' },
        {VIN: 'ZHWBU16S05LA01662', make: 'Tesla', model: 'Roadster', mileage: 70, transmission: 'Electric', titleStatus: 'Electronic' },
        {VIN: 'SCAZD02CXSCX50159', make: 'Lamborghini', model: 'Aventador', mileage: 900, transmission: 'Automatic', titleStatus: 'Clear' },
        {VIN: 'SCBGS3ZA0D0012891', make: 'Lotus', model: 'Evija', mileage: 10, transmission: 'Electric', titleStatus: 'Clear' }
      ]);
    });
};