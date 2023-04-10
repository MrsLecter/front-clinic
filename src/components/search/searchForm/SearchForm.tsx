import React from "react";
import Image from "next/image";
import classes from "./SearchForm.module.css";

interface ISearchFormProps {
  searchInput: string;
  setSearchInput: (input: string) => void;
  handleSearch: () => void;
}

const SearchForm: React.FC<ISearchFormProps> = ({
  searchInput,
  setSearchInput,
  handleSearch,
}) => {
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <form
      className={classes.searchForm}
      name="search-form"
      onSubmit={(e) => handleFormSubmit(e)}
    >
      <button onClick={() => handleSearch()} type="submit">
        {isLoading ? (
          <Image
            width={30}
            height={30}
            src="/icons/loader.gif"
            alt="search-icon.svg"
          />
        ) : (
          <Image
            width={30}
            height={30}
            src="/icons/search.svg"
            alt="search-icon.svg"
          />
        )}
      </button>
      <input
        onChange={(e) => setSearchInput(e.target.value)}
        type="text"
        placeholder={!!searchInput ? searchInput : "Search..."}
        name="search"
        maxLength={300}
      />
    </form>
  );
};

export default React.memo(SearchForm);
