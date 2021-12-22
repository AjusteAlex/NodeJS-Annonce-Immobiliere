const express = require('express');
const app = express();
var cors = require('cors');

const port = 3000;

const advantageRouter = require('./routes/advantage.router');
const keywordRouter = require('./routes/keyword.router');
const propertyRouter = require('./routes/property.router');
const advertisementRouter = require('./routes/advertisement.router');
const userRouter = require('./routes/user.router');
const roleRouter = require('./routes/role.router');

app.use(express.json());
app.use(cors());

app.use('/advantages', advantageRouter);
app.use('/keywords', keywordRouter);
app.use('/properties', propertyRouter);
app.use('/advertisements', advertisementRouter);
app.use('/users', userRouter);
app.use('/roles', roleRouter);

app.listen( port, () => {})

module.exports = app