import React from 'react';

export function ComboCard({
  tag,
  title,
  ingredients,
  description,
  price,
  href,
  buyLabel,
}: {
  tag: string;
  title: string;
  ingredients: string;
  description: string;
  price: string;
  href: string;
  buyLabel: string;
}) {
  return (
    <div className="bg-white border border-[#D4AF37]/30 rounded-3xl p-6 sm:p-8 shadow-lg hover:border-[#D4AF37] transition-all">
      <span className="text-xs font-bold text-[#1E3A8A] uppercase tracking-widest block mb-1">{tag}</span>
      <h3 className="font-serif text-2xl text-[#0D1B3D] font-bold mb-2">{title}</h3>
      <p className="text-xs text-[#D4AF37] font-semibold uppercase mb-3">{ingredients}</p>
      <p className="text-xs sm:text-sm text-slate-600 mb-6">{description}</p>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
        <div>
          <span className="text-xs text-slate-500 block">Precio Oficial Colombia:</span>
          <span className="font-serif text-xl text-[#0D1B3D] font-bold">{price}</span>
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto bg-[#0D1B3D] text-[#D4AF37] hover:bg-[#1E3A8A] font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider text-center"
        >
          {buyLabel}
        </a>
      </div>
    </div>
  );
}

export function CompactCard({
  tag,
  title,
  ingredients,
  description,
  price,
  href,
}: {
  tag: string;
  title: string;
  ingredients: string;
  description: string;
  price: string;
  href: string;
}) {
  return (
    <div className="bg-white border border-[#D4AF37]/30 rounded-3xl p-6 shadow-lg">
      <span className="text-xs font-bold text-[#1E3A8A] uppercase tracking-widest block mb-1">{tag}</span>
      <h4 className="font-serif text-xl text-[#0D1B3D] font-bold mb-2">{title}</h4>
      <p className="text-xs text-[#D4AF37] font-semibold uppercase mb-3">{ingredients}</p>
      <p className="text-xs text-slate-600 mb-4">{description}</p>
      <div className="flex items-center justify-between pt-3 border-t border-slate-100">
        <span className="font-serif text-lg text-[#0D1B3D] font-bold">{price}</span>
        <a href={href} target="_blank" rel="noopener noreferrer" className="bg-[#0D1B3D] text-[#D4AF37] font-bold px-4 py-2 rounded-full text-xs uppercase">
          Comprar →
        </a>
      </div>
    </div>
  );
}
