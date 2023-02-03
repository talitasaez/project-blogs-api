const express = require('express');

const loginRouter = require('./routers/login');
const userRouter = require('./routers/user');
const categoriesRouter = require('./routers/categories');
const getPostRouter = require('./routers/getPost');

// ...

const app = express();

app.use(express.json());

app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoriesRouter);
app.use('/post', getPostRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
