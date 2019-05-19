const express = require('express');

const router = express.Router();
// const { authentication } = require('../middlewares');
const {
  addItem,
  getAllItems,
  getItemById,
  deleteItem,
  updateItem,
} = require('../controllers/product');

router.get('/', getAllItems);
router.get('/:id', getItemById);
router.post('/', /* authentication,  */addItem);
router.delete('/:id', /* authentication,  */deleteItem);
router.put('/:id', /* authentication,  */updateItem);

module.exports = router;
