const express = require('express');
const connectDB = require('./config/db');

// routes

const matcodes = require('./routes/api/matcodes');
const vendors = require('./routes/api/vendors');
const valstock = require('./routes/api/valstock');
const completestock = require('./routes/api/completestock');
const matdocs = require('./routes/api/matdocs');
const matpurchases = require('./routes/api/matpurchases');

// const xlsToJson = require('xls-to-json');

const app = express();

// const router = express.Router()
// models import - now not necessary since shifted to routes/api
// const Matmaster = require('./models/Matcodes');
// app.use("/api",router);

connectDB();

// cors
var cors = require('cors')
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// server start up 

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`listening on port ${port}`))

app.get('/', (req, res) => res.send('Hello World!'))

// use Routes
app.use('/api/matcodes', matcodes);
app.use('/api/vendors', vendors);
app.use('/api/valstock', valstock);
app.use('/api/completestock', completestock);
app.use('/api/matdocs', matdocs);
app.use('/api/matpurchases', matpurchases)