const express = require('express');
const router = express.Router();

const Event = require('../models/event');

router.get('/', async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

router.get('/:id', async (req, res) => {
  const event = await Event.findById(req.params.id);
  res.json(event);
});

router.post('/', async (req, res) => {
    const { day,  start, end, description } = req.body;
    const event = new Event({ day, start, end, description });
    await event.save();
    res.json({ status: 'Event saved!' });
});

router.put('/:id', async (req, res) => {
    const { day, start, end, description } = req.body;
    const newEvent = { day, start, end, description };
    await Event.findByIdAndUpdate(req.params.id, newEvent);
    res.json({ status: 'Event updated!'});
});

router.delete('/:id', async (req, res) => {
    await Event.findByIdAndRemove(req.params.id);
    res.json({ status: 'Event deleted!'});
});

module.exports = router;
