"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-amber-600 text-gray-900 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Gerenciador de Tarefas
        </Link>
        <div className="space-x-4">
          <Link
            href="/tarefas"
            className={`hover:underline ${
              pathname === "/tarefas" ? "font-bold" : ""
            }`}
          >
            Lista de Tarefas
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;