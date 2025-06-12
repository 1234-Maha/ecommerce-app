import React, { useEffect, useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import SearchFilter from './components/SearchFilter';
import Pagination from './components/Pagination';
import { useDispatch } from 'react-redux';

const App = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const productsPerPage = 8;
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );
  const paginated = filtered.slice(
    page * productsPerPage,
    (page + 1) * productsPerPage
  );

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">E-Commerce App</h1>
      <SearchFilter onSearch={setSearch} />
      <ProductList
        products={paginated}
        onAddToCart={(item) => dispatch({ type: 'ADD_TO_CART', payload: item })}
      />
      <Pagination
        currentPage={page}
        totalPages={Math.ceil(filtered.length / productsPerPage)}
        onPageChange={setPage}
      />
      <Cart />
    </div>
  );
};

export default App;
