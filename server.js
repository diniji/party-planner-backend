const express = require ('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./TaskRoutes');
const cors = require('cors');

require('dotenv').config();
mongoose.set("strictQuery", false);

const PORT = 7000 || process.env.port;

app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log('NOW I AM CONNECTED TO MONGODB'))
.catch((err) => console.log(err))

app.use(routes);

app.listen(PORT, () => {
    console.log(`I AM LISTENING ON PORT ${PORT}`)
})




//user: dinafini
//pass: spKhTuK6Fxga0nGJ
//connection string: mongodb+srv://dinafini:<password>@cluster0.xmspwe6.mongodb.net/?retryWrites=true&w=majority