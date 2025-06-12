const SearchFilter = ({ onSearch }) => (
    <input
      type="text"
      placeholder="Search products..."
      onChange={(e) => onSearch(e.target.value)}
      className="border rounded p-2 w-full mb-4"
    />
  );
  
  export default SearchFilter;
  