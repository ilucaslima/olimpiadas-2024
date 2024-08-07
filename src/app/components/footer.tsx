import In from "@/assets/icons/in.svg";
import Git from "@/assets/icons/git.svg";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col-reverse items-center justify-between gap-4 border-t border-blue-dark py-5 md:flex-row">
      <p className="text-center text-xs text-blue-dark">
        Copyright © 2024 - Desenvolvido com 🤍 por:{" "}
        <a href="https://www.linkedin.com/in/lucaslimasz/" target="_blank">
          Lucas Lima
        </a>
      </p>
      <div className="flex gap-4">
        <a href="https://www.linkedin.com/in/lucaslimasz/" target="_blank">
          <Image src={In} alt="Linkedin" />
        </a>
        <a href="https://www.github.com/lucaslimasz/" target="_blank">
          <Image src={Git} alt="Github" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
