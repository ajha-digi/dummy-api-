const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
 const PORT = process.env.PORT || 7000

const app = express();
app.use(cors());
dotenv.config({});

app.get('/', (req, res)=>{
    res.json({
        message: "Hello from Express app !!"
    })
})

app.listen(PORT, ()=>{
    console.log(`App running on http://localhost:${PORT}`)
})
