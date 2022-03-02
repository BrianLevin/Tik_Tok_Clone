import express from "express";
import mongoose from "mongoose";
import Data from "./data.js";
import Videos from "./dbModel.js";


// app config
const app = express();

const port = 9000;

// middlewares
app.use(express.json())
//DB config
const connection_url = 'mongodb+srv://bml202290:Indeed123!@cluster0.bx4im.mongodb.net/tiktokdb?retryWrites=true&w=majority'
mongoose.connect(connection_url, {
 
});
// api endpoints

app.get("/", (req, res) => res.status(200).send("Hello World"));


app.get('/v1/posts', (req, res) => res.status(200).send(Data))

app.post('/v2/posts', (req,res) => {

    //POST request is to ADD data to data base
    // It will let us ADD a video Document to the videos COLLECTION
    const dbVideos = req.body;

    Videos.create(dbVideos, (err, data) =>{
        if(err) {
            res.status(500).send(err)
        } else{
            res.status(201).send(data)
        }
    })
})
// listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));