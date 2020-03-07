const express = require('express');

const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp
} = require('../controlers/bootcamps');
const router = express.Router();
router
  .route('/')
  .get(getBootcamps)
  .post(createBootcamp);

router
  .route('/:id')
  .get(getBootcamps)
  .put(updateBootcamp)
  .delete(deleteBootcamp);
module.exports = router;
