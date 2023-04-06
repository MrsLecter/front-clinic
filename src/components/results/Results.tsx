import ResultsItem from "./resultsItem/ResultsItem";
import { ApolloError } from "@apollo/client";
import { IResponseData } from "@/types/commonTypes";
import { StyledResults } from "./Results.styles";

interface IResultsProps {
  activeNow: string;
  isLoading: boolean;
  isError: ApolloError | undefined;
  searchResults: IResponseData[];
  setChosenClinic: (clinic: string) => void;
}

const Results: React.FC<IResultsProps> = ({
  activeNow,
  setChosenClinic,
  isLoading,
  isError,
  searchResults,
}) => {
  if (!activeNow) {
    setChosenClinic(searchResults[0].adress);
  }
  return (
    <StyledResults>
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>An error occured...</h2>}
      {searchResults && searchResults.length === 0 && (
        <h2>Data not found...</h2>
      )}
      {searchResults &&
        searchResults.length > 0 &&
        searchResults.map((object, index) => {
          if (index === 0 && !activeNow) {
            return (
              <ResultsItem
                clinicDataObject={object}
                key={index}
                isActive={true}
                setClincActive={setChosenClinic}
              />
            );
          } else {
            return (
              <ResultsItem
                clinicDataObject={object}
                key={index}
                isActive={activeNow === object.adress}
                setClincActive={setChosenClinic}
              />
            );
          }
        })}
    </StyledResults>
  );
};

export default Results;
