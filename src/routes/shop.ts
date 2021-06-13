import { Router } from 'express';
import * as shopController from '../controllers/shop';
import isAuth from '../middleware/is-auth';

const router = Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', isAuth as any, shopController.getCart);

router.post('/cart', isAuth as any, shopController.postCart);

router.post('/cart-delete-item', isAuth as any, shopController.postCartDeleteProduct);

router.get('/checkout', isAuth as any, shopController.getCheckout);

router.post('/create-order', isAuth as any, shopController.postOrder);

router.get('/orders', isAuth as any, shopController.getOrders);

router.get('/orders/:orderId', isAuth as any, shopController.getInvoice);

export default router;
