const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./routes');

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/tasks',apiRouter);


app.listen(port,()=>{
    console.log('server started on port '+ port);
});
