
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'Ciudad de la cual se quiere obtener el clima',
            demand: true
        }
    }).argv;
    

const getInfo = async (direccion) => {
    try {
        let zoneData = await lugar.getLugarLatLng(direccion);   
        let temp = await clima.getClima(zoneData.lat, zoneData.lng);
        return `El cilma de ${ direccion } es de ${ temp } °C.`;
    } catch (error) {
        return `No se pudo determinar el clima de ${ direccion }.`
    }
};

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);