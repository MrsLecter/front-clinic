import {
  StyledCheckboxContainer,
  StyledSearchContainer,
} from "./Search.styles";
import searchIcon from "../../../public/icons/search.svg";
import Image from "next/image";
import { SEARCH_PARAMS } from "../../../constants";
import { TSearchParams } from "@/types/commonTypes";
import { FormEvent, useState } from "react";

interface ISearchProps {
  inputString: string;
  option: string;
  changeOptionHandler: (newOption: TSearchParams) => void;
  searchInputHandler: (searchString: string) => void;
}

const Search: React.FC<ISearchProps> = ({
  inputString,
  option,
  changeOptionHandler,
  searchInputHandler,
}) => {
  const [searchInput, setSearchInput] = useState<string>("");

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchInputHandler(searchInput);
  };

  return (
    <StyledSearchContainer>
      <form name="search-form" onSubmit={(e) => handleFormSubmit(e)}>
        <button type="submit">
          <Image
            width={30}
            height={30}
            src={searchIcon}
            alt="search-icon.svg"
          />
        </button>
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder={!!inputString ? inputString : "Search..."}
          name="search"
          maxLength={300}
        />
      </form>
      <StyledCheckboxContainer>
        {SEARCH_PARAMS.map((checkbox) => {
          return (
            <label key={checkbox}>
              {checkbox}
              <input
                onChange={() => changeOptionHandler(checkbox as TSearchParams)}
                type="checkbox"
                checked={option === checkbox}
              />
              <span></span>
            </label>
          );
        })}
      </StyledCheckboxContainer>
    </StyledSearchContainer>
  );
};

export default Search;
