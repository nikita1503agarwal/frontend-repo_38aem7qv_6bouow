import React from "react";
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm";
import SecondaryInfo from "./components/SecondaryInfo";
import Benefits from "./components/Benefits";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      <div className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(59,130,246,0.08),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.06),transparent_45%)] pointer-events-none" />

        <header className="relative px-6 sm:px-10 py-6 border-b border-white/5">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                <span className="text-blue-300 font-bold">M</span>
              </div>
              <span className="text-white font-semibold">Monoform</span>
            </div>
            <div className="text-xs text-blue-200/70">Platformă AI pentru documente</div>
          </div>
        </header>

        <main className="relative max-w-6xl mx-auto px-6 sm:px-10 py-10 sm:py-16">
          <Hero />

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <div className="space-y-6">
              <SecondaryInfo />
              <Benefits />
            </div>
          </div>
        </main>

        <footer className="relative border-t border-white/5 py-8">
          <div className="max-w-6xl mx-auto px-6 sm:px-10 flex items-center justify-between text-sm">
            <p className="text-blue-200/70">© {new Date().getFullYear()} Monoform. Toate drepturile rezervate.</p>
            <p className="text-blue-200/50">Eficiență. Precizie. Automatizare completă.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
