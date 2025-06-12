import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="p-4 bg-gray-100 rounded-xl">
      <h2 className="text-xl font-bold mb-2">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center mb-2">
            <span>{item.title}</span>
            <button
             onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item })}
             className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
                Remove
            </button>

          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
