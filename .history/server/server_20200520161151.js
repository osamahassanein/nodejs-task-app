const express = requier('express');
const app = express();
const port = process.env.port || 300;
app.use(express.json());

app.listen(port,()=>{
    console.log('server started');
});
