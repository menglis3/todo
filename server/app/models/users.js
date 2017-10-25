var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var UserSchema = new Schema({
        //user: {type: Schema.Types.ObjectId, Required: true},
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        status: { type: Boolean, default: true },
        email: { type: String, required: true, unique: true },
        password: { type: String },
        dataRegistered: { type: Date, default: Date.now },
});

/* UserSchema.virtual('fullName')
.get(function () {
    return this.firstName + ' ' + this.lastName;
});
*/

module.exports = 
Mongoose.model('User', UserSchema);
