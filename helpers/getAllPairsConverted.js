const axios = require('axios');


const allPairs = [
    {
        name: 'EUR-USD',
        base: 'EUR',
        cotiza: 'USD',
        rate: ''
    },
    {
        name: 'EUR-ARS',
        base: 'EUR',
        cotiza: 'ARS',
        rate: ''
    },
    {
        name: 'USD-ARS',
        base: 'USD',
        cotiza: 'ARS',
        rate: ''
    },
    {
        name: 'EUR-BRL',
        base: 'EUR',
        cotiza: 'BRL',
        rate: ''
    },
    {
        name: 'USD-BRL',
        base: 'USD',
        cotiza: 'BRL',
        rate: ''
    },
    {
        name: 'BRL-ARS',
        base: 'EUR',
        cotiza: 'USD',
        rate: ''
    },
]

const getAllPairsConverted = async () => {

    //obtener todas las divisas con base EUR
    const response = await axios.get(process.env.API_URL, {
        params: {
            access_key: process.env.API_KEY
        }
    });

    allPairs.map((par) => {
        par.rate = ((1 / response.data.rates[par.base]) * response.data.rates[par.cotiza]).toFixed(4);
    })
    return allPairs;

}

module.exports = getAllPairsConverted;