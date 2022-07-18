const Course = require("./course.model");

const courseControllers = {
  addNewCourse: async (req, res) => {
    try {
      const newCourse = new Course({
        courseName: req.body.courseName,
        description: req.body.description,
        thumbnail: req.body.thumbnail,
        thumbnailVideo: req.body.thumbnailVideo,
        previewVideo: req.body.previewVideo,
        price: req.body.price,
        author: req.body.author,
        students: req.body.students,
        benefits: req.body.benefits,
      });
      const savedCourse = await newCourse.save();
      res.status(200).json(savedCourse);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getAllCourse: async (req, res) => {
    try {
      const courses = await Course.find();
      res.status(200).json(courses);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getSingleCourse: async (req, res) => {
    try {
      const course = await Course.findById(req.params.id);
      res.status(200).json(course);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = courseControllers;
