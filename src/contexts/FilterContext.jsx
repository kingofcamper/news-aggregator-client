import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

const FilterContext = createContext();

export const useFilter = () => {
  return useContext(FilterContext);
};

export const FilterProvider = ({ children }) => {
  const [filterOptions, setFilterOptions] = useState({
    categories: "",
    sources: "",
    keywords: "",
  });

  const handleCategoryFilterChange = (value) => {
    setFilterOptions({ ...filterOptions, categories: value });
  };

  const handleSourceFilterChange = (value) => {
    setFilterOptions({ ...filterOptions, sources: value });
    console.log(
      { ...filterOptions, sources: value },
      "{ ...filterOptions, sources: value }"
    );
  };

  const handleKeywordsFilterChange = (value) => {
    setFilterOptions({ ...filterOptions, keywords: value });
  };

  const contextValue = {
    filterOptions,
    handleCategoryFilterChange,
    handleSourceFilterChange,
    handleKeywordsFilterChange,
  };

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
};

FilterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
