const axios = require('axios');

const getClima = async (lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=20c705e92456d6ae17ac3657f968b427&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}