import React from "react";
import classes from "./Search.module.css";
import { SEARCH_PARAMS } from "../../../constants";
import { useState } from "react";
import CheckboxContainer from "./checkboxContainer/CheckboxContainer";
import SearchForm from "./searchForm/SearchForm";
import { useRouter } from "next/router";

const Search: React.FC = () => {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState<string>("");
  const [option, setOption] = useState<string>("City");

  const searchHandler = () => {
    router.replace("/", `?type=${option}&search=${searchInput}`);
  };

  return (
    <div className={classes.searchContainer}>
      <SearchForm
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearch={searchHandler}
      />
      <CheckboxContainer
        option={option}
        params={SEARCH_PARAMS}
        optionChangeHandler={setOption}
      />
    </div>
  );
};

export default Search;
