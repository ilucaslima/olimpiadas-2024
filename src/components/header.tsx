import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between">
        <ul className="flex text-center m-auto items-center gap-4 md:gap-10 text-sm md:text-basew">
          <li>
            <Link href="#home">Inicio</Link></li>
          <li>
          <Link href="#about">Sobre</Link></li>
          <li><Link href="#competitions">Competições</Link></li>
          <li><Link href="#countries">Países</Link></li>
        </ul>
      </header>
  );
}

export default Header;