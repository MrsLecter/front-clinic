import { IResponseData } from "@/types/commonTypes";
import { StyledResultsItem } from "./ResultsItem.styles";

interface IResultsItemProps {
  isActive: boolean;
  clinicDataObject: IResponseData;
  setClincActive: (clinic: string) => void;
}

const ResultsItem: React.FC<IResultsItemProps> = ({
  isActive,
  clinicDataObject,
  setClincActive,
}) => {
  return (
    <StyledResultsItem
      isActive={isActive}
      onClick={() => setClincActive(clinicDataObject.adress)}
    >
      <div>{clinicDataObject.clinicName}</div>
      <div>{clinicDataObject.adress}</div>
      <div>
        <span>{clinicDataObject.state}</span>&nbsp;&nbsp;
        <span>{clinicDataObject.zip}</span>
      </div>
      <div>
        <a href={clinicDataObject.website} target="_blank">
          {clinicDataObject.website}
        </a>
        <a href={"tel:" + clinicDataObject.phone} target="_blank">
          p.&nbsp;{clinicDataObject.phone}
        </a>
      </div>
    </StyledResultsItem>
  );
};

export default ResultsItem;
