const express = require("express");
const router = express.Router();
const { Item } = require("../models/index")

// GET /item
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});
// GET /item by ID
router.get("/:id", async (req, res, next) => {
    try {
      const id = req.params.id
      const items = await Item.findByPk(id);
      res.send(items);
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
