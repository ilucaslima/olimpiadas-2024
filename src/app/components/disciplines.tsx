"use client"
import Image from "next/image";

import { IDiscipline } from "@/interface/disciplines";
import { sports } from "@/utils/data/sports";
import { SPORTS_MAIN } from "@/utils/data/sports-main";

interface IDisciplinesProps {
  disciplines: IDiscipline[];
  selected: {symbol: string, name: string};
  handleSelection: (symbol: string, name: string, position: number) => void;
  setPositionMatches: (state: number) => void;
}

const Disciplines = ({ disciplines, selected, handleSelection, setPositionMatches }: IDisciplinesProps) => {
  if (!disciplines) {
    return null;
  }

  disciplines = disciplines?.filter((item: IDiscipline) =>
    SPORTS_MAIN.includes(item.name)
  );

  return (
    <section>
      <div id="competitions" className="w-full grid grid-cols-6">
        {disciplines?.map((item: IDiscipline) => {
          const name = item.name as string;
          const id = item.id as string;
          const image = item.pictogram_url_dark as string;

          return (
            <button 
              key={id} 
              className={`bg-card_red py-6 px-4 cursor-pointer hover:opacity-90 ${item.name === selected.name && 'opacity-85'}`}
              onClick={() => {handleSelection(id, name, 1), setPositionMatches(1)}}
              >
              <div className="flex items-center gap-2">
                <Image src={image} alt="" width={28} height={28} />
                <h3 className="hidden md:block">{sports[name]}</h3>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Disciplines;
