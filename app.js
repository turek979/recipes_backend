const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// General middlewares
app.use(express.urlencoded({extender: true}));


// Error handling
app.use(errorController.get404);

app.listen(port, () => console.log(`Server is running on port ${port}`));