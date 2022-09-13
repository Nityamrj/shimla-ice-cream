import { categoryService } from '../services/category.js'

const duplicateCategory = async (req, res, next) => {
    try {
        const list = await categoryService.getAll(req.body);
        let duplicate = list.filter((item) => item.category.toLowerCase() === req.body.category.toLowerCase())
        if(duplicate.length > 0){
            res.status(500).send({params: 'error', message: 'Category already exist in in system!'})
        }else {
            next();
        }
    } catch (error) {
        console.log('error:', error)
    }
}
 
export default duplicateCategory;