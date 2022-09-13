import { productService } from '../services/product.js'

const duplicateProduct = async (req, res, next) => {
    try {
        const list = await productService.getAll(req.body);
        let duplicate = list.filter((item) => item.product_name.toLowerCase() === req.body.product_name.toLowerCase())
        if(duplicate.length > 0){
            res.status(500).send({params: 'error', message: 'Product already exist in in system!'})
        }else {
            next();
        }
    } catch (error) {
        console.log('error:', error)
    }
}
 
export default duplicateProduct;