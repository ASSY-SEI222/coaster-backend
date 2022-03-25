// const { State, Coaster, Park, Review } = require('../models/index');
const { Coaster, Park, Review } = require('../models/');

// const Coaster = require('../models/coaster.js');
// const Park = require('../models/park');
// const Review = require('../models/review');


const createState = async (req, res) => {
    try {
        const state = await new State(req.body)
        await state.save()
        return res.status(201).json({
            state,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllCoasters = async (req, res) => {
    try {
        const coasters = await Coaster.find()
        return res.status(200).json({ coasters })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find()
        return res.status(200).json({ reviews })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getAllParks = async (req, res) => {
    try {
        const parks = await Park.find()
        return res.status(200).json({ parks })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createPark = async (req, res) => {
    try {
        const park = await new Park(req.body)
        await park.save()
        return res.status(201).json({
            park,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const createCoaster = async (req, res) => {
    try {
        const coaster = await new Coaster(req.body)
        await coaster.save()
        return res.status(201).json({
            coaster,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const addReview = async (req,res) =>{
    try{
        const { id } = req.params
        const rev = await new Review(req.body)
        await rev.save()
        const cost = await Coaster.findById(id)

        if(cost){
            cost.reviews.push(rev)
            cost.save()
            return res.status(200).send(`Added Review to ${cost.rideName}`)
        }
            return res.status(404).send('Coaster with the specified ID does not exist');
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
}



module.exports = {
    createState,
    getAllCoasters,
    createPark,
    addReview,
    getAllParks,
    createCoaster,
    getAllReviews
}