import Sport from "@/assets/sport.png";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-24 grid grid-cols-1 md:grid-cols-2 items-center">
        <Image className="ml-auto" src={Sport} alt="" width={500} />
        <div className="max-w-[500px]">
          <p className="text-lg">
            Os Jogos Olímpicos de Paris 2024 serão realizados de 26 de julho a
            11 de agosto na França. Esta será a 33ª edição da competição e a
            terceira vez que Paris sediará os Jogos Olímpicos, tendo
            anteriormente recebido o evento em 1900 e 1924.
          </p>
          <p className="text-lg">
            Também apresento o <b>Hackathon das Olimpíadas de Paris 2024</b>. 
            Este projeto foi desenvolvido pela <b>codante</b> para mostrar como a tecnologia pode ser aplicada em eventos 
            de grande escala, como os Jogos Olímpicos de Paris. Através de soluções inovadoras, junto à
            API da <b>codante</b>, buscamos aprimorar a experiência dos atletas, espectadores e organizadores.
          </p>
        </div>
      </section>
  );
}

export default About;