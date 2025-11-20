import React from "react";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/30 blur-3xl rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-400/20 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center py-16 sm:py-24 px-6">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          Înregistrează-te și Programează o Demonstrație
        </h1>
        <p className="text-base sm:text-lg text-blue-100/90 max-w-3xl mx-auto">
          Spune-ne câteva detalii despre tine și compania ta, iar noi te vom contacta pentru a înțelege nevoile specifice
          și pentru a-ți arăta Monoform în acțiune — simplu, rapid și eficient.
        </p>
      </div>
    </section>
  );
}

export default Hero;
