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
  const height = (document.documentElement.clientHeight * 77) / 100 - 40;
  const newCenter = [lat ? lat : 50.4547, lng ? lng : 30.5238];
  const [center, setCenter] = useState<number[]>(newCenter);

  useEffect(() => {
    const newCenter = [lat ? lat : 50.4547, lng ? lng : 30.5238];
    setCenter(newCenter);
  }, [lat, lng]);

  return (
    <Map
      height={height}
      center={center as [number, number]}
      defaultZoom={16}
      onBoundsChanged={({ center }) => {
        setCenter(center);
      }}
    >
      {activeClinic &&
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
          } else if (avaliableClinic.adress === activeClinic) {
            return (
              <Marker
                key={index}
                width={80}
                color={"#12b886"}
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
