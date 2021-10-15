/** @format */

const Place = require("../../models/Rent/Place");
const City = require("../../models/Rent/City");

module.exports = {
  Query: {
    places: async (_, { id }) => {
      return await Place.findOne({ _id: id });
    },
    cities: async (_, { name }) => {
      return await City.find({ name: { $regex: name } });
    },
  },
  City: {
    async places(_, __) {
      const places = await Place.find();
      return places.filter((place) => {
        return place.cityId === _.id;
      });
    },
  },
  Place: {
    async cities(_, __) {
      const cities = await City.find();
      return cities.filter((city) => {
        return city.id === _.cityId;
      });
    },
  },
};
