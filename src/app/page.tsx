"use client";

import { getDisciplines } from "@/utils/get-disciplines";
import { getEvents } from "@/utils/get-events";
import Header from "@/components/header";
import Principal from "@/components/home";
import About from "@/components/about";
import Disciplines from "@/components/disciplines";
import { IEvents } from "@/interface/events";
import Matches from "@/components/matches";
import { useCallback, useEffect, useState } from "react";
import { IDiscipline } from "@/interface/disciplines";

import { getCountries } from "@/utils/get-countries";
import { ICountries } from "@/interface/countries";
import Countries from "@/components/countries";
import Footer from "@/components/footer";

interface IPages {
  disciplinesPage: number;
  eventsPage: number;
}

export default function Home() {
  const [disciplines, setDisciplines] = useState<IDiscipline[]>([]);
  const [events, setEvents] = useState<IEvents[]>([]);
  const [selected, setSelected] = useState<String>("Football");
  const [countries, setCountries] = useState<ICountries[]>([]);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleSelection = useCallback(async (symbol: String, name: String) => {
    setSelected(name);
    const data = await getEvents(symbol);
    setEvents(data.data);
  }, []);

  const symbolInitial = "FBL"

  const fetch = useCallback(async () => {
    const [disciplinesData, eventsData, countriesData] = await Promise.all([
      await getDisciplines(),
      await getEvents(symbolInitial),
      await getCountries(),
    ]);
    setDisciplines(disciplinesData);
    setEvents(eventsData.data);
    setCountries(countriesData.data);
  }, [symbolInitial]);

  const handleMouseMove = (event: any) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    setPosition({ x: mouseX, y: mouseY });
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <main className="min-h-screen px-4 md:px-24 py-8" onMouseMove={handleMouseMove}>
      <div
        className="square"
        style={{
          position: "fixed",
          left: position.x - 300 + "px",
          top: position.y - 300 + "px",
        }}
      />
      <Header />
      <Principal />
      <About />
      <Disciplines
        disciplines={disciplines}
        selected={selected}
        handleSelection={handleSelection}
      />
      <Matches events={events} selected={selected} />
      <Countries countries={countries} />
      <Footer />
    </main>
  );
}
