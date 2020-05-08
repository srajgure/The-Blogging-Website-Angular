const mongoose = require('mongoose');
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;


const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    }
       
});

var Articles = mongoose.model('Article', articleSchema);

module.exports = Articles;