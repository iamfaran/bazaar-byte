export const getAllProducts = async (req, res) => {
  // for now I am just testing this route
  // so just send a response with a message that allProducts route is working
  res.json({ message: "All Products route is working" });
};
