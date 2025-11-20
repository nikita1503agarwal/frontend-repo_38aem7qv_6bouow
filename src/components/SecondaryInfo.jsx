import React from "react";

function SecondaryInfo() {
  return (
    <section className="rounded-2xl border border-blue-500/20 bg-slate-800/60 backdrop-blur p-6 sm:p-8">
      <h3 className="text-xl font-semibold text-white mb-4">După trimiterea formularului</h3>
      <ul className="space-y-3 text-blue-100/90">
        <li>• Un membru al echipei te va contacta în mai puțin de 24 de ore.</li>
        <li>• Vom discuta pe scurt despre nevoile tale și scenariile de utilizare.</li>
        <li>• Programăm o demonstrație live, unde vei vedea:</li>
      </ul>
      <div className="mt-4 grid sm:grid-cols-2 gap-3 text-blue-100/90">
        <Bullet>Scanare documente în timp real</Bullet>
        <Bullet>OCR automat</Bullet>
        <Bullet>Gestionarea datelor în CRM</Bullet>
        <Bullet>Generarea unui document final dintr-un template</Bullet>
      </div>
    </section>
  );
}

function Bullet({ children }) {
  return (
    <div className="flex items-center gap-2">
      <span className="inline-block w-2 h-2 rounded-full bg-blue-500" />
      <span>{children}</span>
    </div>
  );
}

export default SecondaryInfo;
