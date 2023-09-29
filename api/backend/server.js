const express = require('express');
const cors = require('cors');
const routes = require('../routes/rout'); 
const contactform = require('../routes/contactform'); 

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: 'http://localhost:3000', 
}));
app.use(express.json());
app.use('/api', routes); 
app.use('/api', contactform); 

console.log("I'm from gg");

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});





