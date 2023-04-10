import { IResponseData } from "@/types/commonTypes";
import Results from "../results/Results";
import Tabs from "../tabs/Tabs";
import { StyledContainer } from "./ResultsContainer.styled";
import { StyledNotificationMessage } from "@/styles/index.styles";
import { useState } from "react";

interface IResultsContainerProps {
  data: IResponseData[];
}

const ResultsContainer: React.FC<IResultsContainerProps> = ({ data }) => {
  const [activeClinic, setActiveClinic] = useState<string>(
    data[0] ? data[0].adress : ""
  );

  if (!activeClinic) {
    return (
      <StyledContainer>
        <StyledNotificationMessage>
          <h2>No data found! Check the entered data and try again</h2>
        </StyledNotificationMessage>
      </StyledContainer>
    );
  }

  return (
    <StyledContainer>
      <Results
        searchResults={data}
        activeNow={activeClinic}
        setActiveClinic={setActiveClinic}
      />
      <Tabs
        allClinics={data}
        activeClinic={activeClinic}
        setActiveClinic={setActiveClinic}
      />
    </StyledContainer>
  );
};

export default ResultsContainer;
