import Image from "next/image";

import HappyParis from "@/assets/happy-paris.png";
import EffectCircle from "@/assets/effect-circle.png";
import Shine from "@/assets/shine.png";

const Home = () => {
  return (
    <section id="home" className="flex flex-col items-center overflow-hidden">
      <Image className="z-50" src={HappyParis} alt="Happy Paris" width={600} height={600} />
      <div className="absolute z-20 -left-44 top-20 opacity-40">
        <Image src={EffectCircle} alt="" width={400} height={400} />
      </div>
        <Image className="absolute z-20 -right-44 top-72 opacity-30" src={EffectCircle} alt="" width={400} height={400} />
      <div className="absolute top-0 opacity-15 w-sreen -z-20">
        <Image src={Shine} alt="" />
      </div>
      
      <div className="w-[18px] h-[33px] relative bottom-8 mt-20 border-2 rounded-t-2xl rounded-b-2xl">
        <div className="circle" />
      </div>
    </section>
  );
};

export default Home;
