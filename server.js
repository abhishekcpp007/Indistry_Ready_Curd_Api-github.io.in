//const express = require('express');
//const app = express();

// Your route handlers and other middleware configurations would go here

const app =require('./app')
const PORT =process.env.PORT || 6000
app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`)
})
