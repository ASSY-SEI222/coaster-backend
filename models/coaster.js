const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Coaster = new Schema(
    {

        rideName:{ type: String, required: true},
        aboutRide:{ type: String, required: true},
        video:{ type: String, required: false},
        image:[{ type: String, required: true}],
        minHeight:{type: Number, required: false},
        ridePeak:{type: String, required: false},
        speed:{type: String, required: false},
        trackLength:{type: String, required: false},
        minHeight:{type: String, required: false},

        park:{type: Schema.Types.ObjectId, ref: 'park'},
        reviews:[{type: Schema.Types.ObjectId, ref: 'review'}]
    },
    { timestamps: true }

)

module.exports = Coaster