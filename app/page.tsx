import React from 'react';

export default function HavenlyHome() {
  return (
    <div className="min-h-screen bg-[#0a1128] text-slate-100 font-sans selection:bg-[#c5a059] selection:text-black">
      
      {/* 1. NAVEGACIÓN PRINCIPAL */}
      <nav className="border-b border-[#c5a059]/20 bg-[#0a1128]/95 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full border border-[#c5a059] flex items-center justify-center bg-[#070b19] shadow-lg shadow-[#c5a059]/10">
              <svg className="w-6 h-6 text-[#c5a059]" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="4" r="2" />
                <path d="M12 7c-2.5 0-4.5 1.5-5 3.5 1.5.5 3.5 1 5 1s3.5-.5 5-1c-.5-2-2.5-3.5-5-3.5z" />
                <path d="M12 12c-3 0-6 1.5-6 4v4h12v-4c0-2.5-3-4-6-4z" />
              </svg>
            </div>
            <span className="font-serif text-2xl tracking-widest text-[#e2c275] font-bold">HAVENLY</span>
          </div>
          <div className="hidden md:flex space-x-8 text-xs uppercase tracking-widest font-semibold">
            <a href="#filosofia" className="hover:text-[#c5a059] transition-colors">Filosofía</a>
            <a href="#campanas" className="hover:text-[#c5a059] transition-colors">Rutas & Protocolos</a>
            <a href="#fuxion" className="hover:text-[#c5a059] transition-colors">FuXion</a>
            <a href="#doterra" className="hover:text-[#c5a059] transition-colors">doTERRA</a>
            <a href="#aliados" className="hover:text-[#c5a059] transition-colors">Marcas Aliadas</a>
          </div>
          <a 
            href="https://ifuxion.com/havenly" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#c5a059] hover:bg-[#b38e47] text-black font-bold px-5 py-2.5 rounded-full text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#c5a059]/20"
          >
            Unirme al Equipo
          </a>
        </div>
      </nav>

      {/* 2. BANNER DE TRANSPARENCIA & COMUNIDAD IA */}
      <div className="bg-gradient-to-r from-[#070b19] via-[#1a2952] to-[#070b19] border-b border-[#c5a059]/30 py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-center sm:text-left text-xs sm:text-sm gap-2">
          <p className="text-slate-300">
            🌱 <strong className="text-[#e2c275]">Construyendo Havenly en vivo con IA:</strong> Transparencia total desde la primera piedra. ¡Aprender juntos es 100% gratis!
          </p>
          <a 
            href="https://ifuxion.com/havenly" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#e2c275] underline font-bold hover:text-white whitespace-nowrap"
          >
            Postularme al Equipo Pionero &rarr;
          </a>
        </div>
      </div>

      {/* 3. HERO & MANIFIESTO DE MARCA */}
      <header id="filosofia" className="relative py-20 px-4 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center space-x-2 p-1.5 px-4 rounded-full border border-[#c5a059]/40 mb-6 bg-[#070b19]/80 backdrop-blur">
          <span className="w-2 h-2 rounded-full bg-[#c5a059] animate-pulse"></span>
          <span className="text-[#c5a059] text-xs font-semibold uppercase tracking-widest">
            Mayordomía de la Salud & Biotecnología
          </span>
        </div>
        
        <h1 className="font-serif text-4xl sm:text-6xl tracking-tight text-white mb-6 leading-tight font-light">
          Tu espacio de equilibrio, fe y transformación integral
        </h1>
        
        <blockquote className="italic font-serif text-lg sm:text-xl text-[#e2c275]/90 mb-8 max-w-2xl mx-auto border-l-2 border-[#c5a059] pl-4 text-left sm:text-center sm:border-l-0 sm:pl-0">
          "Miren las aves del cielo, que no siembran, ni siegan, ni recogen en graneros, y su Padre celestial las alimenta. ¿No valen ustedes mucho más que ellas?"
          <span className="block not-italic text-xs text-slate-400 mt-2">— Mateo 6:26</span>
        </blockquote>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-10 font-light">
          Creemos firmemente que la provisión para nuestra plenitud ya nos fue dada. De la mano de Dios, con constancia y determinación, asumimos la responsabilidad de cuidar nuestro templo corporal. En Havenly no promovemos modas pasajeras: cada protocolo, producto y herramienta ha sido <strong className="text-white font-semibold">probado, verificado y experimentado personalmente</strong> para ofrecerte alivio real a tus cargas diarias.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#campanas" 
            className="bg-[#c5a059] hover:bg-[#b38e47] text-black font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-widest transition-all shadow-lg shadow-[#c5a059]/10"
          >
            Ver Rutas de Bienestar
          </a>
          <a 
            href="https://ifuxion.com/havenly" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-[#c5a059]/50 hover:bg-[#c5a059]/10 text-white font-semibold px-8 py-3.5 rounded-full text-xs uppercase tracking-widest transition-all"
          >
            Afiliarme al Equipo Pionero
          </a>
        </div>
      </header>

      {/* 4. RUTAS DE BIENESTAR CON FICHAS TÉCNICAS COMPLETAS */}
      <section id="campanas" className="py-20 bg-[#070b19] border-t border-[#c5a059]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold text-[#c5a059] uppercase tracking-widest block mb-2">Entendemos tu dolor</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">Soluciones explicadas paso a paso</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              No te enviamos a un carrito de compras frío. Aquí entiendes exactamente qué estás comprando, por qué lo necesitas y cómo consumirlo.
            </p>
          </div>

          <div className="space-y-16">

            {/* RUTA 1: MENTE EN CALMA */}
            <div className="bg-[#0a1128] border border-[#c5a059]/30 rounded-3xl p-6 sm:p-8 grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 relative group">
                <div className="aspect-square rounded-2xl overflow-hidden bg-[#111c3a] border border-[#c5a059]/20 flex items-center justify-center p-6">
                  <img 
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80" 
                    alt="Ruta Mente en Calma" 
                    className="w-full h-full object-cover rounded-xl opacity-90 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="absolute top-4 left-4 bg-[#070b19]/90 border border-[#c5a059] text-[#e2c275] text-xs font-bold px-3 py-1 rounded-full">
                  Ruta 1 • Salud Emocional
                </span>
              </div>

              <div className="md:col-span-7">
                <h3 className="font-serif text-2xl sm:text-3xl text-white mb-3">Ruta Mente en Calma (Enfoque, TDAH & Desánimo)</h3>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  Para quienes viven sobrepasados por el estrés ejecutivo, niebla cerebral, déficit de atención o estados de agotamiento emocional. Nutrimos el sistema nervioso central desde la célula.
                </p>

                <div className="bg-[#070b19] p-5 rounded-2xl border border-slate-800 space-y-3 mb-6">
                  <div>
                    <strong className="text-xs text-[#e2c275] uppercase block font-semibold">📦 Paquete FuXion Incluido:</strong>
                    <span className="text-sm text-white font-medium">Combo Enfoque & Calma (NOOFF + OFF)</span>
                  </div>
                  <div>
                    <strong className="text-xs text-[#e2c275] uppercase block font-semibold">💡 ¿Por qué consumirlo?:</strong>
                    <span className="text-xs text-slate-300">Aporta L-teanina, aminoácidos esenciales y fitonutrientes que optimizan neurotransmisores sin generar adicción ni somnolencia.</span>
                  </div>
                  <div>
                    <strong className="text-xs text-[#e2c275] uppercase block font-semibold">☕ ¿Cómo se consume?:</strong>
                    <span className="text-xs text-slate-300"><strong>NOOFF:</strong> 1 stick disuelto en agua fría a media mañana para enfoque. <strong>OFF:</strong> 1 stick tibio antes de dormir para relajar la mente.</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-slate-400 block">Precio ref. público:</span>
                    <span className="font-serif text-xl text-[#e2c275] font-bold">Desde $48.00 USD / $195.000 COP</span>
                  </div>
                  <a 
                    href="https://ifuxion.com/havenly" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-[#c5a059] hover:bg-[#b38e47] text-black font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider text-center transition-all"
                  >
                    Comprar Paquete en FuXion
                  </a>
                </div>
              </div>
            </div>

            {/* RUTA 2: RENACER 40+ */}
            <div className="bg-[#0a1128] border border-[#c5a059]/30 rounded-3xl p-6 sm:p-8 grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 relative group">
                <div className="aspect-square rounded-2xl overflow-hidden bg-[#111c3a] border border-[#c5a059]/20 flex items-center justify-center p-6">
                  <img 
                    src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80" 
                    alt="Ruta Renacer 40+" 
                    className="w-full h-full object-cover rounded-xl opacity-90 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="absolute top-4 left-4 bg-[#070b19]/90 border border-[#c5a059] text-[#e2c275] text-xs font-bold px-3 py-1 rounded-full">
                  Ruta 2 • Bienestar Femenino
                </span>
              </div>

              <div className="md:col-span-7">
                <h3 className="font-serif text-2xl sm:text-3xl text-white mb-3">Ruta Renacer 40+ (Premenopausia & Balance)</h3>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  Diseñado para la mujer en sus 30s tardíos, 40s y 50s. Acompaña las fluctuaciones hormonales, preserva la firmeza de la piel y mantiene la energía vital alta.
                </p>

                <div className="bg-[#070b19] p-5 rounded-2xl border border-slate-800 space-y-3 mb-6">
                  <div>
                    <strong className="text-xs text-[#e2c275] uppercase block font-semibold">📦 Paquete FuXion Incluido:</strong>
                    <span className="text-sm text-white font-medium">Combo Plenitud Femenina (PROBAL + BEAUTY IN)</span>
                  </div>
                  <div>
                    <strong className="text-xs text-[#e2c275] uppercase block font-semibold">💡 ¿Por qué consumirlo?:</strong>
                    <span className="text-xs text-slate-300">Combina fitoestrógenos de soya y manzanilla con péptidos bioactivos de colágeno hidrolizado tipo 1 y 3.</span>
                  </div>
                  <div>
                    <strong className="text-xs text-[#e2c275] uppercase block font-semibold">☕ ¿Cómo se consume?:</strong>
                    <span className="text-xs text-slate-300"><strong>PROBAL:</strong> 1 taza tibia por la tarde. <strong>BEAUTY IN:</strong> 1 toma fría por la noche antes de descansar.</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-slate-400 block">Precio ref. público:</span>
                    <span className="font-serif text-xl text-[#e2c275] font-bold">Desde $52.00 USD / $210.000 COP</span>
                  </div>
                  <a 
                    href="https://ifuxion.com/havenly" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-[#c5a059] hover:bg-[#b38e47] text-black font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider text-center transition-all"
                  >
                    Comprar Paquete en FuXion
                  </a>
                </div>
              </div>
            </div>

            {/* RUTA 3: VITALIDAD DORADA */}
            <div className="bg-[#0a1128] border border-[#c5a059]/30 rounded-3xl p-6 sm:p-8 grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 relative group">
                <div className="aspect-square rounded-2xl overflow-hidden bg-[#111c3a] border border-[#c5a059]/20 flex items-center justify-center p-6">
                  <img 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80" 
                    alt="Ruta Vitalidad Dorada" 
                    className="w-full h-full object-cover rounded-xl opacity-90 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="absolute top-4 left-4 bg-[#070b19]/90 border border-[#c5a059] text-[#e2c275] text-xs font-bold px-3 py-1 rounded-full">
                  Ruta 3 • Longevidad
                </span>
              </div>

              <div className="md:col-span-7">
                <h3 className="font-serif text-2xl sm:text-3xl text-white mb-3">Ruta Vitalidad Dorada (Tercera Edad & Descanso)</h3>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  Para adultos mayores y personas que buscan conservar articulaciones ágiles, memoria activa y un sueño reparador continuo sin dolor articular.
                </p>

                <div className="bg-[#070b19] p-5 rounded-2xl border border-slate-800 space-y-3 mb-6">
                  <div>
                    <strong className="text-xs text-[#e2c275] uppercase block font-semibold">📦 Paquete FuXion Incluido:</strong>
                    <span className="text-sm text-white font-medium">Combo Movilidad & Calma (GOLDEN FLX + OFF)</span>
                  </div>
                  <div>
                    <strong className="text-xs text-[#e2c275] uppercase block font-semibold">💡 ¿Por qué consumirlo?:</strong>
                    <span className="text-xs text-slate-300">Extracto de cúrcuma orgánica biodisponible, jengibre y cardamomo para desinflamar tejidos duros y blandos.</span>
                  </div>
                  <div>
                    <strong className="text-xs text-[#e2c275] uppercase block font-semibold">☕ ¿Cómo se consume?:</strong>
                    <span className="text-xs text-slate-300"><strong>GOLDEN FLX:</strong> 1 taza tibia a media mañana o tarde. <strong>OFF:</strong> 1 toma 30 minutos antes de dormir.</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-slate-400 block">Precio ref. público:</span>
                    <span className="font-serif text-xl text-[#e2c275] font-bold">Desde $50.00 USD / $200.000 COP</span>
                  </div>
                  <a 
                    href="https://ifuxion.com/havenly" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-[#c5a059] hover:bg-[#b38e47] text-black font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider text-center transition-all"
                  >
                    Comprar Paquete en FuXion
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. SECCIÓN FUXION & AFILIACIÓN DE SISTEMA AUTOMATIZADO */}
      <section id="fuxion" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#111c3a] to-[#070b19] border border-[#c5a059]/40 rounded-3xl p-8 sm:p-12">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-[#c5a059] uppercase tracking-widest block mb-2">Biotecnología FuXion</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6">Dos opciones para unirte a nuestro ecosistema</h2>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-[#0a1128] p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl text-[#e2c275] mb-2">1. Cliente Preferente</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Compra productos 100% orgánicos Clean Label directo de fábrica con entrega a domicilio en +14 países.
                  </p>
                </div>
                <a 
                  href="https://ifuxion.com/havenly" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#c5a059] hover:underline"
                >
                  Ir a Tienda FuXion &rarr;
                </a>
              </div>

              <div className="bg-[#0a1128] p-6 rounded-2xl border border-[#c5a059]/40 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl text-[#e2c275] mb-2">2. Equipo Pionero</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Súmate a nuestro equipo de ventas automatizadas e IA. Convocatoria abierta hasta el <strong className="text-white">23 de septiembre</strong>.
                  </p>
                </div>
                <a 
                  href="https://ifuxion.com/havenly" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#c5a059] hover:underline"
                >
                  Afiliarme al Equipo &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECCIÓN DOTERRA */}
      <section id="doterra" className="py-16 bg-[#070b19] border-t border-[#c5a059]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-semibold text-[#c5a059] uppercase tracking-widest block mb-1">Aromaterapia de Grado Terapéutico</span>
            <h2 className="font-serif text-2xl text-white">doTERRA • Pureza Botánica</h2>
            <p className="text-xs text-slate-300 mt-1">Soporte emocional y físico complementario a través de aceites esenciales puros.</p>
          </div>
          <span className="text-xs text-slate-400 bg-[#111c3a] border border-slate-800 px-5 py-2.5 rounded-full">
            Próximamente Integrado
          </span>
        </div>
      </section>

      {/* 7. MARCAS ALIADAS (CJ AFFILIATES) */}
      <section id="aliados" className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold text-[#c5a059] uppercase tracking-widest block mb-2">Curaduría Personal</span>
          <h2 className="font-serif text-3xl text-white mb-2">Marcas Aliadas Verificadas</h2>
          <p className="text-xs text-slate-400">Herramientas, suplementos y plataformas aprobadas bajo nuestra experiencia previa.</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-[#070b19] rounded-2xl border border-slate-800">
            <h3 className="font-serif text-base text-white mb-1">Tecnología de Bienestar</h3>
            <p className="text-xs text-slate-400">Monitoreo de descanso y biodatos.</p>
          </div>
          <div className="p-6 bg-[#070b19] rounded-2xl border border-slate-800">
            <h3 className="font-serif text-base text-white mb-1">Purificación de Agua</h3>
            <p className="text-xs text-slate-400">Sistemas de filtrado celular.</p>
          </div>
          <div className="p-6 bg-[#070b19] rounded-2xl border border-slate-800">
            <h3 className="font-serif text-base text-white mb-1">Recursos Espirituales</h3>
            <p className="text-xs text-slate-400">Lectura y crecimiento en fe.</p>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="border-t border-[#c5a059]/20 bg-[#070b19] py-12 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4">
          <p className="font-serif text-lg text-[#e2c275] mb-1 font-bold">HAVENLY</p>
          <p className="mb-4 text-slate-400">Salud • Balance • Mayordomía de la Salud</p>
          <p className="text-slate-600 max-w-xl mx-auto leading-relaxed">
            Las declaraciones y productos mostrados no pretenden diagnosticar, tratar ni curar enfermedades. Consulte siempre a su profesional de la salud.
          </p>
          <p className="mt-6 text-slate-600">&copy; 2026 Havenly. Todos los derechos reservados.</p>
        </div>
      </footer>

    </div>
  );
}
