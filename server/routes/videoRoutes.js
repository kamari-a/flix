const express = require('express');
const router = express.Router();
const videoData = require('../data/videos.json');
const {v4: uuidv4} = require('uuid');

// GET /videos responds with the array of videos that will inputted in the Next Video section
router.get('/', (req, res) => {
    const videoDataCondensed = videoData.map(video => {
        return {
            id: video.id,
            title: video.title,
            channel: video.channel,
            image: video.image
        }
    })
    res.status(200).json(videoDataCondensed);
});


// GET /videos/:id responds with an object containing the details of the video with an id of :id. This will be rendered as the Main Video
router.get('/:id', (req, res) => {
    //accesses the current video through the id params
    const currentVideoId = req.params.id;
    const currentVideo = videoData.find(video => video.id === currentVideoId);
    if (!currentVideo) {
      return res.status(400).json({message: 'No video with this ID found. Please provide a valid ID'});
    }
    
    res.status(200).json(currentVideo);
});


// POST adds a new video from the Upload page to the video list
router.post('/', (req, res) => {
    if (Object.keys(req.body.title).length === 0 || null) {
      	return res.status(400).json({message: 'Please add a title to your video'});
    } else if (Object.keys(req.body.description).length === 0 || null) {
      	return res.status(400).json({message: 'Please add a description to your video'});
    }

    const newVideo = {
		...req.body,
		id: uuidv4(),
		timestamp: Date.now(),
    };
  
    videoData.push(newVideo);
    res.status(201).json(newVideo);
});

module.exports = router;

