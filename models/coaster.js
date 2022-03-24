const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Coaster = new Schema(
    {
        name:{ type: String, required: true},
        description:{ type: String, required: true},
        video:{ type: String, required: false},
        picture:[{ type: String, required: true}],
        maxHeight:{type: Number, required: false},
        location: {type : String, required: true},
        park:{type: Schema.Types.ObjectId, ref: 'park'},
        reviews:[{type: Schema.Types.ObjectId, ref: 'review'}]
    },
    { timestamps: true }

)

module.exports = Coaster