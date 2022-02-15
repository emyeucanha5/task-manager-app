const express = require('express');
const app = express();
const task = require('./routes/task' );
const connectDB = require('./db/connect');
const notFound = require('./middleware/notFound');
const errorHandlerMiddleware = require('./middleware/error-handler')
require('dotenv').config();


app.use(express.static('./public'));

app.use(express.json());

app.use('/api/v1/tasks',task);
app.use("*",notFound);
app.use(errorHandlerMiddleware);
// console.log(task.route('/api/v1/tasks'));
const start = async() => {
    try {
        await connectDB(process.env.MONGO_URL);
        console.log('Connected to the DB');
        app.listen(process.env.PORT || 3000, (req,res) => {
            console.log('This server is listening on port ' + port);
        });

    } catch (error) {
        console.log(error);
    }
}
const port = 3000;

start();