import React from 'react';
import PageShell from '../components/PageShell';

export default function ConexionEspiritual() {
  return (
    <PageShell active="espiritual">
      <section className="bg-white border border-[#D4AF37]/30 rounded-3xl p-8 shadow-lg">
        <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest block mb-2">🕊️ Conexión Espiritual</span>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#0D1B3D] font-bold mb-4">Un Espacio para tu Vida Interior</h1>
        <p className="text-[#0D1B3D]/80 text-sm sm:text-base leading-relaxed font-light">
          Creemos que el bienestar no termina en el cuerpo. Cuidar tu templo también significa nutrir tu espíritu: hacer pausas conscientes, orar, reflexionar y crear rituales sencillos de calma. Aquí compartimos nuestra filosofía de fe y algunos recursos de aromaterapia que pueden acompañarte en esos momentos.
        </p>
      </section>

      <section className="bg-white border-2 border-[#D4AF37]/40 rounded-3xl p-8 shadow-lg space-y-5">
        <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest block">Nuestra Filosofía</span>
        <h2 className="font-serif text-2xl text-[#0D1B3D] font-bold">Dios, Fe y el Cuidado del Templo</h2>
        <p className="text-sm text-[#0D1B3D]/80 leading-relaxed font-light">
          Dios nos da la vida y cada día es un regalo sagrado. Tomamos decisiones conscientes sobre el cuidado de nuestro templo corporal respaldados en fe y ciencia. Para nosotros, elegir bien lo que comemos, cómo descansamos y cómo tratamos nuestra mente es también una forma de gratitud por la vida recibida.
        </p>

        <blockquote className="border-l-2 border-[#D4AF37] pl-4 italic text-slate-700 space-y-3 py-2">
          <p>&ldquo;Porque yo sé los planes que tengo para ustedes —afirma el Señor—, planes de bienestar y no de maldad, a fin de darles un futuro y una esperanza.&rdquo; <strong className="not-italic block text-xs text-[#1E3A8A] font-sans mt-1">— Jeremías 29:11</strong></p>
          <p>&ldquo;Encomienda al Señor tus obras, y tus pensamientos serán afirmados.&rdquo; <strong className="not-italic block text-xs text-[#1E3A8A] font-sans mt-1">— Proverbios 16:3</strong></p>
          <p>&ldquo;¿No saben que su cuerpo es templo del Espíritu Santo, quien está en ustedes...? Por tanto, honren con su cuerpo a Dios.&rdquo; <strong className="not-italic block text-xs text-[#1E3A8A] font-sans mt-1">— 1 Corintios 6:19-20</strong></p>
        </blockquote>

        <p className="text-sm text-[#0D1B3D]/80 leading-relaxed font-light">
          Un pequeño ritual que recomendamos: separa 5 minutos al día para respirar despacio, agradecer y orar antes de comenzar tu jornada. No reemplaza ningún tratamiento, pero sí ayuda a poner el corazón en calma antes de salir al mundo.
        </p>
      </section>

      <section className="bg-white border border-[#D4AF37]/30 rounded-3xl p-8 shadow-lg">
        <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest block mb-2">Soluciones Holísticas doTERRA</span>
        <h2 className="font-serif text-2xl text-[#0D1B3D] font-bold mb-4">Aromaterapia para Meditación y Oración</h2>
        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
          El aroma puede ser un ancla para la quietud. Muchas personas usan aceites esenciales de grado terapéutico CPTG® como incienso, sándalo o mirra para acompañar su tiempo de oración o meditación — difundidos en el ambiente o aplicados en las manos antes de un momento de silencio. Es un recurso sencillo para separar ese espacio del resto del día ajetreado.
        </p>
        <a href="https://ifuxion.com/havenly" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#1E3A8A] text-[#F7F6F2] hover:bg-[#0D1B3D] font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider shadow-md">
          Consultar Catálogo & Guía doTERRA →
        </a>
      </section>
    </PageShell>
  );
}
