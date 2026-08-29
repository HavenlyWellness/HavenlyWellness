import React from 'react';
import PageShell from '../components/PageShell';
import { ComboCard, CompactCard } from '../components/ComboCard';

export default function SaludEmocional() {
  return (
    <PageShell active="emocional">
      <section className="bg-white border border-[#D4AF37]/30 rounded-3xl p-8 shadow-lg">
        <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest block mb-2">🧠 Salud Emocional</span>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#0D1B3D] font-bold mb-4">Equilibrio para tu Mente y tu Descanso</h1>
        <p className="text-[#0D1B3D]/80 text-sm sm:text-base leading-relaxed font-light">
          El estrés diario, la fatiga mental y el mal descanso afectan directamente tu bienestar físico y emocional. Esta sección reúne los productos que hemos probado para apoyar el sistema nervioso, mejorar la calidad del sueño y acompañarte con aromaterapia en los momentos de mayor tensión.
        </p>
      </section>

      <ComboCard
        tag="Combo 4 • Salud Emocional"
        title="Sistema Nervioso & ActivaMente"
        ingredients="VITA XTRA T+ + OFF + ON"
        description="ON despeja la fatiga mental y OFF aporta triptófano y magnesio para inducir descanso sin generar adicción."
        price="$400.400 COP"
        href="https://tiendafuxion.com/storelt/havenly/3160912"
        buyLabel="Comprar Combo 4 Directo →"
      />

      <CompactCard
        tag="Sincronización de Sueño"
        title="El Fin del Jet Lag Diario (28 días)"
        ingredients="OFF + VITA XTRA T+ + VERA+ + FLORA LIV"
        description="Regula el ciclo circadiano del sueño al cambiar de zona horaria o cuando el descanso se ve interrumpido por el estrés diario."
        price="$635.100 COP"
        href="https://tiendafuxion.com/storelt/havenly/3160921"
      />

      <section className="bg-white border border-[#D4AF37]/30 rounded-3xl p-8 shadow-lg">
        <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest block mb-2">Soluciones Holísticas doTERRA</span>
        <h2 className="font-serif text-2xl text-[#0D1B3D] font-bold mb-4">Aceites Esenciales para la Calma</h2>
        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
          Los aceites esenciales de grado terapéutico CPTG® son un aliado sencillo para bajar la ansiedad del día a día: unas gotas de lavanda en el difusor antes de dormir, un toque de bergamota en la muñeca antes de una reunión estresante, o un masaje relajante con aceite de manzanilla romana al final del día. Son un complemento natural — no un sustituto — de tu descanso y equilibrio emocional.
        </p>
        <a href="https://ifuxion.com/havenly" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#1E3A8A] text-[#F7F6F2] hover:bg-[#0D1B3D] font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider shadow-md">
          Consultar Catálogo & Guía doTERRA →
        </a>
      </section>
    </PageShell>
  );
}
