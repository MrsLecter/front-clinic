import React, { useEffect, useState } from "react";
import { Map, Marker } from "pigeon-maps";
import { IResponseData } from "@/types/commonTypes";

interface ITabMapProps {
  lat: number | null;
  lng: number | null;
  allAvaliableData: IResponseData[];
  setActiveClinic: (clinic: string) => void;
  activeClinic: string;
}

const TabMap: React.FC<ITabMapProps> = ({
  lat = 50.4547,
  lng = 30.5238,
  allAvaliableData,
  activeClinic,
  setActiveClinic,
}) => {
  const newCenter = [lat ? lat : 50.4547, lng ? lng : 30.5238];
  const [center, setCenter] = useState<number[]>(newCenter);

  useEffect(() => {
    const newCenter = [lat ? lat : 50.4547, lng ? lng : 30.5238];
    setCenter(newCenter);
  }, [lat, lng]);

  return (
    <Map
      height={530}
      center={center as [number, number]}
      defaultZoom={16}
      onBoundsChanged={({ center }) => {
        setCenter(center);
      }}
    >
      {activeClinic && (
        <Marker
          width={80}
          color={"#12b886"}
          anchor={center as [number, number]}
        />
      )}
      {!!activeClinic &&
        allAvaliableData.map((avaliableClinic, index) => {
          if (avaliableClinic.adress !== activeClinic) {
            return (
              <Marker
                key={index}
                width={30}
                color={"#da1f35"}
                anchor={[avaliableClinic.lat, avaliableClinic.lng]}
                onClick={() => setActiveClinic(avaliableClinic.adress)}
              />
            );
          }
        })}
    </Map>
  );
};

export default TabMap;
