import express from 'express';
import dotenv from 'dotenv';
import expressEjsLayouts from 'express-ejs-layouts';
import pagesRoutes from './routes/pages.js';

// dotenv configuration 
dotenv.config();

// express app initialization

const app = express();

// express support

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(expressEjsLayouts);

// set view engine 

app.set('view engine','ejs');

// set static folder

app.use(express.static('public'))


// port configuration

const PORT = process.env.PORT || 9090;


// Routes 

app.use(pagesRoutes);


// Server listening
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})