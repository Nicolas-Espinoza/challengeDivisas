const getAllPairs = require('../../helpers/getAllPairsConverted');

const pairsController = {

    getPairs: async (req, res) => {
        const allPairs = await getAllPairs();
        if (!allPairs)
            return res.status(400).json({ success: false });


        const response = allPairs.map((par) => {
            return {
                par: par.name,
                rate: par.rate
            }
        })
        return res.status(200).json({ success: true, response })
    }
}

module.exports = pairsController;