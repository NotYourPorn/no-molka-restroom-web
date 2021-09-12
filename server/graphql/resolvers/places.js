// // query for rent service

// const Place = require('../../models/Rent/Place');
// const cities = require('./cities');

// module.exports = {
//     Query : {
//         places : async (_, __) => {
//             return places = await Place.find();
//         }
//     },
//     Place : {
//         city : async (parent, __) => {
//             return cities.find(city => city.id == parent.cityId);
//         }
//     }         
// }

// // ! city에서는 city와 place의 cityId 가 같은 것들 반환 (place는 여러개)
// // ! Place에서도 city의 id와 place의 cityId가 같은 것들 반환 (city는 하나)