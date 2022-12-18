// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import UserRoute from "./routes/UserRoute.js";
 
// const app = express();
// mongoose.connect('mongodb://localhost:27017/fullstack_db',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });
// const db = mongoose.connection;
// db.on('error', (error) => console.log(error));
// db.once('open', () => console.log('Database Connected...'));
 
// app.use(cors());
// app.use(express.json());
// app.use(UserRoute);
 
// app.listen(5000, ()=> console.log('Server up and running...'));

import express from "express";
import cors from "cors";
import router from "./routes/UserRoute.js";
import bodyParser from 'body-parser';
import db from "./models/index.js";
 
const app = express();

db.sequelize.sync({ force: true }).then(() =>{
    console.log('Drop and ResyncDb')
   
})

app.use(cors());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(router);


app.listen(5000, ()=> console.log('Server up and running...'));

