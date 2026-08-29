import React from 'react';
import PageShell from './components/PageShell';

export default function HavenlyHome() {
  return (
    <PageShell active="inicio">
      {/* HERO & MANIFIESTO DE EXPERIENCIA */}
      <section className="bg-white border border-[#D4AF37]/30 rounded-3xl p-8 sm:p-10 shadow-lg">
        <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest block mb-2">Experiencia Comprobada & Biotecnología Ancestral</span>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#0D1B3D] font-bold mb-6">
          Ya los probamos, sabemos que funcionan y caminamos a tu lado
        </h1>

        <p className="text-[#0D1B3D]/80 text-base sm:text-lg mb-6 leading-relaxed font-light">
          En Havenly no te enviamos a un catálogo frío. Hemos probado y verificado personalmente cada combo nutracéutico. Ya sea que desees iniciar tu plan mensual o requieras un acompañamiento personalizado guiado por la biotecnología de la Dra. Sandra Muñoz, te atendemos directamente en cualquier país con presencia oficial de FuXion o doTERRA.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-[#F7F6F2] p-4 rounded-2xl border border-[#D4AF37]/30">
            <strong className="text-[#1E3A8A] font-bold uppercase block text-xs mb-1">🌿 Activos Ancestrales FuXion</strong>
            <p className="text-xs text-slate-600">Sinergia de Maíz Morado, Cúrcuma, Jengibre, Amalaki, Cat&apos;s Claw y Triptófano en dosis funcionales puras.</p>
          </div>
          <div className="bg-[#F7F6F2] p-4 rounded-2xl border border-[#D4AF37]/30">
            <strong className="text-[#1E3A8A] font-bold uppercase block text-xs mb-1">💧 Pureza CPTG® doTERRA</strong>
            <p className="text-xs text-slate-600">Extractos botánicos puros con certificado de grado terapéutico para el equilibrio emocional.</p>
          </div>
        </div>
      </section>

      {/* SELECTOR DE 3 CAMINOS */}
      <section className="space-y-6">
        <div className="text-center">
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest block mb-2">Tu Camino Hacia el Bienestar</span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#0D1B3D] font-bold">¿Qué estás buscando hoy?</h2>
          <p className="text-sm text-slate-600 mt-2 max-w-xl mx-auto">Elige la ruta que mejor se ajuste a lo que necesitas ahora. Cada camino incluye productos verificados y una explicación clara de cómo te acompañan.</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          <a href="/salud-fisica" className="group bg-white border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all flex flex-col">
            <span className="text-4xl mb-3">💪</span>
            <h3 className="font-serif text-xl text-[#0D1B3D] font-bold mb-2">Salud Física</h3>
            <p className="text-xs text-slate-600 mb-5 flex-1">Digestión, sistema inmune, control de peso, glicemia y más — combos nutracéuticos probados para tu cuerpo.</p>
            <span className="inline-block bg-[#0D1B3D] text-[#D4AF37] group-hover:bg-[#1E3A8A] font-bold text-center py-2.5 rounded-full text-xs uppercase tracking-wider">Explorar →</span>
          </a>

          <a href="/salud-emocional" className="group bg-white border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all flex flex-col">
            <span className="text-4xl mb-3">🧠</span>
            <h3 className="font-serif text-xl text-[#0D1B3D] font-bold mb-2">Salud Emocional</h3>
            <p className="text-xs text-slate-600 mb-5 flex-1">Equilibrio del sistema nervioso, mejor descanso y aromaterapia para calmar la mente en tu día a día.</p>
            <span className="inline-block bg-[#0D1B3D] text-[#D4AF37] group-hover:bg-[#1E3A8A] font-bold text-center py-2.5 rounded-full text-xs uppercase tracking-wider">Explorar →</span>
          </a>

          <a href="/conexion-espiritual" className="group bg-white border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all flex flex-col">
            <span className="text-4xl mb-3">🕊️</span>
            <h3 className="font-serif text-xl text-[#0D1B3D] font-bold mb-2">Conexión Espiritual</h3>
            <p className="text-xs text-slate-600 mb-5 flex-1">Un espacio de fe, reflexión y aromaterapia para nutrir tu vida interior tanto como tu cuerpo.</p>
            <span className="inline-block bg-[#0D1B3D] text-[#D4AF37] group-hover:bg-[#1E3A8A] font-bold text-center py-2.5 rounded-full text-xs uppercase tracking-wider">Explorar →</span>
          </a>
        </div>

        <a href="/guia-bogota" className="block bg-white border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-center gap-4">
            <span className="text-4xl">🇨🇴</span>
            <div className="flex-1">
              <h3 className="font-serif text-xl text-[#0D1B3D] font-bold">Guía del Viajero & Experiencias Bogotá</h3>
              <p className="text-xs text-slate-600">Kit de energía para viajeros y los mejores tours recomendados en tu estadía.</p>
            </div>
            <span className="text-[#D4AF37] font-bold text-xs uppercase whitespace-nowrap">Explorar →</span>
          </div>
        </a>
      </section>
    </PageShell>
  );
}
