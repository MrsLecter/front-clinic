import ResultsItem from "./resultsItem/ResultsItem";
import { IResponseData } from "@/types/commonTypes";
import { StyledResults } from "./Results.styles";

interface IResultsProps {
  activeNow: string;
  searchResults: IResponseData[];
  setActiveClinic: (address: string) => void;
}

const Results: React.FC<IResultsProps> = ({
  activeNow,
  searchResults,
  setActiveClinic,
}) => {
  return (
    <StyledResults>
      {searchResults && searchResults.length === 0 && (
        <h2>Data not found...</h2>
      )}
      {searchResults &&
        searchResults.length > 0 &&
        searchResults.map((object, index) => {
          return (
            <ResultsItem
              clinicDataObject={object}
              key={index}
              isActive={
                activeNow
                  ? activeNow === object.adress
                  : object.adress === searchResults[0].adress
              }
              setClincActive={setActiveClinic}
            />
          );
        })}
    </StyledResults>
  );
};

export default Results;
