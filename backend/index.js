const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const PasteRoutes = require('./routes/pasteRoutes');
const demoRoutes = require('./routes/demoRoutes');

const app = express();

app.use(cors()); // Allow requests from any origin
app.use(express.json());

mongoose.connect('mongodb+srv://krishukajwe:krishu%40123@cluster0.r2dsm.mongodb.net/Pastebin?retryWrites=true&w=majority&appName=Cluster0', {
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.log('MongoDB connection error: ', err));
app.use('/api/demo', demoRoutes);
app.use('/api/paste', PasteRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});