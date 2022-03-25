const express = require('express');
const routes = require('./routes');
const db = require('./db');
const { State, Coaster, Park, Review } = require('./models')
const bodyParser = require('body-parser');
const cors =require('cors')

app.use(express.static(`${__dirname}/client/build`))

const corsOptions ={
    origin:'localhost:3000', 
    credentials:true,            
    
    optionSuccessStatus:200
}





// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json())


// app.use() middleware here ^ ///////////////////


app.use('/api', routes);
app.use(cors(corsOptions))


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
   })

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))