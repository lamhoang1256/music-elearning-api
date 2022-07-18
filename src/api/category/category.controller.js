const Category = require("./category.model");

const categoryControllers = {
  getAllCategory: async (req, res) => {
    try {
      const categories = await Category.find();
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getSingleCategory: async (req, res) => {
    try {
      const category = await Category.findById(req.params.id);
      res.status(200).json(category);
    } catch (error) {
      res.status(500).json(err);
    }
  },

  addNewCategory: async (req, res) => {
    try {
      const newCategory = new Category({
        category: req.body.category,
      });
      const savedCategory = await newCategory.save();
      res.status(200).json(savedCategory);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateCategory: async (req, res) => {
    try {
      const category = Category.findById(req.params.id);
      await category.updateOne({ $set: req.body });
      res.status(200).json("Updated category successfully!");
    } catch (error) {
      res.status(500).json(err);
    }
  },

  deleteCategory: async (req, res) => {
    try {
      await Category.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted category successfully!");
    } catch (error) {
      res.status(500).json(err);
    }
  },
};

module.exports = categoryControllers;
