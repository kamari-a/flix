const express = require('express');
const router = express.Router();
const videoData = require('../data/videos.json');
const {v4: uuidv4} = require('uuid');

// Responds with video data that will inputted in the Next Video section
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

// Responds with an object containing the details of the video with an id of :id. This will be rendered as the Main Video
router.get('/:id', (req, res) => {
    const currentVideoId = req.params.id;
    const currentVideo = videoData.find(video => video.id === currentVideoId);
    if (!currentVideo) {
      return res.status(400).json({message: 'No video with this ID found. Please provide a valid ID'});
    }
    
    res.status(200).json(currentVideo);
});


// Adds a new comment to that specific video
router.post('/:id/comments', (req, res) => {
    const index = videoData.findIndex(video => video.id === req.params.id);

    const newComment = {
        ...req.body,
        id: uuidv4(),
        timestamp: Date.now(),
    }

    videoData[index].comments.push(newComment);
    res.status(201).json(newComment);
});


// Adds a new video from the Upload page to the video list
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

