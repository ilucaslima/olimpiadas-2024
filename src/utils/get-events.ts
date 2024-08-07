import { api } from "@/config/api";
import { IEvents } from "@/interface/events";

export const getEvents = async (symbolSelected: String, page: number) => {
  const {data} = await api.get('/events', {
    params: {
      discipline: symbolSelected,
      page: page
    }
  }) 

  return data;
}