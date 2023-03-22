const express = require('express')
const router = express.Router()
const employeeController = require('../controller/user.controller');

// Route starts with http://localhost:3000/users

// Blocks users by ids
router.put('/block', employeeController.block)
// Unblocks users by ids
router.put('/unblock', employeeController.unblock)
// Retrieve paginated employees
router.get('/', employeeController.findPaginated);
// Retrieve all employees
router.get('/all', employeeController.findAll);
// Retrieve a single employee with id
router.get('/:id', employeeController.findById);
//
router.get('/', employeeController.getAuth);
// Update a employee with id
router.put('/:id', employeeController.update);
// Delete a employee with id
router.delete('/', employeeController.delete);
module.exports = router