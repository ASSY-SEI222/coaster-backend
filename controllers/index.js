const State = require('../models/state');
const Coaster = require('../models/coaster');
const Park = require('../models/park');
const Review = require('../models/review');


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

const getAllStates = async (req, res) => {
    try {
        const states = await State.find()
        return res.status(200).json({ states })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createPark = async (req, res) => {
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

const addReview = async (req,res) =>{
    try{

    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
}



module.exports = {
    createState,
    getAllStates,
    createPark,
    addReview
}