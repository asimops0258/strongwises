const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const port = process.env.BACK_END_PORT || 8080;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(morgan("combined"))
app.use(require('./fs.js').baseDir, express.static('web'));


app.get('/', (req, res) => res.send("Strongwises API"));

require('./mail.js')(app)
require('./newImageLibrary.js')(app)

app.listen(port);
console.log("Server Enable");
console.log("Listen Port:" + port);