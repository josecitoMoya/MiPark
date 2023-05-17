const qs = require('qs');
const { URLAPI, APIKEY } = require("../config");
const optionsStaticMap = {
    size: "512x512",
    maptype: "roadmap",
}


class MapStaticService {
    static async mapStaticParkings(latitudes,longitudes) {
        try {
            const queryMap = qs.stringify(optionsStaticMap);
            const marcadores = latitudes.map((lat, index) => `&markers=color:red%7Clabel:${index + 1}%7C${lat},${longitudes[index]}`).join('');
            const { data } = await axios.get(`${URLAPI}/staticmap?${queryMap}/`)
        } catch (error) {
            
        }

    }
}