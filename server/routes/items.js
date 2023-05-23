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
// DELETE /items (to delete the item selected)
router.delete("/:id", async (req, res, next) => {
    await Item.destroy({
       where : {
            id: req.params.id
       }
    })
    const item = await Item.findAll()
    res.json(item)
})

// / DELETE /wiki/:slug
// router.delete("/:slug", async (req, res, next) => {
//   try {
//     await Page.destroy({
//       where: {
//         slug: req.params.slug
//       }
//     });
//     const pages = await Page.findAll();
//     res.send(pages);
//   } catch (error) {
//     next(error);
//   }
// });

//   router.post("/", async (req, res, next) => {
//     try {
//       const [user, wasCreated] = await Item.findOrCreate({
//         where: {
//           name: req.body.name,
//           email: req.body.email
//         }
//       });
//       const page = await Page.create(req.body);
//       await page.setAuthor(user);
//       if(req.body.tags) {
//         const tagArray = req.body.tags.split(' ');
//         const tags = [];
//         for (let tagName of tagArray) {
//           const [tag, wasCreated] = await Tag.findOrCreate({
//             where: {
//               name: tagName
//             }
//           });
//           if (wasCreated) {
//             tags.push(tag);
//           }
//         }
//         await page.addTags(tags);
//       }
//       res.send(page);
//     } catch (error) {
//       next(error);
//     }
//   });
  
module.exports = router;
