const courseControllers = require("./course.controller");
const router = require("express").Router();

router.post("/", courseControllers.addNewCourse);
router.get("/", courseControllers.getAllCourse);
router.get("/:id", courseControllers.getSingleCourse);

module.exports = router;
