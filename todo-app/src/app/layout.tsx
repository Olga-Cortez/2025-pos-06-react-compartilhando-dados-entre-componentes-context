import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TarefasProvider from "@/context/TarefasProvider";
import Navbar from "@/componentes/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gerenciador de Tarefas",
  description: "Aplicativo para gerenciar tarefas diárias",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <TarefasProvider>
          <div className="min-h-screen bg-gray-900">
            <Navbar />
            <main className="container mx-auto p-4">{children}</main>
          </div>
        </TarefasProvider>
      </body>
    </html>
  );
}