import axios from 'axios';

interface ReverseGeocodingResponse {
  address: {
    city: string;
    city_district: string;
    country: string;
    country_code: string;
    house_number: string;
    neighbourhood: string;
    postcode: string;
    road?: string;
    state: string;
    suburb?: string;
  }
  boundingbox: number[];
  display_name: string;
  lat: string;
  lon: string;
  licence: string;
  osm_id: number;
  osm_type: string;
  place_id: number;
}

interface Address {
  city: string;
  country: string;
  houseNumber: string;
  postalCode: string;
  street?: string;
  coords: {
    lon: number;
    lat: number;
  }
}

export async function getAddressFromLonLat({ lon, lat }: { lon: number, lat: number }): Promise<Address | null> {
  try {
    const res = await axios.get<ReverseGeocodingResponse>(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
    );

    const { city, road: street, postcode: postalCode, country, house_number: houseNumber } = res.data.address;
    const address = {
      city,
      country,
      street,
      postalCode,
      houseNumber,
      coords: {
        lon,
        lat,
      }
    }

    return address;
  } catch(err) {
    console.log(err);
    return null;
  }
}