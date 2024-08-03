import { api } from "@/config/api";
import { ICountries } from "@/interface/countries";

export const getCountries = async () => {
  const {data}: {data: {data: ICountries[]}} = await api.get('/countries', {

  });
  return data;
}