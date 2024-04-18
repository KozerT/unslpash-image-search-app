import { useState } from "react";
import useAxios from "../../hooks/useAxios";
import useDebounce from "../../hooks/useDebounce";

const IMAGES_PER_PAGE = 6;
const DEBOUNCE_DELAY = 500;

const SearchableList = ({ itemKeyFn, children }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearchTerm = useDebounce(searchTerm, DEBOUNCE_DELAY);

  const { response, isLoading } = useAxios(
    debouncedSearchTerm
      ? `search/photos?query=${searchTerm}&page=1&per_page=${IMAGES_PER_PAGE}&client_id=${
          import.meta.env.VITE_UNSPLASH_API_KEY
        }`
      : null
  );

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (
      e.key === "Backspace" &&
      searchTerm === "" &&
      response &&
      response.length > 0
    ) {
      return;
    }
    if (searchTerm.length === 0 && e.key.length === 1) {
      // Assuming only single character is typed
      return;
    }
  };

  return (
    <div className="searchable-list">
      <input
        type="search"
        value={searchTerm}
        placeholder="Search anything"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

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
    </div>
  );
};

export default SearchableList;
