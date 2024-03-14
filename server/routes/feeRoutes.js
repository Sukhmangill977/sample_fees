const express = require('express');
const router = express.Router();
const feeController = require('../controllers/feeController');

// Define routes for fee-related operations
router.get('/fees', feeController.getAllFees);
router.get('/fees/:id', feeController.getFeeById);
router.post('/fees', feeController.createFee);
router.put('/fees/:id', feeController.updateFee);
router.delete('/fees/:id', feeController.deleteFee);

module.exports = router;
