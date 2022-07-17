const userControllers = require("./user.controller");
const router = require("express").Router();

router.get("/", userControllers.getAllUser);
router.get("/:id", userControllers.getSingleUser);
router.put("/:id", userControllers.updateUser);
router.delete("/:id", userControllers.deleteUser);

module.exports = router;
