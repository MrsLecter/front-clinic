export interface IResponseData {
  clinicName: string;
  adress: string;
  aboutClinic: string;
  zip: string;
  email: string;
  suburb: string;
  state: string;
  city: string;
  website: string;
  phone: string;
  lat: number;
  lng: number;
}

export type TSearchParams = "City" | "State" | "ZIP" | "Clinic name" | "Suburb";
