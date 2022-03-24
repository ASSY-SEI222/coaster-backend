const { model } =  require('mongoose')
const StateSchema = require('./state')
const CoasterSchema = require('./coaster')
const ParkSchema = require('./park')
const ReviewSchema = require('./review')

const State = model('state',StateSchema)
const Coaster = model('coaster',CoasterSchema)
const Park = model('park',ParkSchema)
const Review = model('review',ReviewSchema)

module.exports = {
    State,
    Coaster,
    Park,
    Review,
}