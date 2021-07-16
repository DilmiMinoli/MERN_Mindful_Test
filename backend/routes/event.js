const router=require("express").Router();
const { addEvent, getAllEvents } = require('../controllers/event');

router.post('/addevent', addEvent);
router.get('/getevent', getAllEvents);

 module.exports = router;  