import React from "react";

function Benefits() {
  const items = [
    { title: "Eliminarea erorilor umane", desc: "Procese automate, validate și trasabile." },
    { title: "Timp economisit", desc: "Automatizări care scad timpul de procesare cu până la 90%." },
    { title: "Automatizare completă", desc: "De la scanare la generarea documentului final." },
    { title: "Securitate enterprise", desc: "Conformitate și bune practici pentru protecția datelor." },
    { title: "Suport dedicat", desc: "Echipa noastră te ghidează la fiecare pas." },
  ];

  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((it) => (
        <div key={it.title} className="rounded-2xl border border-blue-500/20 bg-slate-800/60 backdrop-blur p-6">
          <h4 className="text-white font-semibold mb-1">{it.title}</h4>
          <p className="text-blue-100/90 text-sm">{it.desc}</p>
        </div>
      ))}
    </section>
  );
}

export default Benefits;
