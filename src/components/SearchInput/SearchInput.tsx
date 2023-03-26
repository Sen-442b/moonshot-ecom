import React from "react";
import "./search-input.css";
import { SearchInputProps } from "../../types/product.types";
import { debounce } from "../../utils/performance.utils";

export const SearchInput = (props: SearchInputProps) => {
  const { handleSearchInput } = props;
  const debounceSearch = debounce(handleSearchInput, 300);
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search Products"
        onChange={debounceSearch}
      />
    </div>
  );
};
