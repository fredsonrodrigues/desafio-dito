import mongoose = require('mongoose');

mongoose.connect('mongodb://dito-user:a1b2c3d4@ds012889.mlab.com:12889/dito-database', { useNewUrlParser: true });
var db = mongoose.connection;

export { db };