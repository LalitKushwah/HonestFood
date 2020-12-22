const mongoose = require('mongoose');

module.exports = {
    outletSchema: new mongoose.Schema({
        "type": String, 
        "properties": Object,
        "geometry": Object
    })
};