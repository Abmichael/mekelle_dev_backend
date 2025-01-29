const router = require('express').Router();
const tourismController = require('../controllers/tourismController');

router.get('/', tourismController.list);

module.exports = router;