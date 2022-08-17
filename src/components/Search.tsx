import React from "react";
import "../App.module.scss";

type Props = {};

const Search = (props: Props) => {
  return (
    <div className="box">
      <i className="fa fa-search" aria-hidden="true"></i>
      <input type="text" name="" />
    </div>
  );
};

export default Search;
