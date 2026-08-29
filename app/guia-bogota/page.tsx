import React from 'react';
import PageShell from '../components/PageShell';
import { ComboCard } from '../components/ComboCard';

export default function GuiaBogota() {
  return (
    <PageShell active="bogota">
      <section className="bg-white border border-[#D4AF37]/30 rounded-3xl p-8 shadow-lg">
        <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest block mb-2">🇨🇴 Guía del Viajero</span>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#0D1B3D] font-bold mb-4">Energía y Experiencias para tu Viaje</h1>
        <p className="text-[#0D1B3D]/80 text-sm sm:text-base leading-relaxed font-light">
          Ya sea que vengas de visita o vivas viajando, este kit está pensado para sostener tu energía en el camino, y esta guía reúne los tours que más recomendamos durante tu estadía en Bogotá.
        </p>
      </section>

      <ComboCard
        tag="Kit de Viaje"
        title="Kit Bienestar & Energía Viajera"
        ingredients="OFF + PRUNEX 1 + VITA XTRA T+"
        description="Un kit compacto para sostener la energía y el descanso durante el viaje: PRUNEX 1 apoya la digestión en comidas fuera de casa, VITA XTRA T+ mantiene la energía activa durante el día, y OFF ayuda a conciliar un buen descanso al final de la jornada."
        price="$428.100 COP"
        href="https://tiendafuxion.com/storelt/havenly/3160089"
        buyLabel="Comprar Kit Directo →"
      />

      {/* GUÍA DE EXPERIENCIAS BOGOTÁ (VALMONT 314) */}
      <section className="bg-white border-2 border-[#D4AF37]/40 rounded-3xl p-8 shadow-xl">
        <div className="border-b border-[#D4AF37]/30 pb-4 mb-6">
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest block">Exclusivo Huéspedes & Viajeros</span>
          <h2 className="font-serif text-3xl text-[#0D1B3D] font-bold">🇨🇴 Guía de Experiencias Bogotá | Valmont 314</h2>
          <p className="text-xs text-slate-600 mt-1">Tu hogar en Colombia. Descubre y reserva los mejores tours recomendados para tu estancia.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-[#F7F6F2] p-5 rounded-2xl border border-slate-200 flex flex-col justify-between">
            <div>
              <h4 className="font-serif text-base font-bold text-[#0D1B3D] mb-1">1. Tour Histórico Candelaria & Museo del Oro</h4>
              <p className="text-xs text-slate-600 mb-4">Prueba la chicha tradicional y conoce la colección prehispánica más grande del mundo.</p>
            </div>
            <a href="https://www.getyourguide.com" target="_blank" rel="noopener noreferrer" className="bg-[#0D1B3D] text-[#D4AF37] font-bold text-center py-2 px-4 rounded-full text-xs uppercase">Ver Disponibilidad →</a>
          </div>

          <div className="bg-[#F7F6F2] p-5 rounded-2xl border border-slate-200 flex flex-col justify-between">
            <div>
              <h4 className="font-serif text-base font-bold text-[#0D1B3D] mb-1">2. Teleférico & Atardecer en Monserrate</h4>
              <p className="text-xs text-slate-600 mb-4">Sube a más de 3.100 metros de altura para la vista panorámica más espectacular.</p>
            </div>
            <a href="https://www.getyourguide.com" target="_blank" rel="noopener noreferrer" className="bg-[#0D1B3D] text-[#D4AF37] font-bold text-center py-2 px-4 rounded-full text-xs uppercase">Ver Disponibilidad →</a>
          </div>

          <div className="bg-[#F7F6F2] p-5 rounded-2xl border border-slate-200 flex flex-col justify-between">
            <div>
              <h4 className="font-serif text-base font-bold text-[#0D1B3D] mb-1">3. Catedral de Sal de Zipaquirá</h4>
              <p className="text-xs text-slate-600 mb-4">Maravilla arquitectónica esculpida a 180 metros bajo tierra en una mina activa.</p>
            </div>
            <a href="https://www.getyourguide.com" target="_blank" rel="noopener noreferrer" className="bg-[#0D1B3D] text-[#D4AF37] font-bold text-center py-2 px-4 rounded-full text-xs uppercase">Ver Disponibilidad →</a>
          </div>

          <div className="bg-[#F7F6F2] p-5 rounded-2xl border border-slate-200 flex flex-col justify-between">
            <div>
              <h4 className="font-serif text-base font-bold text-[#0D1B3D] mb-1">4. Vuelo en Parapente sobre Sopó</h4>
              <p className="text-xs text-slate-600 mb-4">Aventura volando sobre la sabana con instructores certificados.</p>
            </div>
            <a href="https://www.getyourguide.com" target="_blank" rel="noopener noreferrer" className="bg-[#0D1B3D] text-[#D4AF37] font-bold text-center py-2 px-4 rounded-full text-xs uppercase">Ver Disponibilidad →</a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
