export interface Property {
  title: string;
  description: string;
  id?: number;
  type: string;
  city: string;
  state: string;
  country: string;
  features: string[];
  address: string;
  beds: number;
  baths: number;
  price: number;
  images: Image[];
  latitude: number;
  longitude: number;
}

export interface PropertyMetaData {
  total: number;
  page: number;
  count: number;
  totalPages: number;
}

export interface PropertyResponse {
  data: Property[];
  meta: PropertyMetaData;
}

export interface Image {
  id: number;
  data: {
    type: string;
    data: string;
  };
}
