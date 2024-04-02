
require('dotenv').config();
const express = require('express');
const cors = require('cors')
const merchandiseMap = require('./merchandise');
const createLineItems = require('./lineItems')


// Create an instance of express
const app = express();
app.use(express.json());
app.use(cors())


const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)


console.log(merchandiseMap)
// Define routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/create-checkout-session', async(req,res)=>{
const items = req.body.items

console.log(`${process.env.PORT_SERVER}/success.html`)
   const session = await stripe.checkout.sessions.create(
    {
        payment_method_types : ['card'],
        mode : 'payment',
        line_items : createLineItems(items, merchandiseMap),
        success_url : `${process.env.PORT_CLIENT}/success.html`,
        cancel_url :  `${process.env.PORT_CLIENT}/cancel.html`
    }
   )
    res.send({url:session.url}) 
})

// Start the server
const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
