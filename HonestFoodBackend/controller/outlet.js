const outletService = require('../service/outlet');

module.exports.outlets = async (req, res) => {
    const address = req.query.address;
    if (!address) {
        return res.status(400).send({ status: 400, message: 'Address is mandatory' });
    }
    const response = await outletService.getOutletsList(address);
    res.status(response.status).send(response);
};
