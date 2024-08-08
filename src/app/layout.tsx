import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Olimpiadas 2024 | Codante",
  description:
    "Também apresento o Hackathon das Olimpíadas de Paris 2024. Este projeto foi desenvolvido pela codante para mostrar como a tecnologia pode ser aplicada em eventos de grande escala, como os Jogos Olímpicos de Paris. Através de soluções inovadoras, junto à API da codante, buscamos aprimorar a experiência dos atletas, espectadores e organizadores.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
