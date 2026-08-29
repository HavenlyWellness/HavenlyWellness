import React from 'react';

const NAV_ITEMS = [
  { href: '/salud-fisica', key: 'fisica', icon: '💪', label: 'Salud Física', desc: 'Combos nutracéuticos verificados FuXion.' },
  { href: '/salud-emocional', key: 'emocional', icon: '🧠', label: 'Salud Emocional', desc: 'Equilibrio nervioso, sueño y calma.' },
  { href: '/conexion-espiritual', key: 'espiritual', icon: '🕊️', label: 'Conexión Espiritual', desc: 'Fe, aromaterapia y bienestar interior.' },
  { href: '/guia-bogota', key: 'bogota', icon: '🇨🇴', label: 'Guía del Viajero & Bogotá', desc: 'Kit de viaje y experiencias recomendadas.' },
];

export default function PageShell({
  active,
  children,
}: {
  active: 'inicio' | 'fisica' | 'emocional' | 'espiritual' | 'bogota';
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#0D1B3D] font-sans leading-relaxed selection:bg-[#D4AF37] selection:text-black">

      {/* DISCLAIMER SUPERIOR OFICIAL */}
      <div className="bg-[#0D1B3D] text-[#F7F6F2] border-b border-[#D4AF37]/40 py-2.5 px-4 text-center text-xs sm:text-sm font-semibold sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <span>✓ Asesoría Nutracéutica Independiente (FuXion & doTERRA)</span>
          <span className="text-[#D4AF37]">|</span>
          <span>Acompañamiento Personalizado Internacional</span>
          <span className="text-[#D4AF37]">|</span>
          <a href="https://ifuxion.com/havenly" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:text-white underline font-bold transition-colors">
            Ver Tienda Oficial Global &rarr;
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-12 gap-8 px-4 sm:px-6 lg:px-8 py-8">

        {/* SIDEBAR LATERAL FIJO */}
        <aside className="lg:col-span-4 mb-12 lg:mb-0">
          <div className="lg:sticky lg:top-16 bg-white border-2 border-[#D4AF37]/40 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">

            <a href="/" className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-2xl border-2 border-[#D4AF37] flex items-center justify-center bg-white shadow-md mb-3">
                <svg className="w-12 h-12 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="4" r="2" />
                  <path d="M12 7c-2.5 0-4.5 1.5-5 3.5 1.5.5 3.5 1 5 1s3.5-.5 5-1c-.5-2-2.5-3.5-5-3.5z" />
                  <path d="M12 12c-3 0-6 1.5-6 4v4h12v-4c0-2.5-3-4-6-4z" />
                </svg>
              </div>
              <span className="font-serif text-3xl font-extrabold tracking-widest text-[#0D1B3D]">HAVENLY</span>
              <span className="text-[10px] tracking-[0.25em] text-[#1E3A8A] font-bold uppercase mt-1">WELLNESS · BALANCE · SANCTUARY</span>
            </a>

            <hr className="border-[#D4AF37]/30" />

            <div className="space-y-3">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest block text-center">Explora por Categoría</span>

              {NAV_ITEMS.map((item) => {
                const isActive = active === item.key;
                return (
                  <a
                    key={item.key}
                    href={item.href}
                    className={
                      isActive
                        ? 'block bg-[#D4AF37]/10 border-2 border-[#D4AF37] p-3.5 rounded-2xl transition-all group'
                        : 'block bg-[#F7F6F2] hover:bg-[#D4AF37]/10 border border-[#D4AF37]/40 p-3.5 rounded-2xl transition-all group'
                    }
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">{item.icon}</span>
                      <div>
                        <strong className={isActive ? 'text-xs uppercase text-[#1E3A8A] font-bold block' : 'text-xs uppercase text-[#0D1B3D] font-bold block group-hover:text-[#1E3A8A]'}>
                          {item.label}
                        </strong>
                        <span className="text-[11px] text-slate-600">{item.desc}</span>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            <hr className="border-[#D4AF37]/30" />

            <div className="space-y-3 text-xs text-[#0D1B3D]/90">
              <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest block text-center">Nuestra Filosofía</span>
              <p className="font-light leading-relaxed">
                Dios nos da la vida y cada día es un regalo sagrado. Tomamos decisiones conscientes sobre el cuidado de nuestro templo corporal respaldados en fe y ciencia.
              </p>
            </div>

            <a href="https://ifuxion.com/havenly" target="_blank" rel="noopener noreferrer" className="block w-full bg-[#D4AF37] hover:bg-[#b8952b] text-[#0D1B3D] font-extrabold text-center py-3.5 rounded-full text-xs uppercase tracking-wider shadow-lg transition-all">
              Unirme al Equipo Pionero
            </a>
          </div>
        </aside>

        {/* ÁREA PRINCIPAL DE CONTENIDO */}
        <main className="lg:col-span-8 space-y-8">
          {children}

          {/* FOOTER COMPLETO */}
          <footer className="border-t border-[#D4AF37]/30 bg-white rounded-3xl p-8 text-center space-y-4 shadow-md">
            <div className="flex justify-center">
              <div className="w-14 h-14 rounded-2xl border border-[#D4AF37] flex items-center justify-center bg-white shadow-md">
                <svg className="w-7 h-7 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="4" r="2" />
                  <path d="M12 7c-2.5 0-4.5 1.5-5 3.5 1.5.5 3.5 1 5 1s3.5-.5 5-1c-.5-2-2.5-3.5-5-3.5z" />
                  <path d="M12 12c-3 0-6 1.5-6 4v4h12v-4c0-2.5-3-4-6-4z" />
                </svg>
              </div>
            </div>
            <div>
              <p className="font-serif font-extrabold text-[#0D1B3D] text-lg tracking-wider">HAVENLY WELLNESS</p>
              <p className="text-xs text-[#1E3A8A] uppercase tracking-widest font-bold">Salud · Balance · Sanctuary</p>
            </div>
            <p className="text-slate-500 text-xs max-w-lg mx-auto leading-relaxed">
              Un santuario para el cuerpo, la mente y el espíritu. Marca de asesoría nutracéutica independiente afiliada a FuXion y doTERRA.
            </p>
            <p className="text-slate-400 text-[11px]">&copy; 2026 Havenly. Todos los derechos reservados.</p>
          </footer>
        </main>
      </div>
    </div>
  );
}
