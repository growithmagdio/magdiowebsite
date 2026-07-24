import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight, FaHome } from 'react-icons/fa';

export default function Breadcrumb({ items = [] }) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="py-2.5 px-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md inline-flex items-center gap-2 text-xs md:text-sm text-white/70 mb-6 flex-wrap">
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <span key={idx} className="flex items-center gap-2">
            {idx > 0 && <FaChevronRight size={9} className="text-white/40 shrink-0" />}
            {item.path && !isLast ? (
              <Link 
                to={item.path} 
                className="hover:text-brand-yellow transition-colors flex items-center gap-1 font-medium text-white/80"
              >
                {idx === 0 && <FaHome size={12} className="mr-1 shrink-0 text-brand-yellow" />}
                {item.label}
              </Link>
            ) : (
              <span className="text-white font-bold flex items-center gap-1">
                {idx === 0 && <FaHome size={12} className="mr-1 shrink-0 text-brand-yellow" />}
                {item.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
