import Image from "next/image";

import "swiper/css";
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import ArrowRight from '@/assets/icons/arrow.svg'
import { ICountries } from "@/interface/countries";

interface ICountriesProps {
  countries: ICountries[];
}

const Countries = ({countries}: ICountriesProps) => {
  return (
    <section id="countries" className="mt-24 m-auto flex flex-col items-center">
        <h1 className="text-4xl text-center font-bold max-w-[450px]">
          Equipes <b> que participaram das</b> olimpíadas.
        </h1>
        <Swiper
          className="container testimonials__container"
          modules={[Pagination]}
          spaceBetween={16}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {countries.map((item, index) => {
            return (
              <SwiperSlide key={index} className="mt-10 max-w-[250px]">
                <div className="max-w-[250px] cursor-pointer">
                  <Image src={item.flag_url} alt="" width={250} height={250} />
                  <div className="bg-card_blue_dark py-4 px-4">
                    <h5 className="flex justify-between items-center">
                      <strong>{item.name}</strong>
                      <p>{item.rank}º Posição</p>
                    </h5>
                    <ul className="flex justify-between mt-2 text-sm">
                      <li>Ouro: {item.gold_medals}</li>
                      <li>Prata: {item.silver_medals}</li>
                      <li>Bronze: {item.bronze_medals}</li>
                    </ul>
                  </div>
                  <p className="flex items-center gap-2 text-xs bg-card_red py-1.5 px-4 rounded-b-md">
                    Saiba mais 
                    <Image src={ArrowRight} alt=""  width={12}/>
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
  );
}

export default Countries;