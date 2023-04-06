import { useState } from "react";
import { ApolloError } from "@apollo/client";
import { IResponseData } from "@/types/commonTypes";
import {
  StyledTabs,
  StyledButtonsContainer,
  StyledButton,
  StyledContent,
} from "./Tabs.styles";
import TabMap from "../tabMap/TabMap";

interface ITabsProps {
  isLoading: boolean;
  isError: ApolloError | undefined;
  activeClinic: string;
  allAvaliableData: IResponseData[];
  setActiveClinic: (clinic: string) => void;
  data: IResponseData[];
}

const Tabs: React.FC<ITabsProps> = ({
  isLoading,
  isError,
  activeClinic,
  data,
  allAvaliableData,
  setActiveClinic,
}) => {
  const [isFirstActive, toggleIsFirstActive] = useState<boolean>(true);
  const clinicData = data[0];

  return (
    <StyledTabs>
      <StyledButtonsContainer>
        <StyledButton
          isActive={isFirstActive}
          onClick={() => toggleIsFirstActive(true)}
        >
          Location
        </StyledButton>
        <StyledButton
          isActive={!isFirstActive}
          onClick={() => toggleIsFirstActive(false)}
        >
          About clinic
        </StyledButton>
      </StyledButtonsContainer>
      <StyledContent isActiveTab={isFirstActive} isMap={true}>
        {isLoading && <h2>Loading...</h2>}
        {isError && <h2>An error occured...</h2>}
        {!isLoading && !isError && (
          <TabMap
            lat={clinicData ? clinicData.lat : null}
            lng={clinicData ? clinicData.lng : null}
            activeClinic={activeClinic}
            allAvaliableData={allAvaliableData}
            setActiveClinic={setActiveClinic}
          />
        )}
      </StyledContent>
      <StyledContent isActiveTab={!isFirstActive} isMap={false}>
        {!clinicData && (
          <h2>Select a clinic to display more detailed information</h2>
        )}
        {isLoading && <h2>Loading...</h2>}
        {isError && <h2>An error occured...</h2>}
        {!isLoading && !isError && clinicData && (
          <>
            <div>{clinicData.clinicName}</div>
            <div>
              <span>{clinicData.city}</span>
              <a href={"mailto:" + clinicData.email} target="_blank">
                {clinicData.email}
              </a>
            </div>
            <div>{clinicData.state}</div>
            <div>{clinicData.aboutClinic}</div>
          </>
        )}
      </StyledContent>
    </StyledTabs>
  );
};

export default Tabs;
