import { ICompetitor, IEvent } from "@/interface/events";
import Image from "next/image";

interface ICompetitorProps {
  item: ICompetitor;
  reverse?: boolean;
}

const Competitor = ({ item, reverse }: ICompetitorProps) => {

  if(!item){
    return (
      <h1 className="text-center py-6 max-w-52">
        Competidor não identificado
      </h1>
    )
  }

  return (
    <div className="flex items-center gap-4">
      <div>
        <p className={`mb-1 text-sm ${reverse && 'text-end'}`}>{item.country_id}</p>
        <div className={`flex gap-3 ${reverse && 'flex-row-reverse'}`}>
          <Image
            src={item.country_flag_url}
            width={100}
            height={100}
            alt=""
            className="w-16 md:w-24"
          />
          <span className="text-base md:text-2xl mt-4">
            ({item.result_mark})
          </span>
        </div>
      </div>
    </div>
  );
};

export default Competitor;
