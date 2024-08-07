"use client";
import Image from "next/image";
import React from "react";

import { IEvent, IEvents } from "@/interface/events";
import { sports } from "@/utils/data/sports";
import { FormatDate } from "@/utils/format-date";

import Competitor from "@/components/competitor";

import ButtonLeft from '@/assets/icons/button-left.svg'
import ButtonRight from '@/assets/icons/button-right.svg'

interface IMatchesProps {
  events: IEvents;
  nextPage: () => void;
  goBackPage: () => void;
}

const Matches = ({ events, goBackPage, nextPage }: IMatchesProps) => {
  const { data, meta } = events
  console.log(meta)
  

  return (
    <>
      <section className="gap-2 grid md:grid-cols-2 lg:grid-cols-3 min-h-[350px]">
        {data?.map((item: IEvent) => {
          const date = new Date(item.day);
          const dateFormatted = FormatDate(date);

          return (
            <div className="bg-card_blue p-4" key={item?.id}>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <p>{sports[item?.discipline_name]}</p>
                  <span className="text-xs bg-card_red px-2 rounded-full">
                    {item?.status}
                  </span>
                </div>
                <p>{dateFormatted}</p>
              </div>
              <p className="text-center mt-4">
                {item.gender_code === "M" ? "Masculino" : "Feminino"}
              </p>
              <div className="flex justify-between items-center">
                <Competitor
                  item={item.competitors[0]}
                />
                <span className="text-2xl mt-4">x</span>
                <Competitor
                  item={item.competitors[1]}
                  reverse
                />
              </div>
            </div>
          );
        })}
      </section>
      <div className="flex mt-10 items-center gap-4">
        <button onClick={goBackPage}>
          <Image src={ButtonLeft} alt="Voltar" />
        </button>
        <span>
          Página {meta?.current_page} de {meta?.last_page}
        </span>
        <button onClick={nextPage}>
          <Image src={ButtonRight} alt="Passar" />
        </button>
      </div>
    </>
  );
};

export default Matches;
