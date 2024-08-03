import { api } from "@/config/api";
import { IEvents } from "@/interface/events";


export const getEvents = async (symbolSelected: String) => {
  const {data}: {data: {data: IEvents[]}} = await api.get('/events', {
    params: {
      discipline: symbolSelected
    }
  });
  return data;
}