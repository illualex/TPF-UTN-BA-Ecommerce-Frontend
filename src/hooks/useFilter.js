import { useState } from "react";

const useFilter = (initialFilters = { hardware: [], geek: [] }) => {
  const [filters, setFilters] = useState(initialFilters);

  const handleCheckboxChange = (category, item) => {
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      const index = newFilters[category].indexOf(item);
      if (index === -1) {
        newFilters[category].push(item);
      } else {
        newFilters[category].splice(index, 1);
      }
      return newFilters;
    });
  };

  return { filters, handleCheckboxChange };
};

export default useFilter;
