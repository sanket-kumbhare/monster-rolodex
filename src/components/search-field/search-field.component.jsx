import "./search-field.styles.css";

import React from "react";

const SearchField = (props) => {
  return (
    <div>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={props.className}
        onChange={props.onChange}
      />
    </div>
  );
};

export default SearchField;
