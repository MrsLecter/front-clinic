import { useState } from "react";
import { IResponseData } from "@/types/commonTypes";
import {
  StyledTabs,
  StyledButtonsContainer,
  StyledButton,
  StyledContent,
} from "./Tabs.styles";
import TabMap from "../tabMap/TabMap";

interface ITabsProps {
  allClinics: IResponseData[];
  setActiveClinic: (clinic: string) => void;
  activeClinic: string;
}

const Tabs: React.FC<ITabsProps> = ({
  allClinics,
  activeClinic,
  setActiveClinic,
}) => {
  const [isFirstActive, toggleIsFirstActive] = useState<boolean>(true);
  const clinicData = allClinics.filter(
    (item) => item.adress === activeClinic
  )[0];

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
        <TabMap
          lat={clinicData.lat}
          lng={clinicData.lng}
          activeClinic={activeClinic}
          allAvaliableData={allClinics}
          setActiveClinic={setActiveClinic}
        />
      </StyledContent>
      <StyledContent isActiveTab={!isFirstActive} isMap={false}>
        {!clinicData && (
          <h2>Select a clinic to display more detailed information</h2>
        )}
        {clinicData && (
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
