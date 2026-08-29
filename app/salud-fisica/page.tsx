import React from 'react';
import PageShell from '../components/PageShell';
import { ComboCard, CompactCard } from '../components/ComboCard';

export default function SaludFisica() {
  return (
    <PageShell active="fisica">
      <section className="bg-white border border-[#D4AF37]/30 rounded-3xl p-8 shadow-lg">
        <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest block mb-2">💪 Salud Física</span>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#0D1B3D] font-bold mb-4">Combos Nutracéuticos para tu Cuerpo</h1>
        <p className="text-[#0D1B3D]/80 text-sm sm:text-base leading-relaxed font-light">
          Cada combo de esta sección fue probado y verificado personalmente antes de recomendarlo. Están pensados para acompañarte en objetivos concretos: digestión, sistema inmune, control de peso, glicemia, salud hormonal, nutrición gastronómica y nutrición infantil. Encuentra tu ruta y compra directo con el link oficial.
        </p>
      </section>

      <ComboCard
        tag="Combo 1 • Salud Digestiva"
        title="Reparación de Mucosa Intestinal Rota"
        ingredients="PRUNEX 1 + GOLDEN FLX + FLORA LIV + POST SPORT"
        description="La L-Glutamina de Post Sport sella las microfisuras de la pared intestinal, mientras Golden Flex desinflama la mucosa gástrica."
        price="$607.500 COP"
        href="https://tiendafuxion.com/storelt/havenly/3160905"
        buyLabel="Comprar Combo 1 Directo →"
      />

      <ComboCard
        tag="Combo 2 • Sistema Inmunológico"
        title="Detox Global & Alcalinización Celular"
        ingredients="PRUNEX 1 + FLORA LIV + ALPHA BALANCE + VERA+ + GOLDEN FLX"
        description="Alcaliniza la sangre con clorofila y espirulina mientras los beta-glucanos de Vera+ activan los neutrófilos defensivos."
        price="$773.200 COP"
        href="https://tiendafuxion.com/storelt/havenly/3160908"
        buyLabel="Comprar Combo 2 Directo →"
      />

      <ComboCard
        tag="Combo 3 • Longevidad Femenina"
        title="Regeneración & Protección Anti-Edad (Fórmula Bellas)"
        ingredients="BIOPRO + GOLDEN FLX + FLORA LIV"
        description="Regula fitostrógenos naturales para suavizar la premenopausia y promover la regeneración celular nocturna."
        price="$448.100 COP"
        href="https://tiendafuxion.com/storelt/havenly/3160910"
        buyLabel="Comprar Combo 3 Directo →"
      />

      <ComboCard
        tag="Combo 5 • Balance Metabólico"
        title="Hipotiroidismo & Balance Metabólico"
        ingredients="PASSION + GOLDEN FLX + ALPHA BALANCE + FLORA LIV"
        description="Rico en Selenio orgánico de alta asimilación para asistir la síntesis hormonal tiroidea y reducir la retención de líquidos."
        price="$593.800 COP"
        href="https://tiendafuxion.com/storelt/havenly/3160914"
        buyLabel="Comprar Combo 5 Directo →"
      />

      <ComboCard
        tag="Combo 6 • Control de Glicemia"
        title="Diabetes & Control de Glicemia"
        ingredients="NOCARB-T + LIQUID FIBER + CAFÉ & CAFÉ FIT"
        description="Ralentiza la absorción de carbohidratos simples evitando picos de glucosa en sangre tras las comidas."
        price="$424.400 COP"
        href="https://tiendafuxion.com/storelt/havenly/3160915"
        buyLabel="Comprar Combo 6 Directo →"
      />

      <ComboCard
        tag="Combo 7 • Control de Peso"
        title="Fitness & Control de Peso Saludable"
        ingredients="BIOPRO FIT + THERMO T3 + PRE SPORT"
        description="Thermo T3 potencia la termogénesis celular oxidando grasa mientras la patente Prolibra® nutre las fibras musculares."
        price="$405.800 COP"
        href="https://tiendafuxion.com/storelt/havenly/3160916"
        buyLabel="Comprar Combo 7 Directo →"
      />

      <ComboCard
        tag="Combo 8 • Nutrición Infantil"
        title="Nutrición & Defensas Niños y Adolescentes (Lonchera Inteligente)"
        ingredients="BIOPRO TECT + FLORA LIV"
        description="Contiene Bioferrin® (lactoferrina antiviral) y calostro bovino para blindar a los niños contra contagios escolares."
        price="$296.200 COP"
        href="https://tiendafuxion.com/storelt/havenly/3160917"
        buyLabel="Comprar Combo 8 Directo →"
      />

      <ComboCard
        tag="Combo 9 • Salud Gastronómica (Línea Gourmet)"
        title="Bebidas Inteligentes FIT"
        ingredients="CAFÉ & CAFÉ FIT + PROTEIN ACTIVE FIT (Chocolate con Avellanas)"
        description="Una alternativa gourmet para el desayuno o la merienda: proteína funcional y café termogénico en un solo ritual delicioso."
        price="$337.200 COP"
        href="https://tiendafuxion.com/storelt/havenly/3160918"
        buyLabel="Comprar Combo 9 Directo →"
      />

      <ComboCard
        tag="Combo 10 • Salud Gastronómica CHOCOCAFE (Línea Gourmet)"
        title="Bebidas Inteligentes FIT Chococafé"
        ingredients="PROTEIN ACTIVE (Chocolate con Avellanas) + CAFÉ & CAFÉ FIT"
        description="La versión chococafé del ritual gourmet: satisface el antojo dulce mientras aporta proteína y activos termogénicos."
        price="$327.800 COP"
        href="https://tiendafuxion.com/storelt/havenly/3160919"
        buyLabel="Comprar Combo 10 Directo →"
      />

      <CompactCard
        tag="Pack Emergencia"
        title="Pack Rescate del Viajero"
        ingredients="VITA XTRA T + OFF + FLORA LIV + VERA+"
        description="Solución rápida para la indigestión y el tránsito lento en viajes."
        price="$170.600 COP"
        href="https://tiendafuxion.com/storelt/havenly/3160920"
      />
    </PageShell>
  );
}
