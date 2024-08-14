const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');

const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');
const likeRoutes = require('./routes/likeRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/api', userRoutes);
app.use('/api', postRoutes);
app.use('/api', commentRoutes);
app.use('/api', likeRoutes);

sequelize.sync()
    .then(result => {
        console.log('Database synced');
        app.listen(3000);
    })
    .catch(err => console.log(err));
