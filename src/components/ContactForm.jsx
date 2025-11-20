import React, { useState } from "react";

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  website: "",
  docTypes: "",
  volume: "",
  processes: [],
  otherProcess: "",
  problems: "",
  demoDate: "",
  demoTime: "",
  contactMethod: "Telefon",
};

function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const processesOptions = [
    "Scanare acte de identitate",
    "Completare formulare",
    "Generare documente din template-uri .docx",
    "Organizare CRM",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setForm((prev) => {
        const next = new Set(prev.processes);
        if (checked) next.add(value);
        else next.delete(value);
        return { ...prev, processes: Array.from(next) };
      });
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simple front-end validation
    if (!form.fullName || !form.email || !form.phone || !form.company) {
      setError("Te rugăm să completezi câmpurile obligatorii.");
      setLoading(false);
      return;
    }

    // In this version we just simulate success
    await new Promise((res) => setTimeout(res, 800));
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-blue-500/20 bg-slate-800/60 backdrop-blur p-8 text-center">
        <h3 className="text-2xl font-semibold text-white mb-2">Cererea a fost trimisă</h3>
        <p className="text-blue-100/80">
          Îți mulțumim! Un membru al echipei Monoform te va contacta în mai puțin de 24 de ore pentru a stabili detaliile demonstrației.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-blue-500/20 bg-slate-800/60 backdrop-blur p-6 sm:p-8 grid grid-cols-1 gap-6">
      <div>
        <h3 className="text-xl font-semibold text-white">Date de Contact</h3>
        <p className="text-sm text-blue-100/70">Toate câmpurile sunt obligatorii, cu excepția website-ului.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Input label="Nume complet" name="fullName" value={form.fullName} onChange={handleChange} required />
        <Input label="Email" type="email" name="email" value={form.email} onChange={handleChange} required />
        <Input label="Număr de telefon" name="phone" value={form.phone} onChange={handleChange} required />
        <Input label="Numele companiei" name="company" value={form.company} onChange={handleChange} required />
        <Input label="Website-ul companiei (opțional)" name="website" value={form.website} onChange={handleChange} placeholder="https://" />
      </div>

      <Divider />

      <div>
        <h3 className="text-xl font-semibold text-white">Nevoile Clientului</h3>
      </div>

      <div className="grid gap-4">
        <Input label="Tipul documentelor cu care lucrați" name="docTypes" value={form.docTypes} onChange={handleChange} placeholder="ex: facturi, contracte, formulare, CI, pașapoarte" />
        <Input label="Volumul estimat lunar de documente / pagini" name="volume" value={form.volume} onChange={handleChange} placeholder="ex: 2.000 pagini / lună" />

        <div>
          <label className="block text-sm font-medium text-blue-100 mb-2">Procese pe care doriți să le automatizați</label>
          <div className="grid sm:grid-cols-2 gap-2">
            {processesOptions.map((p) => (
              <Checkbox key={p} label={p} name="processes" value={p} checked={form.processes.includes(p)} onChange={handleChange} />
            ))}
          </div>
          <Input className="mt-3" label="Altele" name="otherProcess" value={form.otherProcess} onChange={handleChange} placeholder="descrieți alte procese" />
        </div>

        <div>
          <label className="block text-sm font-medium text-blue-100 mb-2">Principalele probleme actuale</label>
          <textarea name="problems" value={form.problems} onChange={handleChange} rows={4} className="w-full rounded-xl bg-slate-900/60 border border-slate-700/60 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 outline-none text-white placeholder:text-slate-400 p-3 transition" placeholder="ex: erori frecvente la introducerea datelor, timp mare de procesare, lipsă trasabilitate" />
        </div>
      </div>

      <Divider />

      <div>
        <h3 className="text-xl font-semibold text-white">Preferințe pentru Demo</h3>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <Input label="Data preferată" type="date" name="demoDate" value={form.demoDate} onChange={handleChange} required />
        <Input label="Ora preferată" type="time" name="demoTime" value={form.demoTime} onChange={handleChange} required />
        <div>
          <label className="block text-sm font-medium text-blue-100 mb-2">Modalitate preferată de contact</label>
          <select name="contactMethod" value={form.contactMethod} onChange={handleChange} className="w-full rounded-xl bg-slate-900/60 border border-slate-700/60 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 outline-none text-white p-3 transition">
            <option>Telefon</option>
            <option>Email</option>
            <option>Videocall (Google Meet / Zoom)</option>
          </select>
        </div>
      </div>

      {error && <p className="text-red-400 text-sm">{error}</p>}

      <div className="flex items-center justify-between gap-4 flex-wrap">
        <p className="text-blue-100/80 text-sm">Te vom contacta în cel mai scurt timp (maxim 24h).</p>
        <button type="submit" disabled={loading} className="inline-flex items-center justify-center rounded-xl bg-blue-500 hover:bg-blue-600 active:bg-blue-700 disabled:opacity-60 px-5 py-3 text-white font-medium shadow-lg shadow-blue-500/20 transition">
          {loading ? "Se trimite..." : "Trimite Cererea"}
        </button>
      </div>
    </form>
  );
}

function Input({ label, className = "", ...props }) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-blue-100 mb-2">{label}</label>
      <input {...props} className="w-full rounded-xl bg-slate-900/60 border border-slate-700/60 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 outline-none text-white placeholder:text-slate-400 p-3 transition" />
    </div>
  );
}

function Checkbox({ label, ...props }) {
  return (
    <label className="flex items-center gap-3 bg-slate-900/50 border border-slate-700/60 rounded-xl p-3 cursor-pointer select-none">
      <input type="checkbox" className="w-4 h-4 accent-blue-500" {...props} />
      <span className="text-sm text-blue-100">{label}</span>
    </label>
  );
}

function Divider() {
  return <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />;
}

export default ContactForm;
