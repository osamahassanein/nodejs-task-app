const express = require('express');

const apiRouter = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/tasks',apiRouter);


app.listen(port,()=>{
    console.log('server started on port '+ port);
});
