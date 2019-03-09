import mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/eventsdatabase', { useNewUrlParser: true });

export { mongoose };