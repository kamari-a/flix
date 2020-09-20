const express = require('express');
const app = express();
const cors = require('cors');
const videoRoutes = require('./routes/videoRoutes');

require('dotenv').config();

app.use(cors());

app.use(express.json());

//allows us to access the videos and images in the server's public folder
app.use(express.static('public'));

app.use('/videos', videoRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is listening on Port ${PORT}`);
})

