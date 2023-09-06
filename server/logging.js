const morgan = require('morgan'); // Logging middleware
const app = require('./server'); // Import the Express app

app.use(morgan(':method :url :status :res[content-length] - :response-time ms')); // for logging development purposes
