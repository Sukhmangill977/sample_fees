const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Define routes for student-related operations
router.get('/students', studentController.getAllStudents);
router.get('/students/:id', studentController.getStudentById);
router.post('/students', studentController.createStudent);
router.put('/students/:id', studentController.updateStudent);
router.delete('/students/:id', studentController.deleteStudent);

// Example of adding an additional route
// router.get('/students/:id/fees', studentController.getStudentFees);

module.exports = router;
