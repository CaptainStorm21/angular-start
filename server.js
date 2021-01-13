const path = require ('path');
const express = require ('express');
const app = express();

const DIR = './src/app/uploads';

app.use(express.static(DIR));

const PORT = 3500;
app.listen(PORT,()=> console.log('Server is running on' + PORT))