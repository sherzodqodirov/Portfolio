import Product from "../models/Product.js";

export const productpost= async(req,res)=>{
    try {
        const {productname ,status}=req.body
        
       const product= new Product({
        productname,
        status
       })
       await product.save()
     
       res.status(201).json({
        message:" продукта создан"
       })
      
    } catch (error) {
        res.status(500).json({message: "Ошибка при создании продукта"})
    }
}

export const productget=async(req,res)=>{
    try {
        const allproduct=await Product.find().sort({ createdAt: -1 });
        try {
            res.status(200).json({
              message: "Get all todos successfully.",
              allproduct,
            });
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
export const productgetone=async(req,res)=>{
    try {
        const {id}=req.params
        const oneproduct=await Product.findOne({ _id: id })
        if (!oneproduct) {
            return res.status(404).json({ msg: `No task with id: ${id}` });
          } else {
            res.status(200).json({
              message: "Get a product successfully.",
              oneproduct,
            });
          }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const productupdate=async(req,res)=>{
    try {
        const {id}=req.params
        const product= await Product.findByIdAndUpdate(id,req.body,{new:true, runValidators: true})
        if(!product){
            return res.status(404).json({message:`No todo with id: ${id}`})
        }
        res.status(200).json({
            message:`Product with id: ${id} updated successfully.`,
            product,
        })
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

export const productdelet=async(req,res)=>{
    try {
        const {id}=req.params;
        const product=await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message:`No todo with id: ${id}`})
        }
        res.status(200).json({
            message:`Todo with id: ${id} deleted successfully.`,
            product
        })
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
