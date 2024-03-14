const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

// Define routes for payment-related operations
router.post('/payments', paymentController.makePayment);
router.get('/payments/:id', paymentController.getPaymentReceipt);

module.exports = router;
