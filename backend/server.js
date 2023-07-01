import express from 'express';
import stripe from 'stripe';
import cors from 'cors';
import { redirect } from 'react-router-dom';

const app = express();
app.use(cors());
const port = 5000;
app.listen(port, () => {
  console.log(`Serwer uruchomiony na porcie ${port}`);
});



app.use(express.static("public"));
app.use(express.json());
const DOMAIN = 'http://adambensari.com/vite/';
app.post('/test', async (req, res) => {
  try{
  const productList = req.body; // Odbierz listę produktów przesłanych w ciele żądania
  const session = await stripe('sk_test_51NIVAXDdrSDRFqJPgaxIRMnbIvSDLoZLlLhdK9K87qNs0UWAYpm5MBcGuK5pfGVx3Tg5u8kTyBb90yHtXuFpK6sz00PfFnXjUr').checkout.sessions.create({
    line_items: 
      productList.map((key)=>{
        return(
          {
            price: key.id,
            quantity: key.quantitty,
          }
        );
      })
    ,
    mode: 'payment',
    success_url: `${DOMAIN}?success=true`,
    cancel_url: `${DOMAIN}?canceled=true`,
  });
  res.json({ sessionId: session.id }); 
  console.log(productList);
}
catch{
  redirect(DOMAIN);
}});
