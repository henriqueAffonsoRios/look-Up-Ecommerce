const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const auth = require('../middlewares/cartAuth')

router.get('/', mainController.index);

router.get('/carrinho',auth, mainController.carrinho);

router.post('/carrinho/:id',auth, mainController.cartCreate);

router.get('/pagamento', mainController.paymentMethod);

router.get('/pagamento/confirmacao', mainController.addressConfirme);

router.get('/detalhe', mainController.detail);

router.get('/detalhe/:id', mainController.detailProduct);


module.exports = router;