const express = require('express');
const app = express();
const port = process.env.PORT || 300;
app.use(express.json());

app.listen(port,()=>{
    console.log('server started on port '+ port);
});
