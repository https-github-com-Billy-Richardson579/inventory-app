const express = require("express");
const router = express.Router();
const { Item } = require("../models/index")

router.use(express.json())
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
// POST /item (to add an item)
router.post("/", async (req, res, next) => {
    const item = await Item.findOrCreate({
        where:{
            title: req.body.title,
            price: req.body.price,
            description: req.body.description,
            category: req.body.category,
            image: req.body.image
        }
    })
    res.json(item)
})
// DELETE /items (to delete the item by ID)
router.delete("/:id", async (req, res, next) => {
    await Item.destroy({
       where : {
            id: req.params.id
       }
    })
    const item = await Item.findAll()
    res.json(item)
})
// UPDATE /items (to update the item by ID)
router.put("/:id", async (req, res, next) => {
 const item = await Item.update(req.body, {
  where:{
   id: req.params.id
  }
 })
 res.json(item)
})

module.exports = router;

