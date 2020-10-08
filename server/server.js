const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const videoRoutes = require('./routes/videoRoutes');

require('dotenv').config();

app.use(cors());

app.use(express.json());

//allows us to access the videos and images in the server's public directory
app.use(express.static('public'));

app.use('/videos', videoRoutes);

//allows us to access the build in the client directory
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is listening on Port ${PORT}`);
})

