import express from 'express'

const router = express.Router();


const products = [{
    name : "A_Brief_History_Of_Time",
    category: "Book",
    genre: "science"},
    {
        name : "Black_Holes",
        category : "Book",
        genre : "science"
    }
]

router.get('/products', (req,res) => {
    res.send(products)
});

router.post('/',(req,res) => {
 const product = req.body;
 products.push(product);
//    products.push(product);
   res.send(`${product.category} of ${product.name} has been added to the database`)
})

router.post('/',(req,res) => {

})

export default router;