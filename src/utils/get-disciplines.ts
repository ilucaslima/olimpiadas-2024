import { api } from "@/config/api";
import { IDiscipline } from "@/interface/disciplines";
import { pages } from "next/dist/build/templates/app-page";

export const getDisciplines = async () => {
  const {data}: {data: {data: IDiscipline[]}} = await api.get('/disciplines');
  return data.data;
}