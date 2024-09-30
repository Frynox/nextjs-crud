import Link from "next/link";
import React from "react";
function NotFound() {
  return (
    <section className="flex h-[calc(100vh-7rem)] justify-center items-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold">
            Not Found
        </h1>
        <Link href="/" className="text-slate-400 font-semibold text-xl mt-5">
            Volver a Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
