import React, { useState } from "react";

type SearchProps = {
  onSearch: Function;
};

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [value, setValue] = useState("Apple");
  return (
    <div className="row">
      <div className="column column-80">
        <input
          type="text"
          value={value}
          onChange={(event: any) => {
            setValue(event.currentTarget.value);
          }}
          placeholder="Search for a food item"
        />
      </div>
      <div className="column">
        <button onClick={() => onSearch(value)}>Search</button>
      </div>
    </div>
  );
};

export default Search;
