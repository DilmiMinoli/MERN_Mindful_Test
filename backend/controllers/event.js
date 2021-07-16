const router = require("express").Router();
const Event = require('../models/event');

//add event
exports.addEvent = (req, res) => {
    const {
      title, date, description,venue,time
    } =req.body;
 
    const event = new Event({
        title,
        date,
        description,
        venue,
        time,
  
    });
  event.save(((error, event) => {
        if (error) {
            console.log(error);
            return res.status(400).json({ error });
        }
        if (event) {
            res.status(201).json({event});
        }
    }));
  };

  //getAll Events
  exports.getAllEvents = (req, res) => {
    const name = req.query.name;
  
    console.log('name'+ name);
    var condition = name ? { username: { $regex: new RegExp(name), $options: "i" } } : {};
  
    Event.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };