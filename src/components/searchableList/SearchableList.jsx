import { useState } from "react";
import { useRef } from "react";
import useAxios from "../../hooks/useAxios";
import useDebounce from "../../hooks/useDebounce";

const IMAGES_PER_PAGE = 1;
const DEBOUNCE_DELAY = 500;

const SearchableList = ({ itemKeyFn, children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchInput = useRef(null);

  const debouncedSearchTerm = useDebounce(searchTerm, DEBOUNCE_DELAY);

  const { response, isLoading } = useAxios(
    debouncedSearchTerm
      ? `search/photos?query=${searchTerm}&page=1&per_page=${IMAGES_PER_PAGE}&client_id=${
          import.meta.env.VITE_UNSPLASH_API_KEY
        }`
      : null
  );

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(searchInput.current.value);
  };

  return (
    <form className="searchable-list" onSubmit={handleSearch}>
      <div className="searchable-list-input-container">
        <input
          type="search"
          ref={searchInput}
          placeholder="Search anything"
          className="searchable-list-input"
        />
        <button type="submit" className="searchable-list-button-submit">
          Search
        </button>
      </div>
      <ul>
        {isLoading && <p>Loading...</p>}
        {!isLoading && response && (
          <ul>
            {response.map((item) => (
              <li key={itemKeyFn(item)}>{children(item)}</li>
            ))}
          </ul>
        )}
      </ul>
    </form>
  );
};

export default SearchableList;
