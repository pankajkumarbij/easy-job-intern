const express = require('express');
const router = express.Router()

const Category = require('../models/Category')
const slugify = require('slugify')

// get all categories   GET Request             public
router.get('/all',(req,res)=>{
    Category.find({}).exec((err,data)=>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }
        res.json(data)
    })
})

// Create Category      POST Request            Admin Only
router.post('/',(req,res)=>{
    const {name} = req.body;
    let slug = slugify(name).toLowerCase()
    
    let category = new Category({name,slug})

    category.save((err,data)=>{
        if(err){
            return res.status(400).json(
                        { error:err }
                    )
        }
        res.json(data)
    })
})

// get single Category      GET Request         public
router.get('/:slug',(req,res)=>{
    const slug = req.params.slug.toLowerCase()
    Category.findOne({slug}).exec((err,category)=>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }
        res.json({category})
    })
})

// delete Category          DELETE Request      Admin only
router.delete('/:slug',(req,res)=>{
  const slug = req.params.slug.toLowerCase()
  
  Category.findOneAndDelete({slug},(err,docs)=>{
      if(err){
          return res.status(400).json({error:err})
      }
      res.json({message:"Deleted the Category Successfully"})
  })
})


module.exports = router;