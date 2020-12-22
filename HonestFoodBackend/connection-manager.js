const mongoose = require('mongoose');

module.exports = {
    establishConnection: async () => {
        let connection = {};
        try {
            const conn = await mongoose.connect('mongodb+srv://test:test@cluster0.oz14y.mongodb.net/honestfood?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
            connection.connection = conn;
        } catch (err) {
            console.log('connection manager ', err);
            connection.connection = null;
        }
        return connection;   
    }
}