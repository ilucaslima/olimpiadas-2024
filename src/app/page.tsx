"use client";

import { getDisciplines } from "@/utils/get-disciplines";
import { getEvents } from "@/utils/get-events";
import Header from "@/app/components/header";
import Principal from "@/app/components/home";
import About from "@/app/components/about";
import Disciplines from "@/app/components/disciplines";
import { IEvents } from "@/interface/events";
import Matches from "@/app/components/matches";
import { useCallback, useEffect, useState } from "react";
import { IDiscipline } from "@/interface/disciplines";

import { getCountries } from "@/utils/get-countries";
import { ICountries } from "@/interface/countries";
import Countries from "@/app/components/countries";
import Footer from "@/app/components/footer";

interface ISelected {name: string, symbol: string}

export default function Home() {
  const [disciplines, setDisciplines] = useState<IDiscipline[]>([]);
  const [events, setEvents] = useState<IEvents>({} as IEvents);
  const [selected, setSelected] = useState<ISelected>({name: "Football", symbol: "FBL"});
  const [countries, setCountries] = useState<ICountries[]>([]);
  const [positionMatches, setPositionMatches] = useState<number>(1);
  const {meta} = events

  const handleSelection = useCallback(async (symbol: string, name: string, position: number) => {
    setSelected({symbol, name});
    const response = await getEvents(symbol, position);
    setEvents(response);
  }, []);

  const fetch = useCallback(async () => {
    const [disciplinesData, eventsData, countriesData] = await Promise.all([
      await getDisciplines(),
      await getEvents(selected.symbol, 1),
      await getCountries(),
    ]);
    setDisciplines(disciplinesData);
    
    setEvents(eventsData);
    setCountries(countriesData.data);
  }, [selected]);

  const goBackPage = useCallback(() => {
    if(positionMatches <= 1){
      return;
    }
    setPositionMatches(positionMatches - 1);
    handleSelection(selected.symbol, selected.name, positionMatches - 1);
  }, [handleSelection, positionMatches, selected])
  
  const nextPage = useCallback(() => {
    if(positionMatches === meta.last_page){
      return;
    }
    setPositionMatches(positionMatches + 1);
    handleSelection(selected.symbol, selected.name, positionMatches + 1);
   }, [handleSelection, meta, positionMatches, selected])

  useEffect(() => {
    fetch();
  }, []);

  return (
    <main className="min-h-screen px-4 md:px-24 py-8">
      <Header />
      <Principal />
      <About />
      <Disciplines
        disciplines={disciplines}
        selected={selected}
        handleSelection={handleSelection}
        setPositionMatches={setPositionMatches}
      />
      <Matches 
        events={events} 
        goBackPage={goBackPage}
        nextPage={nextPage}
      />
      <Countries countries={countries} />
      <Footer />
    </main>
  );
}
