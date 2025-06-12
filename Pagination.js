import { Button } from './ui/button';

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-center space-x-2 mt-4">
    {Array.from({ length: totalPages }, (_, i) => (
      <Button
        key={i}
        onClick={() => onPageChange(i)}
        variant={currentPage === i ? 'default' : 'outline'}
      >
        {i + 1}
      </Button>
    ))}
  </div>
);

export default Pagination;
