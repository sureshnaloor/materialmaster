const express = require('express');
const connectDB = require('./config/db');
var cors= require('cors')

// routes

const matcodes = require('./routes/api/matcodes')

const xlsToJson = require('xls-to-json');

const app = express();
app.use(express.json({ extended: false }));

// const router = express.Router()


// models import - now not necessary since shifted to routes/api
// const Matmaster = require('./models/Matcodes');
// app.use("/api",router);

connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// server start up 

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`listening on port ${port}`))

// excelent package in npm for this... but with csv import thi is sort of meaningless

// xlsToJson(
//   {
//     input: 'Input.xlsx',
//     output: 'output.json',
//     sheet: 'Sheet1'
//   },
//   (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('converted');
//     }
//   }
// );

app.get('/', (req, res) => res.send('Hello World!'))

// use Routes
app.use('/api/matcodes', matcodes);

// app.get('/test', (req, res) => res.json({msg: "Hi testing"}) )

// GET /api/matcodes
// description: Get all Matcodes
// access: Public
// app.get('/matcodes', (req, res) => {
//     try{
//         Matmaster.find()        
//             .then(matcodes => res.json(matcodes))
//     }catch(err){
//         console.error(err.message)
//     }    
// });

// @route GET api/books/:id
// @description Get single book by id
// @access Public


