const express = require('express');
const router = express.Router();
const Paste = require('../models/Paste');
const shortid = require('shortid');

//post to create a new paste

router.post('/', async (req, res) => {
    const {content} = req.body;  // Corrected line: access 'content' from req.body
    if (!content) {
        return res.status(400).json({ error: 'Content is unavailable' });
    }

    try {
        const newPaste = new Paste({
            content: content,  // Ensure content is passed in the model
            uniqueLink: shortid.generate(),  // Generate a unique link
        });
        await newPaste.save();
        res.status(201).json({
            message: 'Paste Created',
            uniqueLink: newPaste.uniqueLink,
            createdAt: newPaste.createdAt
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to create Paste' });
    }
});


router.get('/:uniqueLink', async (req, res) => { 
    const { uniqueLink } = req.params;  // Access the uniqueLink from the URL parameter
    try {
        const paste = await Paste.findOne({ uniqueLink });  // Find the paste by uniqueLink
        if (!paste) {
            return res.status(404).json({ error: 'Paste not found' });  // If paste not found
        }
        res.json(paste);  // Return the paste data
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to fetch Paste' });
    }
});


module.exports = router;