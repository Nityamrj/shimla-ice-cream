import categoryRouter from '../server/src/routers/category.js';
import productRouter from './src/routers/product.js';
import salesmanRouter from './src/routers/salesman.js'
import salesmanBillingRouter from './src/routers/salesmanBilling.js';
import returnSalesmanBillingRouter from './src/routers/returnSalesmanBilling.js';
import partyBookingRouter from './src/routers/partyBooking.js'
import userRouter from './src/routers/user.js';
import contactRouter from './src/routers/contact.js';
import express from 'express';

const baseRouter = express.Router()

baseRouter.use(categoryRouter)
baseRouter.use(productRouter)
baseRouter.use(salesmanRouter)
baseRouter.use(salesmanBillingRouter)
baseRouter.use(returnSalesmanBillingRouter)
baseRouter.use(partyBookingRouter)
baseRouter.use(userRouter)
baseRouter.use(contactRouter)

export default baseRouter;  
