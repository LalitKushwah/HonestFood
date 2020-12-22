const connectionManger = require('../connection-manager');
const mongoose = require('mongoose');
const OutletSchema = require('../model/outlet');
const axios = require('axios');

const OutletModel = mongoose.model('FeatureCollection', OutletSchema.outletSchema, 'FeatureCollection');

module.exports.getOutletsList = async (address) => {
    const responseObj = {};
    const con = await connectionManger.establishConnection();
    if (con.connection) {
        const geoCode = await axios.get(`https://api.opencagedata.com/geocode/v1/json?key=71e7c10c317345af9fd11c6fe138f5c2&q=${address}`);
        const { lat, lng } = geoCode.data.results[0].bounds.northeast;
        const response = await OutletModel.find({ 'geometry': { $geoIntersects: { $geometry: { "type": "Point", "coordinates": [lng, lat] } } } });
        if (response) {
            responseObj.status = 200;
            responseObj.body = response;
        } else {
            responseObj.status = 403;
            responseObj.message = 'Not found';
        }
    } else {
        responseObj.status = 500;
        responseObj.message = 'Problem while connection with database';
    }
    return responseObj;
};

