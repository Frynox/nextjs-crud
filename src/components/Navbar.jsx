import Link from "next/link";
import React from "react";
function Navbar() {
  return (
    <nav className="bg-slate-900">
      <div className="container mx-auto flex justify-between items-center my-3">
        <h3 className="font-bold text-3xl hover:text-green-200">NextCRUD</h3>

        <ul className="flex gap-x-3 text-lg font-bold">
          <li>
            <Link href="/" className="text-red-300 hover:text-red-500">Home</Link>
          </li>
          <li>
            <Link href="/new" className="text-red-300 hover:text-red-500">New</Link>
          </li>
          <li>
            <Link href="/about" className="text-red-300 hover:text-red-500">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
