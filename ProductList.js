import { Card } from './ui/card';

const ProductList = ({ products, onAddToCart }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
    {products.map((product) => (
      <Card key={product.id} className="p-4">
        <Card>
          <img src={product.image} alt={product.title} className="h-40 mx-auto" />
          <h2 className="text-lg font-bold mt-2">{product.title}</h2>
          <p className="text-sm">${product.price}</p>
          <button
            onClick={() => onAddToCart(product)}
            className="mt-2 w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Add to Cart
          </button>

        </Card>
      </Card>
    ))}
  </div>
);

export default ProductList;
