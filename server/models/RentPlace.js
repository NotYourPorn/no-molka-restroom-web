const {model, Schema} = require('mongoose')

const rentPlaceSchema = new Schema({
    body : String,
    location : String,
    rent_item : String,
    
})