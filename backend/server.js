const express = require('express')
const dotenv = require('dotenv');
const bodyParser = require('body-parser')
const config = require('./config')
const mongoose = require('mongoose');
const cors = require('cors')
const app = express()

dotenv.config();
const mongoURL = config.MONGODB_URL

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(() => console.log('DB connected'))

app.use(cors)

app.use(bodyParser.json());
app.use('/api/v1/users', require('./routes/userRoute'))
app.use('/api/v1/products', require('./routes/productRoute'))

// app.get('/api/products', (req, res) => {
//     res.send(data.products)
// })

// app.get('/api/products/:id', (req, res) => {
//     const product = data.products.find(x => x._id === req.params.id);
//     if (product)
//         return res.status(200).json(product)
//     else
//         return res.status(404).json({ msg: 'Product Not Found' })

// })

app.listen(3050, () => { console.log('server started at http://localhost:3050'); })