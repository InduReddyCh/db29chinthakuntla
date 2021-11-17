var ball = require('../models/ball');
// List of all balls
exports.ball_list = function (req, res) {
    res.send('NOT IMPLEMENTED: ball list');
};
// for a specific ball.
exports.ball_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await ball.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle ball create on POST.
exports.ball_create_post = async function (req, res) {
    console.log(req.body)
    let document = new ball();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"bColor":"Red", "bShape":"Circle", "bSize":20}
    document.bColor = req.body.bColor;
    document.bShape = req.body.bShape;
    document.bSize = req.body.bSize;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle ball delete on DELETE.
exports.ball_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await ball.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle ball update form on PUT.

exports.ball_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await ball.findById(req.params.id)
        // Do updates of properties
        if (req.body.bColor) toUpdate.bColor = req.body.bColor;
        if (req.body.bShape) toUpdate.bShape = req.body.bShape;
        if (req.body.bSize) toUpdate.bSize = req.body.bSize;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};

// List of all balls
exports.ball_list = async function (req, res) {
    try {
        theball = await ball.find();
        res.send(theball);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.ball_view_all_Page = async function (req, res) {
    try {
        theball = await ball.find();
        res.render('ball', {
            title: 'ball Search Results',
            results: theball
        });
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
