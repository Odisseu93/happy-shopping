class ProductController {
  static async getByCode(req, res) {
    const { code } = req.params;
    const productRes = await fetch(`https://dummyjson.com/products/${code}`);
    const json = await productRes.json();
    const product = json;

    if (product) console.log(product);
    res.render('purchase', { product });
  }

  static async getAll(req, res) {
    const productsRes = await fetch('https://dummyjson.com/products');
    const json = await productsRes.json();
    const { products } = json;

    res.render('home', { products });
  }
}

export default ProductController;
