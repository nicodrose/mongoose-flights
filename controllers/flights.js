const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create,
}

async function index(req,res) {
    const flights = await Flight.find({});
    res.render('flights/index', { title: 'Flight List', flights }); 
}

function newFlight(req, res) {
    res.render('flights/new', { title: 'Add a New Flight', errorMsg: ''});
}

async function create(req, res) {
    try{
        await Flight.create(req.body);
        res.redirect('/flights/new');
    } catch (err) {
        console.log(err);
        res.render('flights/new', { errorMsg: error.message });
    }
}
// does error.message need to be written out or can have err.message?
