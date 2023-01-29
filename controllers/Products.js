import { v4 as uuidv4 } from "uuid";
let products = [];
export const showProduct = (req, res) => {
  res.send(products);
};

export const createProduct = (req, res) => {
  const product = req.body;

  const productWithId = { ...product, id: uuidv4() };
  products.push(productWithId);

  res.send(
    `${product.category} of ${product.name} has been added to the database`
  );
};

export const getProduct = (req, res) => {
  const { id } = req.params;
  const foundProduct = products.find((product) => product.id === id);
  res.send(foundProduct);
};

export const deleteProduct = (req, res) => {
  const { id } = req.params;
  products = products.filter((product) => product.id !== id);
  res.send(`Product with id ${id} deleted from database.`);
};

export const updateProduct = (req, res) => {
  const { id } = req.params;

  const { name, category, genre } = req.body;

  const product = products.find((product) => product.id === id);

  if (name) product.name = name;
  if (category) product.category = category;
  if (genre) product.genre = genre;

  res.send(`Product with id ${id} has been updated`);
};
