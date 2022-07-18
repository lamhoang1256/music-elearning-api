const router = require("express").Router();
const categoryControllers = require("./category.controller");

router.get("/", categoryControllers.getAllCategory);
router.get("/:id", categoryControllers.getSingleCategory);
router.post("/", categoryControllers.addNewCategory);
router.put("/:id", categoryControllers.updateCategory);
router.delete("/:id", categoryControllers.deleteCategory);

module.exports = router;
