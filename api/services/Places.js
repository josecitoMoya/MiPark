const qs = require('qs');
const { URLAPI, APIKEY } = require("../config");


class placesService {
    static async nearbySearch(q) {
        try {
            const query = qs.stringify(q)
            const { data } = await axios.get(`${URLAPI}/nearbysearch/json?${query}&${APIKEY}`);
            const places = data;
            return places;
        } catch (error) {
            return error;
        }
    }
}