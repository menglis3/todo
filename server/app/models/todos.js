var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var todoSchema = new Schema({ 
    
        user:    {type : Schema.Types.ObjectId } 
    
    })
    