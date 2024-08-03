'use client'

import { IEvents } from '@/interface/events';
import { sports } from '@/utils/data/sports';
import { FormatDate } from '@/utils/format-date';
import Image from 'next/image';
import React from 'react';

interface IMatchesProps {
  events: IEvents[];
  selected: String;
}

const Matches = ({events, selected}: IMatchesProps) => {

  return (
    <section className="gap-2 grid md:grid-cols-2 lg:grid-cols-3 min-h-[350px]">
        {events?.map((item: IEvents) => {
          const date = new Date(item.day);
          const dateFormatted = FormatDate(date)

          return (
            <div className="bg-card_blue p-4" key={item.id}>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <p>{sports[item.discipline_name]}</p>
                  <span className="text-xs bg-card_red px-2 rounded-full">{item.status}</span>
                </div>
                <p>{dateFormatted}</p>
              </div>
              <p className="text-center mt-4">{item.gender_code === 'M' ? 'Masculino' : 'Feminino'}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div>
                    <p className="mb-1 text-sm">{item.competitors[0].country_id}</p>
                    <Image src={item.competitors[0].country_flag_url} width={100} height={100} alt=""/>
                  </div>
                  <span className="text-2xl mt-4">({item.competitors[0].result_mark})</span>
                </div>
                <span className="text-2xl mt-4">x</span>
                <div className="flex items-center gap-4">
                  <span className="text-2xl mt-4">({item.competitors[1].result_mark})</span>
                  <div>
                    <p className="mr-auto mb-1 text-sm">{item.competitors[1].country_id}</p>
                    <Image src={item.competitors[1].country_flag_url} width={100} height={100} alt={""}/>
                  </div>
                </div>
              </div>
              
            </div>
          );
        })}
      </section>
  );
}

export default Matches;