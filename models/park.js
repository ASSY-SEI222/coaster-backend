const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Park = new Schema(
    {
        name:{ type: String, required: true},
        description:{ type: String, required: false},
        picture:[{ type: String, required: true}],
        location: {type : String, required: true},
        reviews:[{type: Schema.Types.ObjectId, ref: 'review'}],
        coaster:[{type: Schema.Types.ObjectId, ref: 'coaster'}]
    },
    { timestamps: true }
)

module.exports = Park