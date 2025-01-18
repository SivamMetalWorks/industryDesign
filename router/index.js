let express=require('express')
let router=express.Router()

router.get('/',(req,res)=>{
    res.render('home')
})
router.get('/about-us',(req,res)=>{
    res.render('aboutus')
})
router.get('/gallery',(req,res)=>{
    res.render('gallery')
})
router.get('/services',(req,res)=>{
    res.render('services')
})
router.get('/products',(req,res)=>{
    res.render('products')
})
router.get('/contact',(req,res)=>{
    res.render('contact')
})
module.exports=router