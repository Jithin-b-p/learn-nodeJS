import Product from "../models/product.model.mjs";

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ status: "failure", message: "error.message" });
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ status: "failure", message: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ status: "failure", message: error.message });
  }
};

const updateProductById = async (req, res) => {
  const { id } = req.params;
  // this will return the product that get updated.
  const product = await Product.findByIdAndUpdate(id, req.body);

  if (!product) {
    return res
      .status(404)
      .json({ status: "failure", message: "product not present!" });
  }

  const updatedProduct = await Product.findById(id);

  res.status(200).json(updatedProduct);
};

const deleteProductById = async (req, res) => {
  const { id } = req.params;

  const product = await Product.findByIdAndDelete(id);

  if (!product) {
    return res
      .status(404)
      .json({ status: "failure", message: "Product not present!!" });
  }

  res
    .status(200)
    .json({ status: "success", message: "Prduct deleted successfully!" });
};

export {
  getAllProducts,
  createProduct,
  getProductById,
  updateProductById,
  deleteProductById,
};
