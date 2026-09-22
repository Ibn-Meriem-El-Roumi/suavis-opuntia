import Product from "../models/Product.js";

export async function getAllProducts(req, res){
    try {
        const allProducts = await Product.find({})
        if(allProducts.length > 0){
            return res.status(200).json({data: allProducts})
        }
        return res.status(500).json({msg: "Something Went Wrong"})
    } catch (error) {
        console.error(error);
    }
}

export async function getOneProduct(req, res){
    try {
        const pid = req.params.id
        const foundProduct = await Product.findById(pid)
        if(foundProduct){
            return res.status(200).json({data: foundProduct})
        }
        return res.status(404).json({msg: "NOT_FOUND"})
    } catch (error) {
        console.error(error);
    }
}