const mongoose = require('mongoose')
const Schema = mongoose.Schema

const State = new Schema(
    {
        name:{ type: String, required: true},
        park:[{type: Schema.Types.ObjectId, ref: 'park'}],
    }

)
module.exports = State