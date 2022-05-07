const express = require('express');
const router = express.Router();

const coursesController = require('../app/controllers/CoursesController');

//[GET]
router.get('/create', coursesController.create);
router.get('/:slug', coursesController.show);
router.get('/:id/edit', coursesController.edit);
router.get('/', coursesController.index);

//[POST]
router.post('/store', coursesController.store);

//[PUT]
router.put('/:id/', coursesController.update);

//[DELETE]
router.delete('/:id/', coursesController.delete);

module.exports = router;
